let input=document.querySelector('.input');
let supmit =document.querySelector('.add')
let tasksdiv =document.querySelector('.tasks')

let arrayoftasks=[];
if(localStorage.getItem("tasks")){
    arrayoftasks=JSON.parse(localStorage.getItem("tasks"))
}
supmit.onclick=function(){
    if(input.value!=""){
        addtasktoarray(input.value);
        input.value="";
    }
}
tasksdiv.addEventListener("click" ,(e)=>{
if(e.target.classlist.contain("del")){
    e.target.parentelement.remove();
    deletetaskwith(e.target.parentelement.gettattribute("data-id"));
}
})

function deletetaskwith(taskid){
    for(let i=0;i<arrayoftasks.length;i++){

    }
    arrayoftasks =arrayoftasks.filter((task) => task.id !=taskid)
    adddatatolocalstorge(arrayoftasks)

}
function addtasktoarray(tasktext){
  const task={
    id:Date.now(),
    title:tasktext,
    completed:false,


  };
  arrayoftasks.push(task);
  
  adddelemnttopage(arrayoftasks)
  
  adddatatolocalstorge(arrayoftasks)
}
function adddelemnttopage(arrayoftasks){
 tasksdiv.innerHTML="";
 arrayoftasks.forEach(element => {
    let div=document.createElement("div")
    div.className="task";
    if(task.completed){
        div.className="task done"
    }

    div.setAttribute("data-id " ,task.id);
    div.appendChild(document.createTextNode(task.title))
    

    let span =document.createElement("span");
    span.className="del";
    span.appendChild(document.createTextNode("delete"));
    div.appendChild(span);

    tasksdiv.appendChild(div);
 
 });
  
} 
function adddatatolocalstorge(arrayoftasks){
    window.localStorage.setItem("tasks",JSON.stringify( arrayoftasks))
}
function getdatafromlocalstorage(){
    let data =window.localStorage.getItem("tasks");
    if(data){
        let tasks=JSON.parse(data)
    }
}