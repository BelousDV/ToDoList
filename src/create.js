//import DataTask from './search.js';

//Button variable
var newTask = document.getElementById("create");
var createTaskBlank = document.getElementById("blank");
var saveTaskBlank = document.getElementById("save");
var cencelTaskBlank = document.getElementById("cancel");
var buttonChange = document.getElementById("change");
buttonChange.style.display="none";
//Input data
var inputTitle = document.getElementById('task_title');
var inputText = document.getElementById('task_text');
var inputPriority = document.getElementById('task_priority');

//Object for data
var DataTask = [];

//Page variable
var showBlokTask = document.getElementById("show_wrapper");
var unFinishedBlokTask = document.getElementById("unFinished");
var finishedBlokTask = document.getElementById("finished");

//Button click
newTask.addEventListener('click', showBlank);
cencelTaskBlank.addEventListener('click', cancelblank);
saveTaskBlank.addEventListener('click', saveBlank);

//Button function
function showBlank(){
   inputTitle.value = '';
    inputText.value = '';
    inputPriority.value = 'normal';
    createTaskBlank.style.display = 'block';
}
function cancelblank(){
    inputTitle.value = '';
    inputText.value = '';
    inputPriority.value = 'normal';
    createTaskBlank.style.display = 'none';
}
function saveBlank(){
    let taskTitle;
    let taskText;
    let taskPriority;
    let itemTask;
 
    taskTitle = inputTitle.value;
    taskText = inputText.value;
    taskPriority = inputPriority.value;
    console.log(taskTitle+ " " +taskText+ " " +taskPriority);
    
    itemTask = {
        "title": taskTitle,
        "task": taskText,
        "priority": taskPriority,
        "status": false
    };
    DataTask.push(itemTask);
    let idItem;
    for(let i=0; i<=DataTask.length; i++){
        idItem = i-1;
    }
    showTaskList(itemTask, idItem);
    createTaskBlank.style.display = 'none';
    inputTitle.value = '';
    inputText.value = '';
    inputPriority.value = 'normal';
    
    saveItems();
    //return DataTask;
}

