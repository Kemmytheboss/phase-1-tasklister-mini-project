document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //creating eventlisteners for form and tasklist
  const form = document.getElementById("create-task-form");
  const tasklist = document.getElementById("tasks");

  form.addEventListener("submit", function(e){
    e.preventDefault();//this prevents page from reladoing

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.ariaValueMax.trim();

    if(taskText === "" ) return; // it ensures no empty task is added

    const li = document.createElement("li");
    li.textContent = taskText + "";

    const deleteBtn = document.createElement("button"); //adding delete button for eacj Task
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", ()=>{
      li.remove();
    })

    li.appendChild(deleteBtn);
    tasklist.appendChild(li);

    taskInput.value = ""; //this clears the input field
  });
});


