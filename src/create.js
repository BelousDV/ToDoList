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
function saveBlank(e){
  event.preventDefault(e);
    let taskTitle;
    let taskText;
    let taskPriority;
    let itemTask;
 
    if(inputTitle.value == ""){
      alert("Please enter the Task Title");
    }else{
      taskTitle = inputTitle.value;
      taskText = inputText.value;
      taskPriority = inputPriority.value;
      //console.log(taskTitle+ " " +taskText+ " " +taskPriority);
      
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
      
    }
    
}

function showTaskList(itemTask, idItem){
  let itemBlock = document.createElement("div");
    itemBlock.id = idItem;
    if(itemTask["status"] == true){
      itemBlock.className = "done_task";
    }else{
      itemBlock.className = "show_block";
    }
    
  let itemTitleBlock = document.createElement("textarea");
    itemTitleBlock.className = "task_item-title";
    itemTitleBlock.setAttribute('disabled', 'disabled');
    itemTitleBlock.innerText = itemTask["title"];
    itemTitleBlock.setAttribute('data-action', 'show'); 
    
  let itemTextBlock = document.createElement("textarea");
    itemTextBlock.className = "task_item-text";
    itemTextBlock.innerText = itemTask["task"];
    itemTextBlock.setAttribute('disabled', 'disabled');
    itemTextBlock.setAttribute('data-action', 'show');

  let itemPriorityBlock = document.createElement("span");
    itemPriorityBlock.className = "show_block-priority";
    itemPriorityBlock.id = "change-priority";
    itemPriorityBlock.innerText = itemTask["priority"];
    itemPriorityBlock.setAttribute('data-action', 'show');

  let menuItemTask = document.createElement("div");
  menuItemTask.className = "show_block-wrappermenu" 

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

  let menuClose = document.createElement("li");
  menuClose.innerText = "close";
  menuClose.setAttribute('data-action', 'close');

  itemChangeMenu.appendChild(menuItem);

  let itemUnfinishWrap = document.createElement("div");
  itemUnfinishWrap.id = "check";
  if(itemTask["status"] == true){
    itemUnfinishWrap.innerHTML = "<p>Is this task is not completed?</p>";
  }else{
    itemUnfinishWrap.innerHTML = "<p>Is this task completed?</p>";
  }
  
  let itemUnfinishButton = document.createElement("button");  
  itemUnfinishButton.value = "cancel";
  itemUnfinishButton.innerHTML="No";
  let itemFinishButton = document.createElement("button");  
  itemFinishButton.value = "ok";
  itemFinishButton.innerHTML="Yes";
 
  let itemUnfinish = document.createElement("input");
    itemUnfinish.type = "checkbox";
    itemUnfinish.checked = itemTask["status"];
    itemUnfinish.setAttribute('disabled', 'disabled');
  
    if(itemTask["status"]){
    itemUnfinishWrap.className = "done";
    itemUnfinish.className = "task_check-status";
    menuItem.append(menuItemDone);
    menuItem.append(menuItemDelete);
    menuItem.append(menuClose);
    }else{
    itemUnfinishWrap.className = "done";
    itemUnfinish.className = "done";
    menuItem.append(menuItemDone);
    menuItem.append(menuItemEdit);
    menuItem.append(menuItemDelete);
    menuItem.append(menuClose);
    };
   
    itemUnfinishWrap.append(itemUnfinishButton);
    itemUnfinishWrap.append(itemFinishButton);
  
    menuItemTask.append(itemPriorityBlock);
    menuItemTask.append(itemChangeMenu);

  itemBlock.append(itemTitleBlock);
  itemBlock.append(itemTextBlock);
  itemBlock.append(menuItemTask);
  itemBlock.append(itemUnfinishWrap);
  itemBlock.append(itemUnfinish);
  if(itemTask["status"] == true){
    showBlokTask.append(itemBlock);
  }else{
    showBlokTask.prepend(itemBlock);
  }
  new Menu(itemBlock);

}

class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }
    
    close (x){
      let showMenu = x.querySelector('ul');
        showMenu.hidden = true;
    }

    show(x) {
        console.log(x.querySelector('ul'));
        let showMenu = x.querySelector('ul');
        (showMenu.hidden == true)? showMenu.hidden = false: showMenu.hidden = true;
      }

    done(x) {
      let idTask = x.id;
     
      let checkboxWrap = x.querySelector('#check');
      checkboxWrap.className = "show_checkbox";
      //console.log(checkboxWrap);
      let checkbox = x.querySelector('input');
      let button = x.querySelectorAll('button');
      let okButton = button[1];
      let cancelButton = button[0];
      
     cancelButton.onclick = function(){
      checkboxWrap.className = "done";
      let showMenu = x.querySelector('ul');
      showMenu.hidden = true;
     };
      
     okButton.onclick = function (){
        let itemTask = DataTask[idTask];
        console.log(itemTask);
        (!checkbox.checked)?itemTask["status"] = true: itemTask["status"]= false;
        //itemTask["status"] = true;
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
      x.remove();
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action](this._elem);
      }
    }
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
    
    let localValue = localStorage.getItem('todo');
   
    i++;
  };
}


export default DataTask;


 

  