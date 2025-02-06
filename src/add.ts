export function AddUpdateClick(element: HTMLButtonElement) {
  let opsText = document.querySelector<HTMLInputElement>('#todoText');
  let alertBox = document.querySelector<HTMLHeadingElement>('#Alert');



  element.addEventListener('click', () => {
    if (element.textContent?.trim() === 'Add') {
      if (!opsText || opsText.value.trim() === '') {
        if (alertBox) alertBox.innerText = 'Please enter a task';
      } else {
        type TodoItem = { item: string; status: boolean };
        let todo: TodoItem[] = JSON.parse(localStorage.getItem("todo-list") || "[]");
        let IsPresent: boolean = false;
        todo.forEach((element) => {
          if (element.item == opsText.value) {
            IsPresent = true;
          }
        });
        if (IsPresent) {
          if (alertBox) alertBox.innerText = 'Task already present';
        } else {
          todo.push({ item: opsText.value, status: false });
          localStorage.setItem("todo-list", JSON.stringify(todo));
          opsText.value = '';
          if (alertBox) alertBox.innerText = 'Task added successfully';
        }
      }
    } else {

    }



    
  });


}
