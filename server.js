var express = require("express");
var app = express();
var PORT = process.env.PORT || 7777;


//static files
app.use(express.static(__dirname));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + PORT);
});