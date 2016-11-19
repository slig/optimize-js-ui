var express = require('express');
var bodyParser = require("body-parser");

var optimizeJS = require('optimize-js');

var app = express();

process.env.PWD = process.cwd();


app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json({limit: '3mb'}));

app.use('/static/dist', express.static(__dirname + '/dist'));
app.use('/static/semantic', express.static(__dirname + '/public/semantic'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/templates/index.html');
});

// function sleep(time) {
//     var stop = new Date().getTime();
//     while(new Date().getTime() < stop + time);
// }

app.post('/optimize', function (req, res) {
  const body = req.body;

  const { code, options } = body;


  let response = {};

  try {
    const result = optimizeJS(code, options);
    response = {
      code: result,
    }
  } catch (e) {
    response = {
      code: e.toString(),
    }
  }

  // sleep(2000);


  res.send(JSON.stringify(response));

});

app.listen(app.get('port'), function () {
});
