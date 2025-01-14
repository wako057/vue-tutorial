const buttonElt = document.querySelector('button');
const inputElt = document.querySelector('input');
const listElt = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputElt.value;
    const listItemElt = document.createElement('li');
    listItemElt.textContent = enteredValue;

    listElt.appendChild(listItemElt);
}

buttonElt.addEventListener('click', addGoal);