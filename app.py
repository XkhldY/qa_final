'''
Flask backend for Duo Task.
Now serves as both API and static file host for React SPA.
'''
import os
import tempfile
from flask import Flask, jsonify, send_from_directory, request

from flask_cors import CORS

app = Flask(__name__, static_folder='react-build', static_url_path='')
CORS(app)

try:
    from scripts.resume_parser import parse_resume
except ImportError:
    # For local dev, allow app to run even if resume_parser isn't available yet
    parse_resume = None

def get_greeting_msg():
    hostname = os.getenv('HOSTNAME')
    name = os.getenv('YOUR_NAME')
    if not name:
        name = "friend"
    # Match original formatting
    return f"Hello and welcome {name}.\n\nI'm currently running in {hostname}."

@app.route('/api/hello')
def api_hello():
    return jsonify({"message": get_greeting_msg()})

# Serve React static files (SPA catch-all)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    root_dir = os.path.join(os.getcwd(), 'react-build')
    # If file exists (js/css/img, etc.), serve it
    if path and os.path.exists(os.path.join(root_dir, path)):
        return send_from_directory(root_dir, path)
    # Otherwise, serve index.html for SPA client routing
    return send_from_directory(root_dir, 'index.html')

@app.route("/api/parse-resumes", methods=["POST"])
def api_parse_resumes():
    if parse_resume is None:
        return jsonify({"error": "Resume parser module not available"}), 500
    results = []
    files = request.files.getlist("files")
    for f in files:
        temp = tempfile.NamedTemporaryFile(delete=False)
        try:
            f.save(temp.name)
            try:
                data = parse_resume(temp.name)
                results.append({
                    "filename": f.filename,
                    "data": data
                })
            except Exception as e:
                results.append({
                    "filename": f.filename,
                    "error": str(e)
                })
        finally:
            temp.close()
            os.unlink(temp.name)
    return jsonify({"results": results})

if __name__=='__main__':
    app.run(host='0.0.0.0', port=5500, debug=True)
