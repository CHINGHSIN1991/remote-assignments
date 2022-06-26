const express = require('express');
const router = express();
const bodyParser = require('body-parser');

router.set('views', './views');

//增加靜態檔案的路徑
router.use(express.static('public'));

// 增加 body 解析
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//路由
router.get('/', function (req, res) {
  res.send('Hello, My Server!');
  // console.log('here is someone coming！')
})

let process = function (req, res, next) {
  let num = parseInt(req.query.number);
  // console.log(num);
  let _url = req.url;
  if (_url == '/getData') {
    next();
  } else if (_url !== '/getData' && num > 0) {
    let sum = 0;
    for(let i=0; i<= num; i++){
      sum += i;
    }
    res.send(`Sum of 1 to ${num} = ${sum}`);
  } else {
    res.send('Wrong Parameter');
  }
}

router.get('/getData', process, function (req, res) {
  res.send('Lack of Parameter');
})

router.post('/sum.html', function (req, res) {
  console.log(req.body);
  res.send('hello!!')
  // console.log(req.body);
  // //轉址
  // res.redirect('search');
  // res.render('search');
})

router.listen(3000);