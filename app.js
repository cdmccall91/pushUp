// Variables
const newDayBtn = document.getElementById('new-day-btn');
const closeBtn = document.getElementById('close');
const pushIt = document.getElementById('submit-btn');
const dayGrid = document.querySelector('.day-grid');
const date = document.getElementById('date');

// Functions
function createNewDay(e) {
  e.preventDefault();
  // Hiding modal before card creation
  modal.classList.remove('show');

  // Creating New Card
  const newDayCard = document.createElement('div');
  newDayCard.className = "day-card";
  dayGrid.appendChild(newDayCard);

  // Create Card Header
  const cardHeader = document.createElement('div');
  cardHeader.className= "card-header";
  newDayCard.appendChild(cardHeader);

  // Creating The Date
  const newDate = document.createElement('span');
  newDate.className = "new-date";
  newDate.textContent = date.value;
  cardHeader.appendChild(newDate);

  // Creating The Total
  const total = document.createElement('span');
  total.className = "total";
  total.textContent = "total: " + 0;
  cardHeader.appendChild(total);

  // Create Middle that will store set lists
  const setGrid = document.createElement('div');
  setGrid.className = "set-grid";
  newDayCard.appendChild(setGrid);

  // Create New Set Container with Rep List and Input/Submit at bottom
  const newSetListContainer = document.createElement('div');
  newSetListContainer.className = "set-list-container";
  setGrid.appendChild(newSetListContainer);

  // Create Card Footer
  const cardFooter = document.createElement('div');
  cardFooter.className = "card-footer";
  newDayCard.appendChild(cardFooter);

  // Create New Set Button
  const newSetBtn = document.createElement('button');
  newSetBtn.className = "new-set-btn";
  newSetBtn.textContent = "Start New Set";
  cardFooter.appendChild(newSetBtn);

  // Start New Set Event
  newSetBtn.addEventListener('click', function startNewSet() {
      // Create new rep list
  const newSetList = document.createElement('ul');
  newSetList.className = "set-list";
  newSetListContainer.appendChild(newSetList);
  // Create input for reps
  const repInput = document.createElement('input');
  repInput.className = "rep-input";
  repInput.type = "number";
  repInput.placeholder = "Enter Reps";
  newSetListContainer.appendChild(repInput);
  // Create button to submit input reps
  const repSubmitBtn = document.createElement('button');
  repSubmitBtn.className = "rep-submit-btn";
  repSubmitBtn.textContent = "Nice!";
  newSetListContainer.appendChild(repSubmitBtn);
  // Adding Reps to the list
  repSubmitBtn.addEventListener('click', function addRep() {
    const newRep = document.createElement('li')
    const rep = repInput.value;
    newRep.textContent = rep;
    newSetList.appendChild(newRep);
    repInput.value = '';
  });
  })
}

// Event Listeners
// Display modal when click start new day button
newDayBtn.addEventListener('click', () => modal.classList.add('show'));
// Hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show') : false);
// Hidw with X button
closeBtn.addEventListener('click', () => modal.classList.remove('show'));

// Create New Day
pushIt.addEventListener('click', createNewDay);


