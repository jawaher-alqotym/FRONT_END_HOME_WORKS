
function say_hi(){

   username = window.prompt("Enter your name please: ")
   h1 = document.getElementById("first_h1")

   if (username){
    h1.innerHTML = `Hello ${username}`}
   
}

function roll_dice(){
    random_num1 =Math.floor(Math.random()*6)+1
    random_num2 =Math.floor(Math.random()*6)+1

    // get the parent and creat the new elemnt
    div = document.getElementById("second_div")
    new_img_one = document.createElement('img')
    new_img_two = document.createElement('img')

    // remove the old children
    while (div.hasChildNodes()){
     div.removeChild(div.firstChild)
  }

    // remove old css padding
    div.style = "padding:0rem"

    // add src to the new elemints
    new_img_one.src=`images/${random_num1}.png`
    new_img_two.src=`images/${random_num2}.png`
    

    // append to parent
    div.appendChild(new_img_one)
    div.appendChild(new_img_two) 
    
}

