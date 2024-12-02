import { ChevronLeftIcon } from "@heroicons/react/24/solid"  // For Heroicons v2
function Frontpage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-black text-white w-full h-full p-6 rounded-lg shadow-lg flex flex-col justify-between">
      {/* Back Button */}
      <button
        onClick={() => onNavigate("get-data")} // Navigate to 'get-data' page
        className="absolute top-4 left-4 p-2 bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <div className="text-center">
        <img
          src="/path/to/extension-logo.png"
          alt="Extension Logo"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">Web Scraping Tool</h1>
        <p className="text-sm font-light mb-6">
          This tool automates web data extraction using advanced techniques,
          enabling users to easily collect and analyze data for research, data
          mining, and more.
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onNavigate("get-data")}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold focus:outline-none"
        >
          Get Table Data
        </button>
        <button
          onClick={() => onNavigate("use-prompts")}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold focus:outline-none"
        >
          Use Prompts
        </button>
      </div>
    </div>
  );
}

export default Frontpage;
