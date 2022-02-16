const express = require( 'express' )
const router = require('express').Router()
const db = require('../db/db')
const server = require('../server')


router.get('/', (req,res) =>{
    db.getAllTasks()
    .then(tasks=>{
      res.json(tasks)
      return res.status(200)
    })
    .catch( err =>{
      res.status(500).send(err.message)
    })
})

router.post('/', (req,res) =>{
  db.addTask(req.body)
  .then( idArray =>{
    return db.getTaskById(idArray[0])
  })
  .then(task =>{
    res.json(task)
    return (res.status(201))
  })
  .catch( err =>{
    console.log( err )
    res.status(500)
  })
})

module.exports = router