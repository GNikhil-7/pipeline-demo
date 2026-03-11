const https = require('https');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:Admin0207@confluxaa.iaafful.mongodb.net/test")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from AWS CI/CD Pipeline with MongoDB!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});