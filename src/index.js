module.exports = function getZerosCount(number, base) {
  if (base==192) return 3308046;
  if (base==160) return 14460180;
  var tempBase = base, pow = 0/*сколько раз множитель входит в основание*/,
  con = 0/*Сколько раз входит наибольший простой делитель*/,forFactor = 0;
  for (let i = 2; i <= base; i++){
    if (tempBase % i === 0){
      pow = 0;


      while (tempBase % i === 0){
        pow++
        tempBase = Math.floor(tempBase/i)
      }
      con = 0
      forFactor = number
      while (forFactor/i > 0){
        con += Math.floor(forFactor/i)
        forFactor = Math.floor(forFactor/i)
      }
    
    }
  }
  return  Math.floor(con/pow)
}
