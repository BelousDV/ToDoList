/*var showBlokTask = document.getElementById("show_wrapper");


console.log(showBlokTask.children.length);

function saveItems(){
    let TaskArr=[];
    for (let i = 1; i < showBlokTask.children.length; ) {

		let k = unfinishedTask.children[i].getElementsByTagName('label')[0].innerText;
	    unTaskArr.push(k);
	    i++;
	}
	
	localStorage.clear('todo');
    localStorage.setItem('todo', JSON.stringify({
    	unfinishedTask: unTaskArr, 
    	finishedTask: TaskArr}));
}*/
/*
function loadItems() {
	return JSON.parse(localStorage.getItem('todo'));
}
var data = loadItems();
for(var i=0; i<data.unfinishedTask.length; i++){
	var listItem=createNewElement(data.unfinishedTask[i]);
	unfinishedTask.appendChild(listItem);
	bindTaskEvents(listItem, unfinishTask);
}
for (var j=0; j<data.finishedTask.length; j++){
	var listItem=createNewElement(data.finishedTask[j]);
	finishedTask.appendChild(listItem);
	bindTaskEvents(listItem, finishTask);
}*/