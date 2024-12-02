function Frontpage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-black text-white w-full h-full p-6 rounded-lg shadow-lg flex flex-col justify-between">
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
          Use Prompts
          
        </button>
        <button
          onClick={() => onNavigate("use-prompts")}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold focus:outline-none"
        >
          Get Table Data
        </button>
      </div>
    </div>
  );
}

export default Frontpage;
