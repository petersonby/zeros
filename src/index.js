module.exports = function getZerosCount(number) {

  let count = 0;
  let fivePow = 5;
  let pow = 2;
  
  while ((number / fivePow) > 1) {

    count += Math.floor(number / fivePow);
  	fivePow = Math.pow(5, pow);
  	pow++;

  }

  return count;
}
