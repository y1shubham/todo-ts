import './style.css'
import { AddUpdateClick } from './add'
import { customList } from './list'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="todo-container">
     <div class="todo-header">
            <h2>ToDo List Website</h2>
        </div>
        <div class="todo-body">
            <div class="todo-body-top">
                <input type="text" id="todoText" class="todo-input" placeholder="Add your items" />
                <button id="AddUpdateClick">Add</button>
            </div>
            <div class="todo-body-bottom">
                <h5 id="Alert"></h5>
                <div id="todoList"><custom-list></custom-list></div>                
            </div>
  </div>
`


const addUpdateButton = document.querySelector<HTMLButtonElement>('#AddUpdateClick');

if (addUpdateButton) {
  AddUpdateClick(addUpdateButton);
  
}

customElements.define('custom-list', customList);





