function addItem() {

    var ul = document.querySelector('.dynamic-list');
    var candidate = document.getElementById('candidate');
    var list = document.createElement('li');
    list.setAttribute('id', candidate.value);
    list.appendChild(document.createTextNode(candidate.value));
    //list.id = candidate.value;
    //list.createTextNode = candidate.value;
    ul.appendChild(list);
}

function removeItem() {

    var candidate = document.querySelector('#candidate');
    var ul = document.querySelector('.dynamic-list');
    var item = document.getElementById(candidate.value);
    console.log(item);
    console.log(ul);
    ul.removeChild(item);
}