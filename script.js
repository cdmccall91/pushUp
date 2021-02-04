// Variables
const newDayBtn = document.getElementById('new-day-btn');
const logDayBtn = document.getElementById('log-day-btn');
const date = document.getElementById('date');
const pushIt = document.getElementById('push-it');
const dayCard = document.getElementById('day-card');
const submitDayBtn = document.getElementById('submit-day-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const newSetBtn = document.getElementById('new-set-btn');
const repInput = document.getElementById('rep-input');
const setGrid = document.getElementById('set-grid');
const submitRepBtn = document.getElementById('submit-rep-btn');
const total = document.getElementById('total');
const dayGrid = document.getElementById('day-grid');

populateGrid();

// Arrays for Local Storage?
let sets = [];
let dates = [];

// Function creates a new 'day card'
function startNewDay(e) {
  modal.classList.remove('show');
  e.preventDefault();
  const dateInput = document.getElementById('date-input').value;
  date.textContent = dateInput;
  newDayBtn.classList.add('hide');
  logDayBtn.classList.add('show');
}

// Function begins a new set by creating Ul and appending to set grid
function startNewSet() {
  const newSetList = document.createElement('ul');
  newSetList.className = 'new-set-list';
  setGrid.appendChild(newSetList);
  sets.push(newSetList);
};

// Function takes in Rep number, creates an Li and appends to current Ul, then updates total
function createRep() {
  const currentSet = sets[sets.length - 1];
  const li = document.createElement('li');
  li.className = 'rep-number';
  li.textContent = repInput.value;
  currentSet.appendChild(li);
  repInput.value = '';
  updateTotal();
};

// This function updates the total which is equal to all reps
function updateTotal() {
  const repNumber = document.querySelectorAll('.rep-number');
  let allReps = [];
  for (let i = 0; i < repNumber.length; i++) {
    allReps.push((parseInt(repNumber[i].textContent)));
  }
    let newTotal = allReps.reduce((a, b) => a + b, 0)
    total.innerText = newTotal;
};

// Function stores Dates, Sets, and totals to Local Storage
function logDay() {
  logDayBtn.classList.remove('show');
  newDayBtn.classList.remove('hide');

// Storing and getting from localstorage
  var oldDays = JSON.parse(localStorage.getItem("daysArray")) || [];
  var newDay = {
    "date": date.textContent,
    "total": total.textContent
  }
  oldDays.push(newDay);
  localStorage.setItem('daysArray', JSON.stringify(oldDays));

  clearCard();
  populateGrid();
}

// Function that clears the card when day is logged
function clearCard() {
  date.textContent = '';
  total.textContent = 0;
  for (let i = 0; i < sets.length; i++) {
    sets[i].remove();
  }
}

// Function that creates a "mini-day-card" and displays them on the Day-grid
function populateGrid() {
  var oldDays = JSON.parse(localStorage.getItem("daysArray")) || [];
  for (let i = 0; i < oldDays.length; i++) {
    // Creating Card from each iteration along with date and time
    const miniCard = document.createElement('div');
    miniCard.className = 'mini-card';
    dayGrid.appendChild(miniCard);
    // Getting date and total from local storage
    const miniDate = document.createElement('span')
    miniDate.textContent = oldDays[i].date;
    miniCard.appendChild(miniDate);
    const miniTotal = document.createElement('span');
    miniTotal.textContent = "Total: " + oldDays[i].total;
    miniCard.appendChild(miniTotal);
  }
}

// Event Listeners
// Display modal when click start new day button
newDayBtn.addEventListener('click', () => modal.classList.add('show'));
closeBtn.addEventListener('click', () => modal.classList.remove('show'));
newSetBtn.addEventListener('click', startNewSet);
submitRepBtn.addEventListener('click', () => { createRep() });
pushIt.addEventListener('click', startNewDay);
logDayBtn.addEventListener('click', logDay);