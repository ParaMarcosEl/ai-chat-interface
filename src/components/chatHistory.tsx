import "../styles/chatHistory.scss"; // ✅ Import SCSS

type Message = {
  user: string;
  ai: string;
};

type Props = {
  history: Message[];
  onClear: () => void;
};

export default function ChatHistory({ history, onClear }: Props) {
  return (
    <div className="chat-history">
      <div className="header">
        <h2>Chat History</h2>
        <button onClick={onClear}>Clear</button>
      </div>
      {[...history].map((msg, idx) => (
        <div key={idx} className="message">
          <div className="user-msg">
            <strong>You:</strong> {msg.user}
          </div>
          <div className="ai-msg">
            <strong>AI:</strong> {msg.ai}
          </div>
        </div>
      ))}
    </div>
  );
}
