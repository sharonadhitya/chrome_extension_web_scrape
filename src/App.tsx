import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Frontpage from "./component/frontpage";
import Getdata from "./component/Getdata";
import Useprompts from "./component/UsePrompts";  // Assuming you have this component

const App: React.FC = () => {
  const [showContent, setShowContent] = useState<string>("frontpage"); // State to handle which page to show

  const handleNavigation = (page: string) => {
    setShowContent(page);  // Conditionally show content based on the page selected
  };

  return (
    <Router>
      <div className="App m-0 p-0 w-[400px] h-[500px] flex flex-col justify-between items-center bg-black text-white font-sans">
        {/* Conditionally render content based on state */}
        {showContent === "frontpage" ? (
          <Frontpage onNavigate={handleNavigation} />
        ) : showContent === "get-data" ? (
          <Getdata onNavigate={handleNavigation} />
        ) : showContent === "use-prompts" ? (
          <Useprompts onNavigate={handleNavigation} />
        ) : (
          <div>Page not found</div>
        )}
      </div>
    </Router>
  );
};

export default App;
