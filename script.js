//Tutorial I used: https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097

//Choice 1
let enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?");
alert(enterCabin);

if(enterCabin == true) {
    //We enter the cabin
    alert("You decide ot enter the cabin and hear a distant eerie sound echoing throughout the house.");
}
else {
    //We don't enter the cabin (enterCabin is false)
    alert("You don't go into the cabin. Well, goodbye scaredy cat. Game Over.");
}

