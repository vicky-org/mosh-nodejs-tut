const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const express = require('express');

const app = express();

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))
app.use(helmet());

console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail password: ${config.get('mail.password')}`);

if (app.get('env') === 'development') {
    
    app.use(morgan('dev'));
    startupDebugger('Morgan enabled...');
}
app.use(morgan('tiny'));
app.use(logger);

dbDebugger('connected to db...');
const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' }
]

app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello, World!' });
    //res.send('Hello, World from Express!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});  

app.post('/api/courses', (req, res) => {
    
    const { error } = validateCourse(req.body);
    console.log(error);

    if (error) res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
});  

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`course with given id  ${req.params.id} not found`)
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`course with given id  ${req.params.id} not found`)
    
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`course with given id  ${req.params.id} not found`)

    const {error} = validateCourse(req.body);
    console.log(error);
    
    if (error) return res.status(400).send(error.details[0].message);
    
    course.name = req.body.name;
    res.send(course);
}); 

function validateCourse(course) {
     const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});