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
  function selectTag() {
    const select = document.getElementById('colors')
    const colors = ['', 'red', 'yellow', 'green']
    const colors = ['', 'red', 'orange', 'green']
    for(let color of colors) {
      let option = document.createElement('option')
      option.textContent = color
  @@ -44,15 +48,3 @@ function selectTag() {
    }
    return select
  }
  function colorPriority() {
    const select = document.querySelector('select')
    debugger
    select.addEventListener('change', (e) => {
      // // console.log(e.target.value);
      // let choice = document.getElementById('new-task-description')
      // choice.style = `color: ${e.target.textContent}`
      // return e.target.value
      console.log(e);
    })
  }