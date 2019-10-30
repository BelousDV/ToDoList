import DataTask from './create.js';
//require('./create.js');
//console.log(DataTask);
//import './create.js';

var inputSearch = document.getElementById("search");
var taskStatus = document.getElementById("status");
var taskPriority = document.getElementById("priority");
var unFinishedBlokTask = document.getElementById("unFinished");
var finishedBlokTask = document.getElementById("finished");
/*
var DataTask = [];

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
   // showTaskList(itemTask, i);
    console.log(DataTask);
    let localValue = localStorage.getItem('todo');
    console.log(localValue);
    i++;
  };
}*/

console.log(DataTask);
inputSearch.onchange = function searchTasksTitle(){
	alert("Search");
	let input = inputSearch.value;
	//console.log(priorityElem);
	
	for(let j = 0; j<=DataTask.length-1; j++){
		let titleData = DataTask[j]; 
		let titleTask;
		let showItemTask = document.getElementById(j);
		//if(priorityElem == 'all'){
			//showItemTask.className = "show";
		//	showItemTask.style.display = "block";
		if(titleData['title'] == input){
			//alert(titleData['title']);
			showItemTask.style.display = "block";
			//taskStatus.value = titleData['status'];
			//taskPriority.value = titleData['priority'];
		}else{
			showItemTask.style.display = "none";
		}
	}
	inputSearch.value = "";
}

taskStatus.onchange = function searchTasksStatus(){
	//alert("status");
	let statusElem = taskStatus.value;
	console.log(statusElem);
	if(statusElem == 'open'){
		finishedBlokTask.className = "done";
		unFinishedBlokTask.className = "unFinished-tasks";
		statusElem = false;
	}else if(statusElem == 'done'){
		finishedBlokTask.className = "finished-tasks";
		unFinishedBlokTask.className = "done";
		statusElem = true;
	}else{
		finishedBlokTask.className = "finished-tasks";
		unFinishedBlokTask.className = "unFinished-tasks";
	}
}

taskPriority.onchange = function searchTasksStatus(){
	//alert("priority");
	let priorityElem = taskPriority.value;
	//console.log(priorityElem);
	
	for(let j = 0; j<=DataTask.length-1; j++){
		let priorityData = DataTask[j]; 
		let showItemTask;
		showItemTask = document.getElementById(j);
		if(priorityElem == 'all'){
			//showItemTask.className = "show";
			showItemTask.style.display = "block";
		}else if(priorityData['priority'] == priorityElem){
			//alert(priorityData['priority']);
			showItemTask.style.display = "block";
		}else{
			showItemTask.style.display = "none";
		}
	}

}

//export default DataTask;












