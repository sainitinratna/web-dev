import logger from "./logger.js";
import morgan from "morgan";

import express from 'express'//we can use this only when we have module in package.json in type

const morganFormat = ":method :url :status :response-time ms";


const app = express()//to create express server
const port = 3001


app.use(express.json()) //used to parse a reqques json

let teaData = []//to store data
let nextId = 1// to init index and store in teadata

//code for logger
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

//updates the teadata with data given by user,to perform this go postman and past url and go to body and then raw after that type a json
app.post('/tea',(req,res)=>{
    const {name,price} = req.body
    const newtea = {
        id:nextId++,
        name,
        price,
    }
    teaData.push(newtea)
    res.status(201).send(newtea)
})

//to get the entire array
app.get('/tea',(req,res)=>{
    res.status(201).send(teaData)
})

//to find an element using index
app.get('/tea/:id',(req,res)=>{
    const tea  = teaData.find(t=> t.id === parseInt(req.params.id))
    if (!tea){
        return res.status(404).send("tea not found")
    }
    res.status(200).send(tea)
})

//to update an elemt 
app.put('/tea/:id',(req,res)=>{
   const tea  = teaData.find(t=> t.id === parseInt(req.params.id))
   
if (!tea){
        return res.status(404).send("tea not found")
    }
    const{name,price}=req.body
    tea.price = price
    tea.name = name
})

//deltes an element
app.delete('/tea/:id',(req,res)=>{
    const index = teaData.findIndex(t=>t.id===parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send("tea not found")
    }
    teaData.splice(index,1)
    res.statusCode(200).send(teaData)

})
//listens on port 3001
app.listen(port,()=>{
console.log(`prort running on ${port}`)
})

