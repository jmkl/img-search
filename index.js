const go = require('./init.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

async function searchQuery(query){
    go.search(query).then((res)=>{
        console.log(res);
    })
}

app.get('/', function(req,res){
    res.send('Hello World');
})
app.listen(port,()=>{
    console.log(`Listen to http://localhost:${port}`)
})
