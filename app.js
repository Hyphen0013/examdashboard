const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const ejs = require('ejs');
const logger = require('morgan');

const app = express();


// Configure middleware
app.use(express.static('./public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));


// Route page
app.get('/',  (req, res) => {
    res.render('layouts/dashboard', {
        title: 'Dashboars Page'
    });
});

app.get('/exam-history',  (req, res) => {
    res.render('pages/exam_history', {
        title: 'Exam history Page'
    });
});

app.get('/test-page',  (req, res) => {
    res.render('pages/test_page', {
        title: 'Test Page'
    });
});


app.get('/score-page',  (req, res) => {
    res.render('pages/score_page', {
        title: 'Score Page'
    });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    console.log(`Server is running on PORT: ${PORT}`);
});