document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const taskInput = document.getElementById("new-task-description");
    const priorityInput = document.getElementById("priority");

    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;

    if (taskText === "") return; // Skip if empty

    const li = document.createElement("li");
    li.textContent = taskText;

    // Set color based on priority
    if (priority === "high") {
      li.style.color = "red";
    } else if (priority === "medium") {
      li.style.color = "orange";
    } else if (priority === "low") {
      li.style.color = "green";
    }

    taskList.appendChild(li);

    // Reset form.
    taskInput.value = "";
    priorityInput.value = "medium";
  });
});
