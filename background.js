// Mengaktifkan side panel ketika ekstensi diklik
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
