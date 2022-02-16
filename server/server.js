const express = require('express')
const path = require('path')

const server = express()
const taskRoutes = require('./routes/tasks')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/tasks', taskRoutes)

// server.get('*', (req,res)=>{
//   res.SendFile(path.join(__dirname, 'public', 'index.html'))
// })

module.exports = server