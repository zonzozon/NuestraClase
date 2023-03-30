// Get the previous and next month buttons
const prevMonthBtn = document.querySelector(".prev-month");
const nextMonthBtn = document.querySelector(".next-month");

// Set the current month and year to January 2023
let currentMonth = 0; // January
let currentYear = 2023;

// Update the calendar with the current month and year
function updateCalendar() {
  // Get the calendar table
  const calendarTable = document.querySelector("table");

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get the day of the week for the first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Clear the table body
  calendarTable.querySelector("tbody").innerHTML = "";

  // Loop through the days of the month and add them to the table
  let day = 1;
  for (let i = 0; i < 6; i++) {
    // Create a new row for each week
    const row = document.createElement("tr");

    // Add each day to the row
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDayOfMonth) {
        // Leave cells before the first day of the month empty
      } else if (day > daysInMonth) {
        // Leave remaining cells empty after the end of the month
      } else {
        cell.textContent = day;
        day++;
      }
      row.appendChild(cell);
    }

    // Add the row to the table body
    calendarTable.querySelector("tbody").appendChild(row);
  }
}

// Update the calendar when the page loads
window.addEventListener("load", updateCalendar);

// Add click handlers for the previous and next month buttons
prevMonthBtn.addEventListener("click", () => {
  // Subtract one from the current month
  currentMonth--;
  if (currentMonth < 0) {
    // If the current month is now less than 0 (i.e., December), set it to 11 (December)
    currentMonth = 11;
    currentYear--;
  }
  // Update the calendar with the new month and year
  updateCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  // Add one to the current month
  currentMonth++;
  if (currentMonth > 11) {
    // If the current month is now greater than 11 (i.e., January), set it to 0 (January)
    currentMonth = 0;
    currentYear++;
  }
  // Update the calendar with the new month and year
  updateCalendar();
});