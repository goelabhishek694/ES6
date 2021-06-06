const squareList = arr => {
    arr=arr.filter(function(num){
      return num>0 && num%parseInt(num)==0
    });
  
    arr=arr.map(function(num){
      return num*num;
    })
    // Only change code below this line
    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  // console.log(typeof(4.8))