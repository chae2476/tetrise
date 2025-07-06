// timer.js

// Function to start and track elapsed time across pages
function startTimer() {
    // Check if it's the first page load (determine this by the URL or a flag)
    if (window.location.pathname === "/beginpage.html") {
      // Always reset the timer to 0 when the first page is loaded
      localStorage.setItem('elapsedTime', 0);
    }
  
    // Retrieve the previous elapsed time from localStorage (defaults to 0 if not set)
    let elapsedTime = parseInt(localStorage.getItem('elapsedTime')) || 0;
  
    // Find the element to update the time display
    const timeElapsedElement = document.getElementById('time-elapsed');
  
    // Function to update the elapsed time and store it in localStorage
    const updateElapsedTime = () => {
      elapsedTime++;  // Increment elapsed time by 1 second
      timeElapsedElement.textContent = `Elapsed Time: ${elapsedTime}s`;
  
      // Store the updated elapsed time in localStorage
      localStorage.setItem('elapsedTime', elapsedTime);
    };
  
    // Update elapsed time immediately when the page loads
    updateElapsedTime();
  
    // Set an interval to update the elapsed time every second
    setInterval(updateElapsedTime, 1000);
  }
  
  // Ensure the timer starts when the page is loaded
  window.onload = function() {
    startTimer();
  };
  