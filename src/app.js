const express = require('express');
const authRouter = require('./adapters/express/routes/auth');
const mongodb = require('./adapters/express/mongodb/connection')


const app = express();
const PORT = process.env.PORT || 3000;

mongodb()

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRouter);


//Error middleware
app.use((err,req,res,next)=>{
  res.status(500).json({
    error:err.message
  })
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
