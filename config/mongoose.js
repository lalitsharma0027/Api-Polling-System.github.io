// configuration for creating database connection
require('dotenv').config();
const mongoose = require('mongoose');


let DB_URL = process.env.MONGO_DB;    

// connect to the database
mongoose.connect('mongodb+srv://lalitsharma:lalitsharma@cluster0.u61rc6k.mongodb.net/?retryWrites=true&w=majority' , 
  {
    usenewurlparser: true,
    useunifiedtopology: true
  }).then(()=>{
    console.log(`connection successful `);
  }).catch((err)=>{
    console.log(`error connecting to database` , err);
  })

