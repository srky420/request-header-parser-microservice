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


// Listen to port
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('App is listening on port ' + listener.address().port)
});