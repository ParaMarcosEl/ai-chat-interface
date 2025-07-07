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
    <div className="max-w-xl mx-auto mt-6">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-semibold">Chat History</h2>
        <button
          onClick={onClear}
          className="text-sm text-red-500 hover:underline"
        >
          Clear
        </button>
      </div>
      {history.map((msg, idx) => (
        <div key={idx} className="mb-4">
          <div className="bg-gray-100 p-2 rounded">
            <strong>You:</strong> {msg.user}
          </div>
          <div className="bg-blue-50 p-2 rounded mt-1">
            <strong>AI:</strong> {msg.ai}
          </div>
        </div>
      ))}
    </div>
  );
}
