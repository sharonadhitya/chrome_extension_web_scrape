import { useEffect, useState, FormEvent, ChangeEvent } from 'react';

let session: any = null;

async function getSession(): Promise<any> {
  try {
    if (session === null) {
      session = await (window as any).ai.languageModel.create();
    }
    return session;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);  // Safe access to message
      throw new Error(e.message);
    }
    throw new Error('Unknown error occurred');
  }
}

interface Message {
  id: number;
  text: string;
  sender: 'You' | 'Local Chrome AI';
}

export default function Home() {
  const [input, setInput] = useState<string>(''); 
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSession().catch((e) => {
      // Type-safe error handling
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred');
      }
    });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMessage: Message = { id: messages.length + 1, text: input, sender: 'You' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const session = await getSession();
      const aiResponse = await session.prompt(input);
      const response: Message = { id: messages.length + 2, text: aiResponse, sender: 'Local Chrome AI' };
      setMessages((prevMessages) => [...prevMessages, response]);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message); // Type-safe error handling
      } else {
        setError('An unknown error occurred');
      }
    }

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <head>
        <title>Google Chrome Local LLM in Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header className="bg-blue-600 text-white p-4 text-lg">
        Google Chrome Local LLM in Browser
      </header>

      <main className="flex-grow container mx-auto p-4">
        {error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Chat with AI</h2>
              <div className="my-4">
                {messages.map((message) => (
                  <div key={message.id} className={`p-2 ${message.sender === 'Local Chrome AI' ? 'bg-blue-100' : 'bg-green-100'}`}>
                    <p>{message.sender}: {message.text}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your question here..."
                  className="flex-grow p-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
