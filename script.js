var ulOfList = document.querySelector('ul');
var input = document.querySelector('input');

function addEvent() {
    var li = document.createElement('li');
    li.textContent = input.value;
    ulOfList.appendChild(li);
    input.value = '';
}