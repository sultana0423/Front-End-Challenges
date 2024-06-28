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
 

 function addTask() {
        
            let task = input.value;
             
            if (task !== "") {
                const listItemsC = document.getElementById('listItems');
                const taskItem = document.createElement('li');
                taskItem.innerHTML = `<span>${task}</span><button id="deleteBtn">Delete</button>`;
                ulE.appendChild(taskItem);

                input.value = "";

                listItemsC.style.display = "flex";
 
              const deleteBtn = document.getElementById('deleteBtn');
                deleteBtn.addEventListener('click', deleteTask);
            }
            else {
                alert("Error: no value.");
            }
        }

          function deleteTask(event) {
            const taskItemToDelete = event.target.parentElement;
             ulE.removeChild(taskItemToDelete);
        }

        addBtn.addEventListener('click', addTask);
