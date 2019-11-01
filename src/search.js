import DataTask from './create.js';
//require('./create.js');
//console.log(DataTask);
//import './create.js';

var inputSearchButton = document.getElementById("search-btn");
var inputSearch = document.getElementById("search");
var taskStatus = document.getElementById("status");
var taskPriority = document.getElementById("priority");
var unFinishedBlokTask = document.getElementById("unFinished");
var finishedBlokTask = document.getElementById("finished");


console.log(DataTask);
inputSearchButton.onclick = function searchTasksTitle(){
	alert("Search");
	taskStatus.value = 'all';
	taskPriority.value = 'all';
	let input = inputSearch.value;
	//console.log(priorityElem);
	let statusSearch = false;
	
	for(let j = 0; j<=DataTask.length-1; j++){
		let titleData = DataTask[j]; 
		let titleTask;
		let showItemTask = document.getElementById(j);

		if(titleData['title'] == input){
			showItemTask.style.display = "block";
			statusSearch = true;
		}else{
			showItemTask.style.display = "none";
		}
	}
	if(!statusSearch){
		alert("not found"); 
		//taskStatus.value = 'all';
		//taskPriority.value = 'all';
		//searchTasksStatus();
	} 
	inputSearch.value = "";
	//searchTasksStatus();
}

//export default DataTask;


function searchTasksStatus(){
	alert("status");
	let statusElem = taskStatus.value;
	let priorityElem = taskPriority.value;
	
	console.log(statusElem);
	console.log(priorityElem);
	switch(statusElem){
		case 'done':
			statusElem = true;
			alert(statusElem);
			break;
		case 'open':
			statusElem = false;
			alert(statusElem);
			break;
		default:
			statusElem = 'all';
			//priorityElem = 'all';
			alert(statusElem);
			alert(priorityElem);
	}
	console.log(statusElem);
	for(let j = 0; j<=DataTask.length-1; j++){
		let statusData = DataTask[j]; 
		console.log(statusData['priority']);
		console.log(statusData['status']);
		let showItemTask;
		showItemTask = document.getElementById(j);
		if(statusElem == 'all' && priorityElem == 'all'){
			//showItemTask.className = "show";
			showItemTask.style.display = "block";
			console.log(showItemTask);
		}else if(statusData['status'] == statusElem && statusData['priority'] == priorityElem || 
		statusData['status'] == statusElem && priorityElem == 'all' ||
		statusElem == 'all' && statusData['priority'] == priorityElem){
			//alert(priorityData['priority']);
			showItemTask.style.display = "block";
			console.log(showItemTask);
		}else{
			showItemTask.style.display = "none";
			console.log(showItemTask);
		}
	}
	/*let statusElem = taskStatus.value;
	if(statusElem == 'open'){
		finishedBlokTask.className = "done";
		unFinishedBlokTask.className = "unFinished-tasks";
		statusElem = false;
	}else if(statusElem == 'done'){
		finishedBlokTask.className = "finished-tasks";
		unFinishedBlokTask.className = "done";
		statusElem = true;
	}else if(statusElem == 'all'){
		finishedBlokTask.className = "finished-tasks";
		unFinishedBlokTask.className = "unFinished-tasks";
	}*/
	//searchTasksPriority();
}
taskStatus.onchange = searchTasksStatus;
taskPriority.onchange = searchTasksStatus;

function searchTasksPriority(){
	alert("priority");
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
	//searchTasksStatus();
}
//taskPriority.onchange = searchTasksPriority;











