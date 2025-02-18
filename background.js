// Background service worker that handles screenshot capture requests.

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'capture') {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, screenshotUrl => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          sendResponse({ success: false, error: chrome.runtime.lastError });
        } else {
          sendResponse({ success: true, screenshotUrl: screenshotUrl });
        }
      });
      // Return true to indicate an asynchronous response.
      return true;
    }
  });