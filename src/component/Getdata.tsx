import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid"  // For Heroicons v2 // Import back icon

// Placeholder for the AI session
let session: any = null;

async function getSession(): Promise<any> {
  try {
    if (session === null) {
      session = await (window as any).ai.languageModel.create();
    }
    return session;
  } catch (e) {
    console.error(e);
    throw new Error("Error creating session, AI not enabled.");
  }
}

const Getdata: React.FC = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ id: number; text: string; sender: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getSession().catch((e) => setError(e.message));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { id: messages.length + 1, text: input, sender: "You" };
    setMessages([...messages, newMessage]);
    setInput(""); // Reset input field

    try {
      setLoading(true); // Show loading indicator
      const sessionInstance = await getSession();
      const aiResponse = await sessionInstance.prompt(input);
      const response = { id: messages.length + 2, text: aiResponse, sender: "Local Chrome AI" };
      setMessages((currentMessages) => [...currentMessages, response]);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-black text-white">
      {/* Back Button */}
      <button
        onClick={() => onNavigate("frontpage")}
        className="absolute top-4 left-4 p-2 bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <header className="text-center">
        <h1 className="text-lg font-bold mb-2">Get Generalized Data</h1>
      </header>

      <main className="flex-grow overflow-auto bg-gray-800 p-3 rounded-lg">
        {error ? (
          <div className="bg-red-100 text-red-800 p-2 rounded-md text-center">
            <strong>Error:</strong> {error}
          </div>
        ) : (
          <div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-2 mb-2 rounded-md ${
                  message.sender === "Local Chrome AI" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                }`}
              >
                <p>
                  <strong>{message.sender}:</strong> {message.text}
                </p>
              </div>
            ))}
            {loading && <p className="text-blue-300">AI is thinking...</p>}
          </div>
        )}
      </main>

      <footer className="mt-4">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question here..."
            className="flex-grow border border-gray-300 p-2 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default {Getdata,getSession};
