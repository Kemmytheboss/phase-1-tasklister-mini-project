document.addEventListener("DOMContentLoaded", () => {
  // your code here
    selectTag()
    let form = document.querySelector('form') 
    handleTask(form)
  });
  
  
  function createNewTask(newTask, color) {
    
    const li = document.createElement('li')
    const btn = document.createElement('button')
  
    deleteTask(btn)
  
    btn.textContent = 'X'
    li.textContent = `${newTask}  `
    li.style = `color: ${color}`
     
    document.querySelector('ul').appendChild(li).appendChild(btn)  
  }
  
  function handleTask(element) {
    element.addEventListener('submit', (e) => {
      e.preventDefault()
      const newTask = e.target['new-task-description'].value
      createNewTask(newTask)
      const select = e.target[1]
      const color = select.options[select.selectedIndex].value
      console.log(color);
      createNewTask(newTask, color)
      element.reset()
    })
  }
  