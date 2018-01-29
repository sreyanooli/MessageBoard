var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');



var port=4300;

var multer = require('multer');
var path = require('path');

// specify the folder
app.use(express.static(path.join(__dirname, 'uploads')));
// headers and content type
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  var upload = multer({ storage: storage });

  app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log('files', req.files);
    res.send(req.files);
  });

  var server = app.listen(port, function () {
    console.log("Listening on port %s...", port);
  });


var messages = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];
var users = [];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();
var auth = express.Router();


api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);

    res.json(result);
})

api.post('/message', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})

auth.post('/register', (req,res)=>{
    var index = users.push(req.body) - 1;
    
    var user = users[index];
    user.id = index;

    var token = jwt.sign(user.id, '123');
    res.json({firstName: user.firstName,token});
    
})

app.use('/api', api);
app.use('/auth', auth);


app.listen(4600);