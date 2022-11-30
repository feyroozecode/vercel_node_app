const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extend: false
}))

app.listen(port, () => {
    console.log("Alhamdoulillah is working fine ! "+ port); 
})
app.get('/', (req, res) =>{
    res.send("You are on the API home")
})

app.get('/about', (req, res)=> {
    res.send('This is a about route...')
})

module.exports = app