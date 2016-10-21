var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

// make sure this is one of the last things in the server file
// sends user to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
