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
}

// Function to add a new reminder and compile it to the list of reminders
document.addEventListener('DOMContentLoaded', () => {
  const medReminderForm = document.getElementById('medReminderForm');
  const medReminderList = document.getElementById('medReminderList');
  
  //Event listener to add a new reminder when the form is submitted
  medReminderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addReminder();
  });

  function addReminder() {
    const medicineName = document.getElementById('medicineName').value;
    const time = document.getElementById('time').value;
   // console.log(medicineName);
  //create a new list item and add it to the list of reminders
    const listItem = document.createElement('li'); 
    listItem.innerHTML = `${medicineName} at ${time} <button onclick="removeMedReminder(this)">Delete</button>`;
    medReminderList.appendChild(listItem); 

   // Set up the alarm for the reminder
    setupAlarm(time, medicineName); 

    medReminderForm.reset();
  }
});
  
  function removeMedReminder(button) {
  const listItem = button.parentElement;
  listItem.remove();
}

// Function to set up the alarm for the reminder
function setupAlarm(time, medicineName) {
  const [alarmHours, alarmMinutes] = time.split(':').map(Number);
  const currentTime = new Date();
  let alarmTime = new Date();
  alarmTime.setHours(alarmHours, alarmMinutes, 0, 0);
  // console.log(alarmTime);

  const timeDifference = alarmTime - currentTime;
  setTimeout(() => {
    alert(`Time to take ${medicineName}!`);
  }, timeDifference);
}


// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Update the current time immediately on page load
updateCurrentTime(); 
