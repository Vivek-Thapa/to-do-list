// selecting the element
let input = document.querySelector('input');
let li = document.querySelectorAll('li');
let ul = document.querySelector('ul');

//  making an empty array
let todos = [];
//adding an addeventlistner
input.addEventListener("keyup",enterkey);

function  enterkey(event) {
    console.log(event);
    if(event.keyCode === 13) { 
        // display();

        todos.push({text: input.value, done: false});
        input.value = ""; 
        display(); 
    }

}


function display(){
    ul.innerHTML = "";
    todos.forEach(function(value, index){

        let li = document.createElement('li');
        ul.appendChild(li);
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        let para = document.createElement('p');
        para.textContent = value.text;
        li.appendChild(para);
        // let delBtn = document.createElement('button');
        let delBtn = document.createElement("button")
        delBtn.innerText = "X";
        delBtn.setAttribute('data-id', index);
        li.appendChild(delBtn);
    })
}
