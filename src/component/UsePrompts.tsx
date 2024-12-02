import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid"  // For Heroicons v2

const UsePrompts: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const prompts = [
    "Generate a summary of the web page",
    "Find contact information",
    "Extract key statistics from the table",
  ];

  return (
    <div className="bg-black text-white h-full p-6 flex flex-col relative">
      {/* Back Button */}
      <button
        onClick={() => onNavigate("frontpage")} // Navigate to frontpage
        className="absolute top-4 left-4 p-2 bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <header className="text-center text-2xl font-semibold mb-6">
        Default Prompts
      </header>

      <main className="flex-grow container mx-auto">
        <ul className="list-disc pl-5">
          {prompts.map((prompt, index) => (
            <li key={index} className="mb-2">
              {prompt}
            </li>
          ))}
        </ul>
      </main>

      <footer className="text-center mt-6">
        {/* The existing Go Back button */}
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold"
          onClick={() => onNavigate("frontpage")} // Navigate to frontpage
        >
          Go Back
        </button>
      </footer>
    </div>
  );
};

export default UsePrompts;
