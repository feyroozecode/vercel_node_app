/*
 app router object to handles the different request
 form the server, e.g: when the server receives GET request 
 the Express get() method passes the specified controller 
 to the getTasks controller 
*/

const express = require('express')
const router = express.Router();

const {getTasks, setTask, updateTask, deleteTask} = require('../controller/taskControllers')

router.get('/', getTasks)
router.post('/', setTask)
router.put('/', updateTask)
router.delete('/', deleteTask)

// export the app route 
module.exports = router