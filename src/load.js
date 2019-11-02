//load data from the localStorage and pass the data to render the page
import {showTaskList} from './create.js';
var DataTasks = [];
/*create a function for parse data*/
function loadItems() { 
	return JSON.parse(localStorage.getItem('todo'));
}
var data = loadItems();

for(let i=0; i<data.taskList.length; ){
 let itemTask = data.taskList[i];
 if(itemTask == null){
    DataTasks.splice(i, 1);
    i++;
  }else{
    DataTasks.push(itemTask);
    showTaskList(itemTask, i);
    i++;
  };
}

export default DataTasks;