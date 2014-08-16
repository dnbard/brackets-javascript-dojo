var express = require('express'),
    path = path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose');

var app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || '3000',
    config = require('./config');

mongoose.connect(config.database);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
    app.listen(port, function(){
        console.log('Express server listening on port %d, in %s mode', port, app.get('env'));

        require('./routing').init(app);
    });
});

// Bootstrap models
var modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});
