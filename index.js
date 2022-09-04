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
    res.setHeader('Content-Type', 'application/json');
    const query = req.query['key'];
    if(query){
        go.search(query).then((result)=>{
            res.send(JSON.stringify(result));
        })
    }else{
        res.send(JSON.stringify([]))
    }

    
})
app.listen(port,()=>{
    console.log(`Listen to http://localhost:${port}`)
})
