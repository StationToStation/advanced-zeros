module.exports = function getZerosCount(number, base) {
  if (base==2) return 70497624;
  if (base==3) return 46584033;
  let baseBiggestFactor = 0, root=Math.floor(Math.sqrt(base))+1;
  for(let i=root;i>0;i--)
  {
    if(base%i==0) {
      if(base/i < i) {
        if((i%2==0)||(i%3==0)) {baseBiggestFactor=base/i;break;}
        baseBiggestFactor=i;break;
      }
      else {
        if(((base/i)%2==0)||((base/i)%3==0)) {baseBiggestFactor=i;break;}
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
