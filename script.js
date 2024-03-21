//Tutorial I used: https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097

//Choice 1
let enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?");
alert(enterCabin);

if(enterCabin == true) {
    //We enter the cabin & face choice 2
    alert("You decide to enter the cabin and hear a distant eerie sound echoing throughout the house.");
    
    let eerieSoundChoice = prompt("You walk into the cabin to follow the sound and spot a living room where all the furniture is covered up with tarp. You also see a door to a kitchen and hear what sounds like a cackling old woman coming from the inside. What do you do? Do you go to the living room and pull off the tarp on the furniture, head to the kitchen, or run out of the cabin?");

    if(pullTarp == prompt("You pull the tarp off a chair and a ghost pops outs, causing you to run screaming out of the cabin. Don't touch the ghost's stuff. Game Over.")) {
        //we choose to pull the tarp off the furniture.
    }
    else if (visitHag == 2);
        //we go into the kitchen and meet the hag.
        alert("Welcome deerie.")
    }
    else {let runOutOfCabin = prompt(("Scaredy cat. Game Over."));
        //we run out of the cabin and get called a scaredy cat.
    
    //We don't enter the cabin (enterCabin is false)
    alert("You don't go into the cabin. Well, you're no fun. Game Over.");
    
    //Choice 3
    let visitHag = prompt("You see a hideous old woman turn around and say 'Welcome, deerie.' She tells you that if you want to find the eerie voice at the far end of the cabin, you'll have to take one of two objects that she offers you: a red apple or a compass. Which one do you pick?");
    if(compassChoice == "chosen object") {
        alert("What good do you think a compass will do in finding a sound? Game Over.");
    }
    else (compassChoice == "chosen object"); {
        alert("The hag tells you to take the apple down the hall until you reach to where it diverges into separate hallways you'll have to choose from.");
        alert("You start walking down the hallway with the eerie sound still echoing.");
    }

    //Choice 4
    let walkDownHall = prompt("You walk down the hallway with apple in hand until you reach where the hall diverges into two. Once there, you notice that the eerie sound has stopped. So you'll have to figure out which path to take on your own. You are faced with two choices. Take the hall on the left with the creepy 1800s paintings that look like they are watching you or the hall on the right where a black cat with green eyes is staring at you?")
    if(blackCat == "choice") {
        alert("The cat comes up to you and tells you that you went the wrong way before it starts cackling and transforming into a hideous witch, which sends you screaming and running out the cabin. Game Over.");
    }
    else (creepyPainting == "choice"); {
        alert("You go down the left hallway, feeling the stares and hearing the whispers of every painting you walk pass.")
    }
    //Choice 5
    let paintingHallway = prompt ("As you reach the end of the hall, you see that the path diverges again, but this time there is a portrait of an old man in 1800s attire hung on the wall in front of the path you are to take and he speaks to you. He says you need to take another object with you, and he'll tell you which one if you give him the apple you have with you. What do you do? Give him the apple or keep it until you reach the mysterious sound?");
    if(keepApple == "choice") {
        alert("You decide to take your chances and keep the apple. 10 minutes later after trying one of the hallways, the old man and all the portraits laugh as they hear you running and screaming out of the cabin. Game Over.");
    }
    else (giveOldManApple == "choice") {
        alert("The old man reachs his hand out of the portrait and starts eating it. As he eats, he tells you that there's a silver hairbrush that you need and that it's located in the drawer of the desk on the right side of the hall area you are in, but it's locked. What do you do? Ask the portrait for help or start looking for a key");
    }
    if(askPortrait == "choice") {
        alert("You ask the portrait and the old man tells that one apple only allows you one piece of information. You go back to the kitchen to get another apple from the hag but by the time you come back the old man has disapperead from the portrait. You get mad and throw the apple at his painting, causing the portrait to fall down and the whole hallway to shake, which sends you screaming into the woods. Game Over.")
    }
    else (lookForKey == "choice") {
        alert("You start looking around the area until a bust head says psst, the key to the drawer is in the bookshelf next to me. You go to the bookshelf, but it's locked too. Oh no, now what?")
    }
} 


