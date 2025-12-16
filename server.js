require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT 

app.use(express.json());

//ROUTES
app.get('/', (req, res) => res.send('My week2 API!'));

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({error: 'Name and email are required'});

    console.log(name, email);
    res.status(200).json({ message: "Hello: ${name}" });
});

app.get('/user/:id', (req, res) => {
    res.json({ userId: req.params.id, name: 'User profile' });
});

//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3005, () => console.log('Server running on http://localhost:3005'));