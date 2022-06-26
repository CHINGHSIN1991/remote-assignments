const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static('public'));
router.set('views', './views');
router.set('view engine', 'pug');

//Assignment1
router.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
});

//Assignment2
// router.get('/getData', (req, res) => {
//   let number = req.query.number;
//   let sum;
//   if(number === undefined) {
//     number = 'NoQuery'
//     sum = 'NoQuery'
//   } else {
//     number = parseInt(number);
//     sum = Sigma(number);
//   }
//   res.render('Assignment2-getData', { number, sum });
// });

// function Sigma(num) {
//   if ( num != NaN ) {
//     let sum = 0;
//     for( let i = 0; i<= num; i++){
//       sum += i;
//     }
//     return sum;
//   }
//   return 'NaN';
// }

//Assignment3
router.get('/getData', function (req, res, next) {
  let num = parseInt(req.query.number);
  // console.log(num);
  let _url = req.url;
  if (_url == '/getData') {
    res.send('Lack of Parameter');
  } else if (_url !== '/getData' && num > 0) {
    let sum = 0;
    for(let i=0; i<= num; i++){
      sum += i;
    }
    res.send(`Sum of 1 to ${num} = ${sum}`);
  } else {
    res.send('Wrong Parameter');
  }
})

//Assignment4
router.get('/myName', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.send(`<h1> Hello ${name}!!`);
  } else {
    res.render('Assignment3-typeInName');
  }
  // response.send('<h1>Hello, My Server!</h1>');
});

router.get('/trackName', (req, res) => {
  res.cookie('username', req.query.username);
  res.redirect('myName');
})

//check error

router.use((req, res, next) => {
  res.status(404).send('Router error');
})

router.use((err, req, res, next) => {
  res.status(500).send('Code error');
})

// listen
router.listen(3000);