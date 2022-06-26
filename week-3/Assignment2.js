const express = require('express');

const router = express();
router.set('view engine', 'pug');

router.get('/getData', (req, res) => {
  let number = req.query.number;
  let sum;
  if(number === undefined) {
    number = 'NoQuery'
    sum = 'NoQuery'
  } else {
    number = parseInt(number);
    sum = Sigma(number);
  }
  res.render('Assignment2-getData', { number, sum });
});

router.use((req, res, next) => {
  res.status(404).send('Router error');
})

router.use((err, req, res, next) => {
  res.status(500).send('Code error');
})

function Sigma(num) {
  if ( num != NaN ) {
    let sum = 0;
    for( let i = 0; i<= num; i++){
      sum += i;
    }
    return sum;
  }
  return 'NaN';
}

router.listen(3000);
