import React, { useState } from "react";
import { askCohere } from "../services/cohere";
import "../styles/chatBox.scss"; // ✅ Import SCSS

type Props = {
  onResponse: (user: string, ai: string) => void;
};

export default function ChatBox({ onResponse }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    try {
      const ai = await askCohere(input);
      onResponse(input, ai);
      setInput("");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-box">
      <textarea
        placeholder="Ask AI something..."
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <div className="chat-actions">
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Thinking..." : "Ask AI"}
        </button>
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
}
