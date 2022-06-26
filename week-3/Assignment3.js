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

router.listen(3000);