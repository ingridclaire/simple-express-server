const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const { loginUser } = require('./controllers/users')
// const routes = require('./routes');

app.use(express.static('public')); //where to find static/public assets like html, css and frontend js
app.use(express.json()); // parses incoming JSON to js

// app.use('/api', routes) // can define all your routes outside this file, and then bring them in like this

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/dashboard', (req, res) => {
  res.json({message: 'this is the dashboard'})
})

app.post('/login', loginUser) // good practice to define the functions elsewhere to keep your routes clean and readable

app.listen(port, () => console.log(`server running on port ${port}`))