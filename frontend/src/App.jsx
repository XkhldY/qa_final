import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch greeting");
        return res.json();
      })
      .then((data) => {
        setMsg(data.message);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error: " + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Duo Flask + React</h1>
        {loading && <div className="spin">Loading…</div>}
        {!loading && !error && (
          <pre className="greeting">{msg}</pre>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}