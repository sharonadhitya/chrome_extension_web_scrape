export const scrapeTables = (): Promise<
  { tableIndex: number; headers: string[]; rows: string[][] }[]
> => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { action: "scrapeTables" },
      (response) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(response.data || []);
        }
      }
    );
  });
};
