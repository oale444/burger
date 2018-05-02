var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var path = require('path');
var db = require('./models');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname + '/public')));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index')
});

// require('./routes/htmlRoutes.js')(app);
// require('/routes/apiRoutes.js')(app);

var PORT = process.env.PORT || 8080;;

db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
        console.log('Server listening on: http://' + PORT)
    })
});