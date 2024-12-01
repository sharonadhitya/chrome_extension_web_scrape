import './App.css'

function App() {
  return (
    <>
    <div className="bg-black text-white w-72 p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <h1 className="text-2xl font-semibold mb-4">Web Scraping Tool</h1>
      <p className="text-sm font-light mb-6">
      This tool automates web data extraction using Selenium, enabling users to easily collect and analyze 
      information from websites for various purposes, such as research, data mining, and automation tasks.      </p>
      <div className="flex space-x-4">
        <button
          id="start-scraping"
          className="px-6 py-2 bg-black hover:bg-black rounded-md text-white font-semibold focus:outline-none"
        >
          Start Scraping
        </button>
        <button
          id="close"
          className="px-6 py-2 bg-black hover:bg-black rounded-md text-white font-semibold focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
    </>
  )
}

export default App
