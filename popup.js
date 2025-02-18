document.getElementById('captureButton').addEventListener('click', () => {
    document.getElementById('message').textContent = "Capturing screenshot...";
    chrome.runtime.sendMessage({ action: 'capture' }, response => {
      if (response && response.success) {
        document.getElementById('screenshot').src = response.screenshotUrl;
        document.getElementById('message').textContent = "Screenshot captured successfully.";
      } else {
        document.getElementById('message').textContent = "Failed to capture screenshot: " + (response && response.error ? response.error.message : "Unknown error");
      }
    });
  });