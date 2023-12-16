const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");


//add event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck)
filterTodo.addEventListener('click', filterCheck)

document.addEventListener("DOMContentLoaded", ()=>{
    alert('loaded the component')
});
 

//function

function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-list");
  todoDiv.appendChild(newTodo);

  const createButton = document.createElement("button");
  createButton.innerHTML = `<i class="fas fa-check"></i>`;
  createButton.classList.add("complete-btn");
  todoDiv.appendChild(createButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  todoList.appendChild(todoDiv)

  todoInput.value = "";
  
}


function deleteCheck(e) {
    const item = e.target;
    
    if (item.classList.contains('trash-btn')) {
      const todo = item.parentElement;
      
        todo.remove();
       
    }
  
    if (item.classList.contains('complete-btn')) {
      const todo = item.parentElement;
      todo.classList.toggle('completed');
      todo.classList.toggle('completed-tasl');
    }
  }
  

  function filterCheck(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        if (todo.nodeType === 1){
        switch (e.target.value){
            case 'all':
                todo.style.display = "flex"
                todo.style.background= "red"
                break;

            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex"
                    todo.style.background= "blue"
                } else{
                    todo.style.display ="none"
                }
                
                break;     
       
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display ="flex"
                    todo.style.background= "green"
                } else{
                    todo.style.display ="none"
                }
                break;
       
       
            }
        } })
  }

//   /// child notes why we are using 
  
//   Certainly! In the provided code for filterCheck, you're using childNodes to iterate through the nodes inside todoList. However, childNodes includes all types of nodes, including elements, text nodes, comments, etc. When using childNodes, it's essential to filter out the text nodes to ensure that you're only targeting the elements you want to modify.
//   //