const date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = date.getFullYear();
const formattedDate = mm + '/' + dd + '/' + yyyy;
const dateE = document.getElementById('date');
dateE.innerHTML = formattedDate; 

const input = document.getElementById('userInput');
const addBtn = document.getElementById('addBtn');
const ulE = document.getElementById('ulE');
const listItemsC = document.getElementsByClassName('listItems');
 

 function addTask(event) {
            event.preventDefault();
            let task = input.value;
            listItemsC.style.display = "flex";
            if (task !== "") {


                const taskItem = document.createElement('li');
                taskItem.innerHTML = `<span>${task}</span> <button class="deleteBtn">Delete</button>`;
                ulE.appendChild(taskItem);

                input.value = "";

 
              const deleteBtn = document.getElementById('deleteBtn');
                deleteBtn.addEventListener('click', deleteTask);
            }
            else {
                alert("Error: must be text");
            }
        }

          function deleteTask(event) {
            const taskItemToDelete = event.target.parentElement;
             ulE.removeChild(taskItemToDelete);
        }

        addBtn.addEventListener('click', addTask);
