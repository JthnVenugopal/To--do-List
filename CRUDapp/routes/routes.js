const express =  require ('express');
const router =  express.Router();
// const user = require('../models/users')

router.get('/users', (req,res)=>{
 res.send("hi")
});

router.get('/', (req,res)=>{
  res.render('home', {title: 'Home page'})
})

router.get('/add', (req,res)=>{
  res.render('add_user', {title: "add users"})
})

router.get('/about', (req,res)=>{
  res.render('about')
})

module.exports = router
