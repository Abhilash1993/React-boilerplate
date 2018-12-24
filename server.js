var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join('./dist')));


app.get('*', function(req, res) {
 res.sendFile(__dirname + "/dist/index.html");
})

app.listen(8080);
console.log("Listening on PORT 8080");
