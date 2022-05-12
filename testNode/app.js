// Importing express module
const express = require('express');
const app = express();
 
app.use(express.json());
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/create-account-page', (req, res) => {
    res.sendFile(__dirname + '/create-account-page.html');
  });
 
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send({
    username,
    password,
  });
});
 
app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});