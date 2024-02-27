require('dotenv').config();
let express = require('express');
let app = express();


// Enable cors
let cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Static files
app.use(express.static('public'));

// Index route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/whoami', function (req, res) {
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    });
});


// Listen to port
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('App is listening on port ' + listener.address().port)
});