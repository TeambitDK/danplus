const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
//
mongoose.connect('mongodb+srv://danplus_snabel:l3m0mBhaTD9Kfbw0@danpluscluster-sct9d.mongodb.net/test?retryWrites=true')
.then(() => {
  console.log('Connected to DB!');
})
.catch(() => {
  console.log('Connection failed!');
});

app.use(bodyParser.json());

//Tillader Cross-Platform
app.use((req,res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

/* app.get('/api/posts',(req, res, next) => {
  Post.find()
  .then(documents => {
    res.status(200).json({
      message: 'Posts fetched successfully',
      posts: documents
    });
  });
}); */

module.exports = app;
