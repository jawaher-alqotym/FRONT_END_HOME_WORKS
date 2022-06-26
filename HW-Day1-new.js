day = 3 
switch (day){
  case 1:
    console.log('السبت')
    break
  case 2:
    console.log('الاحد')
    break
case 3:
    console.log('الاثنين')
    break
case 4:
  console.log('الثلاثاء')
  break

case 5:
  console.log('الاربعاء')
  break
case 6:
  console.log('الخنيس')
  break
case 7:
  console.log('الجمعة')
  break
default:
  console.log('لايوجد')
  break

}

num = 99
if(num%2==0){
  console.log('even')
}else{
  console.log('odd')
}

grade = 44

if(grade>=90){
  console.log('A')
}
else if(grade>=80 && grade<=89){
  console.log('B')
}else if(grade>=70 && grade<=79){
  console.log('C')
}else if(grade>=60 && grade<=69){
  console.log('D')
}else{
  console.log('F')
}

// Leap year
year = 1988
if((year % 400 == 0 && year % 4 == 0 ) || !(year % 100 ==0)){
  console.log(`${year} is a leap year`)
}

// function
function print(){
  console.log('hello')
}
print()

// fibnitche
function fib(n){
  num1 = 0
  num2 = 1
  sum = 0
  for(i=num1; i< n; i++){
    sum = num1+num2
    num1 = num2
    num2 = sum
    console.log(sum)
  }

}
//fib(5)

const input ={
  birth_year : 1998,
  birth_month : 6,
  birth_day : 28,
  curent_year : 2022,
  curent_month : 12,
  curent_day : 29,
}

year = input.curent_year  - input.birth_year
months = input.curent_month - input.birth_month 
day = input.birth_day - input.curent_day 

console.log(`you are ${year} yers old, ${months} month, and ${day} days old`)

//squares of numbers
x = 10
for(i=1;i<x;i++){
  console.log(i**2)
}

//power of 2
i = 90
num = 32
while(--i){
  if(2**i === num || num == 0){
    console.log(`${true} 2^${i}=${num}`)
    break
  }

}


//while loop 
i = 20
while(i--){
  if(i % 2 != 0){
    console.log(i)
  }
}

//Nested for loop
for(i=1;i<=5;i++){
  console.log(`${i} muiltblication table`)
  for(j=1; j<=10; j++){
    console.log(i*j)
  }
}
