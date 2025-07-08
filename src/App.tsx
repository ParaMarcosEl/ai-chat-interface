import { useState } from "react";
import ChatBox from "./components/chatBox";
import ChatHistory from "./components/chatHistory";
import "./styles/App.scss"; // ✅ Import SCSS

function App() {
  const [history, setHistory] = useState<{ user: string; ai: string }[]>([]);

  function addToHistory(user: string, ai: string) {
    setHistory((prev) => [...prev, { user, ai }]);
  }

  return (
    <div className="app">
      <h1 className="app-title">Ask AI</h1>
      <ChatBox onResponse={addToHistory} />
      <ChatHistory history={history} onClear={() => setHistory([])} />
    </div>
  );
}

export default App;
