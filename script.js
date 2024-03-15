//Tutorial I used: https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097

//Choice 1
let enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?");
alert(enterCabin);

if(enterCabin == true) {
    //We enter the cabin
    alert("You decide to enter the cabin and hear a distant eerie sound echoing throughout the house.");
    let eerieSoundChoice = prompt("You walk into the cabin to follow the sound and spot a living room where all the furniture is covered up with tarp. You also spot a kitchen and hear what sounds like a cackling old woman. What do you do? Do you pull off the tarp on the furniture, head to the kitchen, or run out of the cabin?");
}
else {
    //We don't enter the cabin (enterCabin is false)
    alert("You don't go into the cabin. Well, you're no fun. Game Over.");
}

