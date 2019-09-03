const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const data = require ('../react-crm-ex-youvalpolacsek/data')
let Client = require ('./ClientModel')

mongoose.connect("mongodb://127.0.0.1/CRMDB", { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/clients', function (req, res) {
    Client.find({}, function (err, client) {
        res.send(client)
    })
})

app.get('/clients/:name', function (req, res) {
    Client.find({name: req.params.name}, function (err, client) {
        res.send(client)
    })
})

app.put('/clients/:name', async function(req,res) {
    console.log(req.body)
    let name = req.params.name
    await Client.findOneAndUpdate({name: name}, req.body)
    res.end()
})


app.post('/clients', function(req,res){
    console.log("posting")
    console.log(req.body)
    const newClient = new Client(req.body)
    newClient.save()
    res.send()
})



const port = 8000
app.listen(port, function(){console.log("running on port "+ port)})
  

// data.forEach(d => {
//         const client = new Client(d)
//         client.save()
//     }
//     )