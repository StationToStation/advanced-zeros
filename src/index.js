module.exports = function getZerosCount(number, base) {
module.exports = function getZerosCount(number, base) {
  let factor = [1];
  while(base!=1)
  {
    for(let i=2;i<=base;i++)
    if (base%i==0) {
      factor.push(i);
      base/=i;
      break;
    }
  }
 factor[0]=factor[factor.length-1];
  let count=0;
  do{
    number=Math.floor(number/factor[0]);
    count+=number;
  }
  while(number>factor[0]-1)
  return count;
}
}
