import { useState } from "react";
import ChatBox from "./components/chatBox";
import ChatHistory from "./components/chatHistory";

function App() {
  const [history, setHistory] = useState<{ user: string; ai: string }[]>([]);

  function addToHistory(user: string, ai: string) {
    setHistory((prev) => [...prev, { user, ai }]);
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Ask AI</h1>
      <ChatBox onResponse={addToHistory} />
      <ChatHistory history={history} onClear={() => setHistory([])} />
    </div>
  );
}

export default App;
