module.exports = function getZerosCount(number, base) {
  var results = [];
  for (let i=2;i<base, base>1;i++)
   if(base%i===0)
   {
      pow = 1;
      base/=i;
     while (base%i===0)
     {
       pow++;
       base/=i;
     }
     var count = 0;
     myNumber=number;
     while(myNumber>=i) {
      myNumber=Math.floor(myNumber/i);
      count+=myNumber;
    }
    results.push(Math.floor(count/pow));
   }
   results.sort((a,b) => a-b);
   return results[0];
}
