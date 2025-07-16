
document.addEventListener("DOMContentLoaded", () => {
let input = document.getElementById("todo-input")
let add = document.getElementById("add-task-btn")
let todo = document.getElementById("todo-list")

let list = []

add.addEventListener("click",()=>{

    let entered = input.value.trim()
    if(entered==="") return;

    const token = {
        id : Date.now(),
        text : entered,
        status : false}

    list.push(token)
    save();
    input.value = "";
    console.log(list)
})

function save(){
    localStorage.setItem('tasks',JSON.stringify(list))
}
})