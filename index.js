const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const blogRoutes = require('./routes/blogRoutes');

mongoose.connect(process.env.blogDB,  {useNewUrlParser: true , useUnifiedTopology:true})
.then(()=> console.log('MongoDB'))
.catch(err =>console.log(err))


app.use(express.json());
// Routes
app.use(blogRoutes);

//Port
const PORT = process.env.PORT
// Server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});