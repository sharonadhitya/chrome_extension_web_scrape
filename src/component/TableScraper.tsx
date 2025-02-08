import React, { useState } from "react";
import { scrapeTables } from "../utils/scrapeTable"; // Ensure this utility is implemented
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface ScrapeTablesProps {
  onNavigate: (page: string) => void; // Navigation handler for switching pages
}

const TableScraper: React.FC<ScrapeTablesProps> = ({ onNavigate }) => {
  const [tableData, setTableData] = useState<
    { tableIndex: number; headers: string[]; rows: string[][] }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleScrapeTables = async () => {
    setLoading(true);
    try {
      const data = await scrapeTables();
      if (data.length === 0) {
        alert("No tables found on the current page!");
      }
      setTableData(data);
    } catch (error) {
      console.error("Error scraping tables:", error);
      alert("Failed to scrape tables. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => onNavigate("frontpage")}
        className="absolute top-4 left-4 p-2 bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleScrapeTables}
        disabled={loading}
      >
        {loading ? "Scraping..." : "Scrape Tables"}
      </button>

      {tableData.length > 0 && (
        <div className="mt-4">
          {tableData.map((table) => (
            <div key={table.tableIndex} className="mb-6">
              <h3 className="font-bold">Table {table.tableIndex}</h3>
              {table.headers.length > 0 && (
                <p className="text-gray-700">Headers: {table.headers.join(" | ")}</p>
              )}
              <div>
                {table.rows.map((row, rowIndex) => (
                  <p key={rowIndex} className="text-gray-500">
                    Row {rowIndex + 1}: {row.join(" | ")}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tableData.length === 0 && !loading && (
        <p className="mt-4 text-gray-500">No tables scraped yet.</p>
      )}
    </div>
  );
};

export default TableScraper;
