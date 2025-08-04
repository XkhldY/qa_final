import os
import argparse
import json
from tqdm import tqdm

from scripts.resume_parser import parse_resume

def find_resume_files(root):
    for dirpath, _, filenames in os.walk(root):
        for fname in filenames:
            if fname.lower().endswith(('.pdf', '.docx', '.txt')):
                yield os.path.relpath(os.path.join(dirpath, fname), root)

def main():
    parser = argparse.ArgumentParser(description="Batch parse resumes in a directory.")
    parser.add_argument('--input', required=True, help='Input directory')
    parser.add_argument('--output', help='Output JSON file (default: stdout)')
    args = parser.parse_args()

    files = list(find_resume_files(args.input))
    results = []
    for rel_path in tqdm(files, desc="Parsing resumes"):
        abs_path = os.path.join(args.input, rel_path)
        try:
            data = parse_resume(abs_path)
            results.append({
                "filename": rel_path,
                "data": data
            })
        except Exception as e:
            results.append({
                "filename": rel_path,
                "error": str(e)
            })

    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
    else:
        print(json.dumps(results, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()