function showTaskList(itemTask, idItem){
  let itemBlock = document.createElement("div");
    itemBlock.id = idItem;
    if(itemTask["status"] == true){
      itemBlock.className = "done_task";
    }else{
      itemBlock.className = "show_block";
    }
     
  let itemTitleBlock = document.createElement("p");
    itemTitleBlock.innerText = itemTask["title"]; 

  let itemTextBlock = document.createElement("p");
    itemTextBlock.innerText = itemTask["task"]; 

  let itemPriorityBlock = document.createElement("span");
    itemPriorityBlock.className = "show_block-priority";
    itemPriorityBlock.id = "change-priority";
    itemPriorityBlock.innerText = itemTask["priority"];
    itemPriorityBlock.setAttribute('data-action', 'checkkk');

  let menuItemTask = document.createElement("div");

  let itemChangeMenu = document.createElement("span");
    itemChangeMenu.setAttribute('data-action', 'show');
    itemChangeMenu.className = "show_block-menu";
    itemChangeMenu.innerText = "...";

  let menuItem = document.createElement("ul");
    menuItem.hidden = true;
    menuItem.className = "menu_wrapper";
        
  let menuItemDone = document.createElement("li");
    menuItemDone.innerText = "done";
    menuItemDone.setAttribute('data-action', 'done');

  let menuItemEdit = document.createElement("li");
    menuItemEdit.innerText = "edit";
    menuItemEdit.setAttribute('data-action', 'edit');

  let menuItemDelete = document.createElement("li");
    menuItemDelete.innerText = "delete";
    menuItemDelete.setAttribute('data-action', 'delete');

    itemChangeMenu.appendChild(menuItem);
    menuItem.appendChild(menuItemDone);
    menuItem.appendChild(menuItemEdit);
    menuItem.appendChild(menuItemDelete);

  let itemUnfinish = document.createElement("input");
    itemUnfinish.type = "checkbox";
    itemUnfinish.checked = itemTask["status"];
    itemUnfinish.className = "task_check-status";
    if(itemTask["status"]){
    itemUnfinish.className = "task_check-done";
    itemUnfinish.style.display = "inline-block";
    }else{
    itemUnfinish.className = "task_check-status";
    itemUnfinish.style.display = "none";
    };
  
    menuItemTask.appendChild(itemPriorityBlock);
    menuItemTask.appendChild(itemChangeMenu);

  itemBlock.appendChild(itemTitleBlock);
  itemBlock.appendChild(itemTextBlock);
  itemBlock.appendChild(menuItemTask);
  itemBlock.appendChild(itemUnfinish);
  if(itemTask["status"] == true){
    //finishedBlokTask.prepend(itemBlock);
    finishedBlokTask.prepend(itemBlock);
   //showBlokTask.appendChild(itemBlock);
  }else{
    unFinishedBlokTask.prepend(itemBlock);
    //showBlokTask.prepend(itemBlock);
  }
  new Menu(itemBlock);
}

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    checkkk(x) {
       
      }

    show(x) {
        console.log(x.querySelector('ul'));
        let showMenu = x.querySelector('ul');
        (showMenu.hidden == true)? showMenu.hidden = false: showMenu.hidden = true;
      }

    done(x) {
      let idTask = x.id;
      console.log(idTask);
      let checkbox = x.querySelector('input');
      checkbox.style.display = "inline-block";
      checkbox.onclick = function (){
        let itemTask = DataTask[idTask];
        console.log(itemTask);
        itemTask["status"] = checkbox.checked;
        alert(itemTask["status"]);
        DataTask[idTask] = itemTask;
        x.remove();
        showTaskList(itemTask, idTask);
        saveItems();
      }
      console.log(checkbox);
    }

    edit(x) {
      saveTaskBlank.style.display = "none";
      createTaskBlank.style.display = "block";
      buttonChange.style.display = "inline-block";

      let idTask = x.id;
      
      let obj = DataTask[idTask];
      inputTitle.value = obj['title'];
      inputText.value = obj['task'];
      inputPriority.value = obj['priority'];
     
      buttonChange.onclick = function (){
        x.remove();
        let taskTitle = inputTitle.value;
        let taskText = inputText.value;
        let taskPriority = inputPriority.value;

        let itemTask = {
          "title": taskTitle,
          "task": taskText,
          "priority": taskPriority,
          "status": false
        };
          DataTask[idTask] = itemTask;
          console.log(DataTask[idTask]);
          console.log(DataTask);
          console.log(idTask);

          saveTaskBlank.style.display = "inline-block";
          createTaskBlank.style.display = "none";
          buttonChange.style.display = "none";
          inputTitle.value = '';
          inputText.value = '';
          inputPriority.value = 'normal';

        showTaskList(itemTask, idTask);
        saveItems();
      }
      let showMenu = x.querySelector('ul');
      showMenu.hidden = true;
    }

    delete(x) {
      let idTask = x.id;
      delete DataTask[idTask];
      saveItems();
      console.log(DataTask);
      x.remove();
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action](this._elem);
      }
    };
  }

function saveItems(){
  for(let i=0; i<=DataTask.length; i++){
    if(DataTask[i] == null){
      DataTask.splice(i, 1);
    };
  }
	localStorage.clear('todo');
  localStorage.setItem('todo', JSON.stringify({ 
  taskList: DataTask}));
  let localValue = localStorage.getItem('todo');
  console.log(localValue);
}

function loadItems() { 
	return JSON.parse(localStorage.getItem('todo'));
}
var data = loadItems();

for(let i=0; i<data.taskList.length; ){
 let itemTask = data.taskList[i];
 if(itemTask == null){
    DataTask.splice(i, 1);
    i++;
  }else{
    DataTask.push(itemTask);
    showTaskList(itemTask, i);
    console.log(DataTask);
    let localValue = localStorage.getItem('todo');
    console.log(localValue);
    i++;
  };
}



//export var DataTask = DataTask;
//export var show = showTaskList(); 
export default DataTask;


 

  