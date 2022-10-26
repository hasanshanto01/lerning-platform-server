const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learning server running...');
});

// all course
app.get('/courses', (req, res) => {
    res.send(courses);
});

// single course
app.get('/courses/:id', (req, res) => {
    // console.log(typeof req.params.id);
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('Learning server running on port:', port);
});