/*Calculate area of a rectangle

Store the length of rectangle.
Store the width of rectangle.
Calculate the area and print the output "The area of the rectangle is: NN"*/
width = 12
heght = 12
console.log(`the erea =  ${width*heght}`)

/*
The Temperature Converter

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/ 
celsius_temp = 34 
fahrenheit_temp = (9/5)*celsius_temp+23
console.log(fahrenheit_temp)

//((T(oF)  -  32  ) ×  5)/9
console.log(((fahrenheit_temp-32)*5)/9)


//Loop though this array let Numbers = [23,54,32,87,47] and print the sum of all numbers
Numbers = [23,54,32,87,47]
sum = 0
Numbers.forEach(element => {
   sum+=element 
});
console.log(sum)

/*Create an array of the following numbers [16,4,2,0,19,6]
Loop through the array elements and print the maximum number of this list to the console.*/
numbers = [16,4,2,0,19,6]
max = numbers[0]
numbers.forEach(elem => {
if(max < elem){
    max = elem
}
})
console.log(max)

/**Reverse Array
Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]
print the array in a reverse order */
orgnal = [1,2,3,4,5,6,7,8,9,10]
reverse = []

for(i=0;i<10;i++){
    reverse.push(orgnal.pop())
}
console.log(reverse)


/**Declare a variable and assign a number to it.
Print a right angle triangle using stars to the console. Example: if the variable is 5, the printed pattern will be as follow: */
length=4
line = "";
for (var i = 1; i <= length; i++) {
      line+="*".repeat(i)+"\n";
    }

  
console.log(line);
