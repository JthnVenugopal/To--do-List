require('dotenv').config();
const express  = require('express');
const session = require('express-session');
const db = require('./db/db')

const app =  express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(session({
  secret: 'Jithin',
  saveUninitialized: true,
  resave:false
}));

app.use("",require("./routes/routes"))

app.use((req,res,next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
})

app.set("view engine", "ejs");
app.use(express.static("public"));


app.listen(PORT, ()=>{
  console.log(`http://localhost:${PORT}`)
})
