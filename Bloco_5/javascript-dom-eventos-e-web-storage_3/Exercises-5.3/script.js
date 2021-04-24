function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfMonth() {
let calendar = document.getElementById('days');

for (let index = 0; index < dezDaysList.length; index +=1) {
  let days = dezDaysList[index];
  let createDay = document.createElement('li');
  
  if (days === 24 | days === 31) {
    createDay.classList = 'day holiday';
    createDay.innerText = days;
    calendar.appendChild(createDay);

  } else if (days === 4 | days === 11 | days === 18) {
    createDay.classList = 'day friday';
    createDay.innerText = days;
    calendar.appendChild(createDay);

  } else if (days === 25) {
    createDay.classList = 'day holiday friday';
    createDay.innerText = days;
    calendar.appendChild(createDay);

  } else {
    createDay.classList = 'day';
    createDay.innerText = days;
    calendar.appendChild(createDay);
  }
 };
};
daysOfMonth();

// Exercício 2

function holidayButton(holiday) {
const buttonContainer = document.querySelector('.buttons-container');
const button = document.createElement('button');
button.id = 'btn-holiday';
button.innerText = holiday;
buttonContainer.appendChild(button);
}
holidayButton('Feriados');

// Exercício 3 

function changeColorOfButton() {
  let holidayButton = document.getElementById('btn-holiday');
  let holiday = document.querySelectorAll('.holiday');
  let background = 'rgb(238,238,238)';
  let newColor = 'white';

  holidayButton.addEventListener('click', () => {
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === newColor) {
      holiday[index].style.backgroundColor = background;
    } else {
      holiday[index].style.backgroundColor = newColor;
    }
    }
})
};
changeColorOfButton();

// Exercício 4

function createButtonFriday(friday) {
const buttonContainer = document.querySelector('.buttons-container');
const buttonFriday = document.createElement('button');
buttonFriday.id = 'btn-friday';
buttonFriday.innerText = friday;
buttonContainer.appendChild(buttonFriday);
}
createButtonFriday('Sexta-feira');

// Exercício 5

function buttonFriday() {
const fridayDays = [4, 11, 18, 25];
const fridayButton = document.getElementById('btn-friday');

fridayButton.addEventListener('click', function() {
const friday = document.querySelectorAll('.day.friday');
for (let index = 0; index < friday.length; index += 1) {
  if (friday[index].innerHTML !== 'SEXTOU!') {
  friday[index].innerHTML = 'SEXTOU!';
} else {
  friday[index].innerHTML = fridayDays[index];
}
}
});
}
buttonFriday();

// Exercício 6

function mouseOver() {

const days = document.querySelector('#days');

days.addEventListener('mouseover', (evento) => {
evento.target.style.fontSize = '30px';
evento.target.style.fontWeight = '600';
});
}

function mouseLeave() {

const days = document.querySelector('#days');

days.addEventListener('mouseout', (evento) => {
evento.target.style.fontWeight = '200';
evento.target.style.fontSize = '20px';
});
}
mouseOver();
mouseLeave();

// Exercício 7

function addTask(tasks) {

const divTask = document.querySelector('.my-tasks');
const task = document.createElement('span');
task.innerText = tasks;
divTask.appendChild(task);
}
addTask('Exercícios Trybe');

// Exercício 8

function legend(color) {
const divTask = document.querySelector('.my-tasks');
const divColor = document.createElement('div');
divColor.classList= 'task';
divColor.style.backgroundColor = color;
divTask.appendChild(divColor);
}
legend('green');

// Exercício 9

function eventTask() {

  const color = document.querySelector('.task');
  const tasks = document.getElementsByClassName('task selected');

  color.addEventListener('click', (event) => {
  if (tasks.length === 0) {
    event.target.classList = ('task selected');
  } else {
    event.target.classList.remove('selected');
  }
  });
}
eventTask();

// // Exercício 10

function changeColor() {
 let tasks = document.getElementsByClassName('task selected');
 let days = document.querySelector('#days');
 let taskDiv = document.querySelector('.task');
 let taskColor = taskDiv.style.backgroundColor;

days.addEventListener('click', function(event) {
let eventColor = event.target.style.color;
if (tasks.length > 0 && eventColor !== taskColor ) {
  let color = tasks[0].style.backgroundColor;
  event.target.style.color = color;
} else if (eventColor === taskColor && tasks.length !== 0){
  event.target.style.color = 'rgb(119,119,119)';
    }
  });
}
changeColor();
