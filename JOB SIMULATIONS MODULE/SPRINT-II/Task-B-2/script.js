// Updates the clock every second in HH:MM:SS format
function updateClock() {
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
  }
  
  // Update time immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);
  