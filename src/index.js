module.exports = function getZerosforFactor(number, base) {
  var results = [];
  myNumber = number;
  myBase = base;
  for (let i=2;i<base, myBase>1;i++)//base?
   if(myBase%i===0)
   {
      pow = 0;
     while (myBase%i===0)
     {
       pow++;
       myBase/=i;
     }
     var count = 0;
     myNumber=number;
     while(myNumber>=i) {
      myNumber=Math.floor(myNumber/i);
      count+=myNumber;
    }
    results.push(Math.floor(count/pow));
   }
   results.sort(function (a,b) {
    return a-b;
    });
   return results[0];
}
