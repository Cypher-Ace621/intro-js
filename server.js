require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => res.send('My Week 2 API!'));

app.use(express.json()); //parses json to body automatically middleware implementation

app.use((req, res, next) => {
   //logs every request
   console.log(`${req.method} ${req.url} - ${new Date()}`);
   next(); // pass to next handler (required!)
});

app.post('/user', (req, res) => {
   const {name, email} = req.body;
   if(!name || !email) return res.status(400).json({errror: 'You left an empty field'});
   // simulate DB save
   res.status(201).json({message: `Accept: ${name}, ${email}`});
   console.log(`Hello ${name}`);
});

app.get('/user/:id', (req, res) => {
   res.json({id: req.params.id, name: 'user id'});
   
});

app.listen(PORT, () => {
   console.log(`server running on http://localhost:${PORT}`);
});