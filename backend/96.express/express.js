import express from 'express'

const app = express()
const port = 3001


app.use(express.json()) 

let teaData = []
let nextId = 1


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

app.get('/tea',(req,res)=>{
    res.status(201).send(teaData)
})

app.get('/tea/:id',(req,res)=>{
    const tea  = teaData.find(t=> t.id === parseInt(req.params.id))
    if (!tea){
        return res.status(404).send("tea not found")
    }
    res.status(200).send(tea)
})

app.put('/tea/:id',(req,res)=>{
   const tea  = teaData.find(t=> t.id === parseInt(req.params.id))
   
if (!tea){
        return res.status(404).send("tea not found")
    }
    const{name,price}=req.body
    tea.price = price
    tea.name = name
})

app.delete('/tea/:id',(req,res)=>{
    const index = teaData.findIndex(t=>t.id===parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send("tea not found")
    }
    teaData.splice(index,1)
    res.statusCode(200).send(teaData)

})

app.listen(port,()=>{
console.log(`prort running on ${port}`)
})

