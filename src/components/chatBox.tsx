import React, { useState } from "react";
import { askCohere } from "../services/cohere";

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
    <div className="w-full max-w-xl mx-auto mt-10">
      <textarea
        className="w-full p-2 border rounded mb-2"
        placeholder="Ask AI something..."
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-between items-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
        {error && <span className="text-red-600 text-sm">{error}</span>}
      </div>
    </div>
  );
}
