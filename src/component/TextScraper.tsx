import React from 'react';
import { scrapeTextContent } from '../utils/scrapeText.ts';

const TextScraper: React.FC = () => {
  const handleScrape = () => {
    const extractedText = scrapeTextContent();
    console.log(extractedText);
    
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={handleScrape}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Extract Text Content
      </button>
    </div>
  );
};

export default TextScraper;
