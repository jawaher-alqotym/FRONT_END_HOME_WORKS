function summation(num){
    /* this function take an integer and return the sum
       of all num from 1 - num*/
    sum = 0
    if(num > 0){
      for(i=1;i<=num;i++){
         sum+=i
      }
    return sum
  }
  
  }
  
  function summationEven(num){
      /* this function take an integer and return the sum
       of all even num from 1 - num*/
      sum = 0
      if(num > 0){
        for(i=2;i<=num;i+=2){
            sum+=i
        }
      
    }
      return sum
  }
  
  
  console.log(summation(5))
  console.log(summationEven(5))