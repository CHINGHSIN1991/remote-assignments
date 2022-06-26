const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/myName', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.send(`<h1> Hello ${name}!!`);
  } else {
    res.render('Assignment3-typeInName');
  }
  // response.send('<h1>Hello, My Server!</h1>');
});

app.get('/trackName', (req, res) => {
  res.cookie('username', req.query.username);
  res.redirect('myName');
})

app.listen(3000);
