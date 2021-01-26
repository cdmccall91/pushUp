// VARIABLES

const newDay = document.getElementById('start-new-day');
const container = document.getElementById('container');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const pushIt = document.getElementById('submit-btn');
const dateInput = document.getElementById('date');

// FUNCTIONS
function createNewDay(e) {
  e.preventDefault();
  
  // Hiding modal before card creation
  modal.classList.remove('show-modal');

  // Creating Day Card
  const newDay = document.createElement('div');
  newDay.classList.add('day-card');
  container.appendChild(newDay);

  // Puting Date at top of card
  const date = dateInput.value;
  const dateTitle = document.createElement('h2');
  dateTitle.classList.add('date-title');
  dateTitle.textContent = date;
  newDay.appendChild(dateTitle);

  // Creating New Set Button
  const newSet = document.createElement('button');
  newSet.classList.add('new-set');
  newSet.textContent = 'Start New Set';
  newDay.appendChild(newSet);

  // Creating Rep List Container
  const repListContainer = document.createElement('div');
  repListContainer.classList.add('rep-list-container');
  newDay.appendChild(repListContainer);

  // Create Rep Input Container
  const enterRepContainer = document.createElement('div');
  repListContainer.appendChild(enterRepContainer);

  // Creating UL Rep List
  const repList = document.createElement('ul');
  repListContainer.insertBefore(repList, enterRepContainer);

  // Creating Enter Rep Input
  const enterRep = document.createElement('input');
  enterRep.type = 'number';
  enterRep.placeholder = 'Enter Rep';
  enterRep.classList.add('rep-input');
  enterRepContainer.appendChild(enterRep);

  // Creating Submit button for Enter Rep
  const submitRep = document.createElement('button');
  submitRep.classList.add('submit-rep');
  submitRep.textContent = 'Nice!';
  enterRepContainer.appendChild(submitRep);

  // Adding Reps to an UL
  submitRep.addEventListener('click', function addRep() {
    const rep = enterRep.value;
    const addRep = document.createElement('li');
    addRep.textContent = rep;
    repList.appendChild(addRep);
    enterRep.value = '';
  });


}



// EVENT LISTENERS

// Remove modal outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);
// Display modal when click start new day button
newDay.addEventListener('click', () => modal.classList.add('show-modal'));
// Hide modal when click on X button
closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'));

// Create New Day
pushIt.addEventListener('click', createNewDay);



