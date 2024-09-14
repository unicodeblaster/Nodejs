const express = require('express');  
const app = express();  
const mongoose = require('mongoose');  
const cors = require('cors');  

  
mongoose.connect('mongodb://localhost:27017/abc', {  
  useNewUrlParser: true,  
  useUnifiedTopology: true  
});  

app.use(cors());  


app.use(express.json());  

 
const usersRouter = require('./routes/users');  
const postsRouter = require('./routes/posts');  

app.use('/api/users', usersRouter);  
app.use('/api/posts', postsRouter);  


const port = 3001;  
app.listen(port, () => {  
  console.log(`Server listening on port ${port}`);  
});  


app.use((req, res) => {  
  res.status(404).send('Not Found');  
});  

app.use((err, req, res, next) => {  
  console.error(err);  
  res.status(500).send('Internal Server Error');  
});