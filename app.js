require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from AWS CI/CD Pipeline with MongoDB!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});