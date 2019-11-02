import DataTask from './load.js';
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


//Page variable
var showBlokTask = document.getElementById("show_wrapper");
var unFinishedBlokTask = document.getElementById("unFinished");
var finishedBlokTask = document.getElementById("finished");

//Button click
newTask.addEventListener('click', showBlank);
cencelTaskBlank.addEventListener('click', cancelblank);
saveTaskBlank.addEventListener('click', saveBlank);

//Button function
/*create a function to display the task creation form*/
function showBlank(){
   inputTitle.value = '';
    inputText.value = '';
    inputPriority.value = 'normal';
    createTaskBlank.style.display = 'block';
}

/*create a function to cancel the display of the task creation form*/
function cancelblank(){
    inputTitle.value = '';
    inputText.value = '';
    inputPriority.value = 'normal';
    createTaskBlank.style.display = 'none';
}

/*create a function to save the entered data when creating and updating a task*/
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
/*create a function to display the list of tasks on the html-page,
the function takes the value of each object (itemTask) from the position data (idItem) in array. 
And for each object it displays an element with the corresponding values.
*/
function showTaskList(itemTask, idItem){
          /*create a general block for Task with id == cells in the data object*/
  let itemBlock = document.createElement("div");
    itemBlock.id = idItem;
          /*we read data on the status of the task from the object (itemTask),
          in accordance with the status (completed or not) we assign the name class*/
    if(itemTask["status"] == true){
      itemBlock.className = ("show_block"+" "+"done_task");
    }else{
      itemBlock.className = "show_block";
    }

          /*create an element that displays the title for Task*/   
  let itemTitleBlock = document.createElement("div");
    itemTitleBlock.className = "task_item-title";
    itemTitleBlock.innerText = itemTask["title"];
    itemTitleBlock.setAttribute('data-action', 'show');

          /*create an element that displays the description for Task*/   
  let itemTextBlock = document.createElement("div");
    itemTextBlock.className = "task_item-text";
    itemTextBlock.innerText = itemTask["task"];
    itemTextBlock.setAttribute('data-action', 'show');
  
          /*create an element that displays the priority for Task*/  
  let itemPriorityBlock = document.createElement("span");
    itemPriorityBlock.className = "show_block-priority";
    itemPriorityBlock.id = "change-priority";
    itemPriorityBlock.innerText = itemTask["priority"];
    itemPriorityBlock.setAttribute('data-action', 'show');

          /*below we create the elements of the editing menu for the task*/
  let menuItemTask = document.createElement("div");
  menuItemTask.className = "show_block-wrappermenu" 

  let itemChangeMenu = document.createElement("span");
    itemChangeMenu.setAttribute('data-action', 'show');
    itemChangeMenu.className = "show_block-menu";
    itemChangeMenu.innerText = "menu";

  let menuItem = document.createElement("ul");
      menuItem.hidden = true;
    
    menuItem.className = "menu_wrapper";
          /*done task menu button */        
  let menuItemDone = document.createElement("li");
    menuItemDone.innerText = "done";
    menuItemDone.setAttribute('data-action', 'done');
          /*edit task menu button */    
  let menuItemEdit = document.createElement("li");
    menuItemEdit.innerText = "edit";
    menuItemEdit.setAttribute('data-action', 'edit');
          /*delete task menu button */  
  let menuItemDelete = document.createElement("li");
    menuItemDelete.innerText = "delete";
    menuItemDelete.setAttribute('data-action', 'delete');
          /*close task menu button */  
  let menuClose = document.createElement("li");
  menuClose.innerText = "close";
  menuClose.setAttribute('data-action', 'close');

  itemChangeMenu.appendChild(menuItem);

          /*ask the user to confirm the change*/
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
    itemUnfinish.className = "done";
  let itemfinish = document.createElement("span");
    
          /*create a menu in accordance with the status of the task*/  
    if(itemTask["status"]){
    itemUnfinishWrap.className = "done";
    itemfinish.className = "task_check-status";
    menuItem.append(menuItemDone);
    menuItem.append(menuItemDelete);
    menuItem.append(menuClose);
    }else{
    itemUnfinishWrap.className = "done";
    itemfinish.className = "done";
    menuItem.append(menuItemDone);
    menuItem.append(menuItemEdit);
    menuItem.append(menuItemDelete);
    menuItem.append(menuClose);
    };
          /*insert all elements to the HTML markup*/ 
    itemUnfinishWrap.append(itemUnfinishButton);
    itemUnfinishWrap.append(itemFinishButton);
  
    menuItemTask.append(itemPriorityBlock);
    menuItemTask.append(itemChangeMenu);

  itemBlock.append(itemTitleBlock);
  itemBlock.append(itemTextBlock);
  itemBlock.append(menuItemTask);
  itemBlock.append(itemUnfinishWrap);
  itemBlock.append(itemUnfinish);
  itemBlock.append(itemfinish);
  if(itemTask["status"] == true){
    showBlokTask.append(itemBlock);
  }else{
    showBlokTask.prepend(itemBlock);
  }
  new Menu(itemBlock);

}
/*ccreate a class for action handlers in the menu for each task*/
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
        let showMenu = x.querySelector('ul');
        (showMenu.hidden == true)? showMenu.hidden = false: showMenu.hidden = true;
      }

    done(x) {
      let idTask = x.id;
      let checkboxWrap = x.querySelector('#check');
      checkboxWrap.className = "show_checkbox";
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
        
        (!checkbox.checked)?itemTask["status"] = true: itemTask["status"]= false;
        
        DataTask[idTask] = itemTask;
        x.remove();
        showTaskList(itemTask, idTask);
        saveItems();
      }
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
/*create a function to save task data in localStorage*/
function saveItems(){
  for(let i=0; i<=DataTask.length; i++){
    if(DataTask[i] == null){
      DataTask.splice(i, 1);
    };
  }
  localStorage.clear('todo');

  try {
    localStorage.setItem('todo', JSON.stringify({ 
      taskList: DataTask}));
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
     alert('localStorage limit exceeded in your browser :)');
    }
  }
}
/*call the function to display data*/
export {showTaskList};




 

  