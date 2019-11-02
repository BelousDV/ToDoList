/*connect data from localStorage*/
import DataItem from './load.js';

/*read the data entered by the user*/ 
var inputSearchButton = document.getElementById("search-btn");
var inputSearch = document.getElementById("search");
var taskStatus = document.getElementById("status");
var taskPriority = document.getElementById("priority");

/*create function search by title with the data entered*/ 
function searchTasksTitle(){
	taskStatus.value = 'all';
	taskPriority.value = 'all';
	let input = inputSearch.value;
	let statusSearch = false;
	
	
	for(let j = 0; j<=DataItem.length-1; j++){
		let titleData = DataItem[j]; 
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
		alert("Sorry, nothing found for your request.");
	} 
	
	inputSearch.value = "";
}

/*create function search by status with the selected data status and priority*/ 
function searchTasksStatus(){
	let statusElem = taskStatus.value;
	let priorityElem = taskPriority.value;
	
	switch(statusElem){
		case 'done':
			statusElem = true;
			break;
		case 'open':
			statusElem = false;
			break;
		default:
			statusElem = 'all';
	}
	
	for(let j = 0; j<=DataItem.length-1; j++){
		let statusData = DataItem[j]; 
	
		let showItemTask;
		showItemTask = document.getElementById(j);
		if(statusElem == 'all' && priorityElem == 'all'){
			showItemTask.style.display = "block";
		}else if(statusData['status'] == statusElem && statusData['priority'] == priorityElem || 
		statusData['status'] == statusElem && priorityElem == 'all' ||
		statusElem == 'all' && statusData['priority'] == priorityElem){
			showItemTask.style.display = "block";
		}else{
			showItemTask.style.display = "none";
		}
	}
}
taskStatus.onchange = searchTasksStatus;
taskPriority.onchange = searchTasksStatus;
inputSearchButton.onclick = searchTasksTitle;

/*create a function for the input field by pressing enter*/ 
inputSearch.addEventListener('keydown', (event)=>{
	let key = event.code;
	if(key == 'Enter'){
		searchTasksTitle();
	}
});













