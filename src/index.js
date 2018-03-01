module.exports = function getZerosCount(number, base) {
  let baseBiggestFactor = 0, root=Math.floor(Math.sqrt(base))+1;
  for(let i=root;i>0;i--)
  {
    if(base%i==0) {
      if(base/i < i) {
        baseBiggestFactor=i;break;
      }
      else {
        baseBiggestFactor=base/i;break;
      }
    }
  }

  //аналогично предыдущей задаче
  let count=0;
  do{
    number=Math.floor(number/baseBiggestFactor);
    count+=number;
  }
  while(number>baseBiggestFactor-1)
  return count;
}
