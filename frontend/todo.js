const fs = require("fs")
const filepath = "./store.json"


const loadTasks = () =>{
    try {
        const bufferjson = fs.readFileSync(filepath)
        const datajson = bufferjson.toString()
        return JSON.parse(datajson)
        
    } catch (error) {
        return [];
        
    }
}

const savefile=(tasks)=>{
    const datajson = JSON.stringify(tasks)
    fs.writeFileSync(filepath,datajson)
}



const addtask =(task)=>{
    const tasks = loadTasks()
    tasks.push({task})
    savefile(tasks)
}

const listcontent=()=>{
    const tasks = loadTasks()
    tasks.forEach((task,index) => console.log(`${index}-${task.task}`));
}

const remove = (number)=>{
    const tasks = loadTasks()
    tasks.splice(number,1)
    savefile(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === "add"){
    addtask(argument)
}else if(command === "list"){
    listcontent()
}else if(command === "remove"){
    remove(parseInt(argument))
}else{
    console.log("command not found")
}