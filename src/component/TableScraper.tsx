import React, { useState } from 'react';
import { scrapeTables } from '../utils/scrapeTable.ts';

const TableScraper: React.FC = () => {
    const [tableData, setTableData] = useState<
        { tableIndex: number; headers: string[]; rows: string[][] }[]
    >([]);

    const handleScrapeTables = () => {
        const data = scrapeTables();
        setTableData(data);
    };

    return (
        <div className="p-4">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleScrapeTables}
            >
                Scrape Tables
            </button>

            {tableData.length > 0 && (
                <div className="mt-4">
                    {tableData.map((table) => (
                        <div key={table.tableIndex} className="mb-6">
                            <h3 className="font-bold">Table {table.tableIndex}</h3>
                            {table.headers.length > 0 && (
                                <p>Headers: {table.headers.join(' | ')}</p>
                            )}
                            <div>
                                {table.rows.map((row, rowIndex) => (
                                    <p key={rowIndex}>Row {rowIndex + 1}: {row.join(' | ')}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tableData.length === 0 && (
                <p className="mt-4 text-gray-500">No tables scraped yet.</p>
            )}
        </div>
    );
};

export default TableScraper;
