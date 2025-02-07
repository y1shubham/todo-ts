type todolist = { item: string, status: boolean };

class customList extends HTMLElement {

    todoList: todolist[] = JSON.parse(localStorage.getItem("todo-list") || "[]");

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {

        this.shadowRoot!.innerHTML = `
        <style>
ul {
    list-style-type: none;
    padding: 0;
        }
ul li {
    list-style: none;
    font-size: 18px;
    cursor: pointer;
    padding: 10px;
    display: flex;  
    justify-content: space-between; 
    align-items: center; 
    background: #edeef0;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 10px 15px; 
}

button {
    border: none;
    outline: none;
    background: #78f38d;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 5px;
    white-space: nowrap;
}

.li-button-container {
    display: flex;
    gap: 10px; 
}
input[type=text] {
    border: none;
    outline: none;
    background: transparent;
    font-size: 18px;
    width: 100%;
    padding: 5px;
    margin-right: 10px;
}
</style>
        `;


        const container = document.createElement('ul');
        this.todoList.forEach((element) => {
            let li = document.createElement('li'); 
            let status = element.status ? 'Task Completed' : 'Mark as Completed';

            li.innerHTML = `
            <input type="text" value="${element.item}" readonly />
            <button id="status">${status}</button>
            <button id="update">Edit</button>
            <button id="delete">Delete</button>            
            `
            container.appendChild(li);




            li.querySelector('#delete')?.addEventListener('click', () => {
                this.todoList = this.todoList.filter((item) => item.item !== element.item);
                localStorage.setItem("todo-list", JSON.stringify(this.todoList));
                this.render();
            });


            li.querySelector('#status')?.addEventListener('click', () => {
                if (!element.status) {
                    
                    element.status = true;
                    status !== status;
                    li.style.textDecoration = 'line-through';
                    li.style.color = 'red';
                    localStorage.setItem("todo-list", JSON.stringify(this.todoList));
                    this.render();
                } else {
                    li.style.textDecoration = 'none';
                    li.style.color = 'black';
                    element.status = false;
                    status !== status;
                    localStorage.setItem("todo-list", JSON.stringify(this.todoList));
                    this.render();
                }

            });




            li.querySelector('#update')?.addEventListener('click', () => {
                if (li.querySelector('#update')?.textContent === 'Edit') {
                    li.querySelector('#update')!.textContent = 'Update';
                    li.querySelector('input')!.removeAttribute('readonly');
                    const updateButton = li.querySelector<HTMLButtonElement>('#update');
                    if (updateButton) {
                        updateButton.style.backgroundColor = 'red';
                    }

                } else {
                    let input = li.querySelector('input');
                    if (input) {
                        element.item = input.value;
                        localStorage.setItem("todo-list", JSON.stringify(this.todoList));
                        li.querySelector('#update')!.textContent = 'Edit';
                        input.setAttribute('readonly', 'true');
                        const updateButton = li.querySelector<HTMLButtonElement>('#update');
                        if (updateButton) {
                            updateButton.style.backgroundColor = '#78f38d';
                        }
                    }
                }
            });
        });


        this.shadowRoot!.appendChild(container);

    };




}

customElements.define('custom-list', customList);

export { customList };