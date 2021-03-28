const express = require('express')
const router = express.Router()
const fs = require('fs')
const { parse } = require('path')

let results
fs.readFile('json/services.json', 'utf8', function (err,data) {
    if (err) {
        throw err
    } else {
        results = JSON.parse(data)
    }
})

router.get('/',(req,res,next) => {
    res.render('services', {
        title: 'Services',
        services: results  
    })
})