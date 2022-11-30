const express = require('express')

const app = express();

const PORT = 400

app.listen(PORT, ()=>{
    console.log("Alhamdoulillah is working fine !");
})

app.get('/', (req, res) =>{
    
})