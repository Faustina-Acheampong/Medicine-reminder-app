 // Function to update the current time
 function updateCurrentTime() {
  const currentTimeElement = document.getElementById('currentTime');
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const date = currentTime.getDate().toString().padStart(2, '0');
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentTime.getMonth()];
  const year = currentTime.getFullYear();
  currentTimeElement.textContent = `${date} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
};

// Function to add a new reminder
document.addEventListener('DOMContentLoaded', () => {
  const reminderForm = document.getElementById('reminderForm');
  const reminderList = document.getElementById('reminderList');
}



// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Update the current time immediately on page load
updateCurrentTime();  

g