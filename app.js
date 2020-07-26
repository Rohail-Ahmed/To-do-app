var list = document.getElementById("list");

function add(){
var input = document.getElementById("to-do");

//creat li with text
var li = document.createElement("li");
var litext = document.createTextNode(input.value);
li.appendChild(litext);


//creat del button
var delbtn = document.createElement("button");
var deltx = document.createTextNode("delete");
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onclick","delitem(this)")
delbtn.appendChild(deltx);
li.appendChild(delbtn);

//create edit button
var editbtn = document.createElement("button");
var editex = document.createTextNode("edit");
editbtn.setAttribute("class", "btne");
editbtn.setAttribute("onclick", "edit(this)");
editbtn.appendChild(editex)
li.appendChild(editbtn)


list.appendChild(li)
input.value ="";
// console.log(li);
}
//create delete function
function delitem(e){
   e.parentNode.remove();
}

//create delete all
function delall(){
    list.innerHTML="";
}

//create edit funtion
function edit(e){
    var val = prompt("enter edit value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
    

    
}