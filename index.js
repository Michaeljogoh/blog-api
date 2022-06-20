const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const blogRoutes = require('./routes/blogRoutes');
const errorHandler = require('./middleware/errorHandler')

// Connect to mongoDB
mongoose.connect(process.env.MongoDB_URI, {useNewUrlParser: true , useUnifiedTopology:true})
.then(() => console.log("MongoDB"))
.catch(err => console.log(err))

// Get data in json
app.use(express.json());

// Error Handler
app.use(errorHandler);

// Routes
app.use(blogRoutes);

//Port
const PORT = process.env.PORT;
// Server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});