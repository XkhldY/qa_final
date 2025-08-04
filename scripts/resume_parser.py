import os
import re

SKILLS = [
    "Python", "Java", "C++", "C#", "JavaScript", "TypeScript", "SQL", "NoSQL", "Ruby", "Go", "Rust", "Scala", "Kotlin",
    "PHP", "HTML", "CSS", "React", "Angular", "Vue", "Django", "Flask", "Spring", "Node.js", "Express", "AWS", "Azure",
    "GCP", "Docker", "Kubernetes", "Git", "Linux", "Bash", "Agile", "Scrum", "Kanban", "Leadership", "Communication",
    "Problem-solving", "Teamwork", "Time management", "Adaptability", "Critical thinking", "Machine Learning",
    "Deep Learning", "Data Analysis", "Data Science", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Excel",
    "Project Management", "Creativity"
]

def extract_text(path: str) -> str:
    _, ext = os.path.splitext(path)
    ext = ext.lower()
    if ext == ".pdf":
        from pdfminer.high_level import extract_text as pdf_extract_text
        return pdf_extract_text(path)
    elif ext == ".docx":
        import docx2txt
        return docx2txt.process(path)
    elif ext == ".txt":
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            return f.read()
    else:
        raise ValueError(f"Unsupported file extension: {ext}")

def find_matches(pattern, text):
    return re.findall(pattern, text, flags=re.IGNORECASE | re.MULTILINE)

def parse_resume(path: str) -> dict:
    text = extract_text(path)
    lines = [line.strip() for line in text.splitlines()]
    name = next((line for line in lines if line), None) or ""
    email_pattern = r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+"
    email_matches = find_matches(email_pattern, text)
    email = email_matches[0] if email_matches else ""
    phone_pattern = (
        r"(\+?\d{1,3}[-.\s]?)?(\(?\d{3,4}\)?[-.\s]?)?\d{3}[-.\s]?\d{4,6}"
    )
    phone_matches = find_matches(phone_pattern, text)
    phone = ""
    if phone_matches:
        # Flatten tuple results and join
        for match in phone_matches:
            if isinstance(match, tuple):
                phone = "".join(match).strip()
                if phone:
                    break
            else:
                phone = match.strip()
                break
    found_skills = []
    text_lower = text.lower()
    for skill in SKILLS:
        if skill.lower() in text_lower and skill not in found_skills:
            found_skills.append(skill)
    return {
        "name": name,
        "email": email,
        "phone": phone,
        "skills": found_skills,
        "raw_text": text
    }