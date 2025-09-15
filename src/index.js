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
    li.textContent = taskText;

    tasklist.appendChild(li);

    taskInput.value = ""; //this clears the input field
  });
});
