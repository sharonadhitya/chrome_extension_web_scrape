export function scrapeTables(): { tableIndex: number; headers: string[]; rows: string[][] }[] {
    const tables = Array.from(document.querySelectorAll('table'));

    if (tables.length === 0) {
        alert('No tables found on this webpage.');
        return [];
    }

    const tableData = tables.map((table, tableIndex) => {
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent?.trim() || '');
        const rows = Array.from(table.querySelectorAll('tr'))
            .slice(1)
            .map(row => Array.from(row.querySelectorAll('td')).map(td => td.textContent?.trim() || ''));

        return {
            tableIndex: tableIndex + 1,
            headers,
            rows
        };
    });

    return tableData;
}
