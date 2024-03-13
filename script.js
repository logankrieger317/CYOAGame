const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
  document.getElementById('gold').innerText = state.gold || 0
  document.getElementById('items').innerText = getItems()
  document. getElementById('sword').innerText = state.sword || 0
    document. getElementById('shield').innerText = state.shield || 0
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  console.log(textNode)
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
      
    }
  })
}


function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
//   document.getElementById('gold').innerText = state.gold || 0
//   document.getElementById('items').innerText = getItems()
}

function getItems() {
  let items = ''
  if (state.sword) items += 'Sword '
  if (state.shield) items += 'Shield '
  if (state.gold) items += 'Gold: ' + state.gold
  
  // Add more items here
  return items
}

const textNodes = [
  {
    id: 1,
    text: "You awaken to the gentle rustle of leaves and a sky painted with the soft hues of dawn. Around you, the forest breathes, alive with whispers of mist. In your hand, you find a note, aged and almost crumbling, that reads, 'The fate of the realm rests upon your shoulders, Seeker. Choose your path wisely.' A small pouch of gold lies beside you, and paths diverge in the forest ahead.",
    options: [
      {
        text: "Gather the gold and head towards the sound of a distant waterfall to the north.",
        setState: { gold: 10 },
        nextText: 2
      },
      {
        text: "Leave the gold, feeling a pull towards the mysterious, glowing lights to the east.",
        nextText: 3
      },
      {
        text: "Stay a moment longer, searching the clearing for more clues about your past.",
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: "The melody of cascading water guides you through the dense foliage until you reach a breathtaking waterfall. A bridge crosses over the river ahead, but an old, seemingly wise fisherman blocks the way, guarding the passage with a discerning gaze.",
    options: [
      {
        text: "Approach the fisherman and offer some gold for passage.",
        requiredState: (currentState) => currentState.gold >= 10,
        setState: { gold: 0, fishermanFriend: true },
        nextText: 5
      },
      {
        text: "Attempt to sneak past the fisherman while he's distracted.",
        nextText: 6
      },
      {
        text: "Engage the fisherman in conversation, seeking wisdom.",
        nextText: 7
      }
    ]
  },
  {
    id: 3,
    text: "You follow the ethereal glow eastward, drawn by its mystical allure. The lights lead you to a clearing, where a circle of ancient stones pulsates with magical energy. At the center, a cloaked figure awaits.",
    options: [
      {
        text: "Approach the figure and introduce yourself.",
        nextText: 8
      },
      {
        text: "Observe from a distance, trying to discern their intentions.",
        nextText: 9
      },
      {
        text: "Circle around the clearing, searching for anything amiss.",
        nextText: 10
      }
    ]
  },
  {
    id: 4,
    text: "You scour the clearing carefully, discovering a weathered map tucked beneath a stone. The map features unknown territories and a marked spot labeled 'Sanctuary of the Forgotten.' Your heart pounds with curiosity and an unexplained sense of purpose.",
    options: [
      {
        text: "Take the map and set out towards the Sanctuary of the Forgotten.",
        setState: { map: true },
        nextText: 11
      },
      {
        text: "Ignore the map, feeling overwhelmed, and head in a random direction.",
        nextText: 12
      },
      {
        text: "Return to the forest path, map in hand, contemplating your next move.",
        setState: { map: true },
        nextText: 13
      },
      // Continuing from the previous textNodes array...
{
  id: 5,
  text: "The fisherman, recognizing the sincerity in your offer, gladly accepts your gold. He shares tales of the river's spirit and the secrets of the forest. With a newfound respect, he steps aside, allowing you to cross the bridge.",
  options: [
    {
      text: "Thank the fisherman and cross the bridge.",
      nextText: 14
    },
    {
      text: "Ask the fisherman if he knows any safe paths forward.",
      nextText: 15
    }
  ]
},
{
  id: 6,
  text: "As you attempt to sneak by, the fisherman's keen eyes catch you. He chuckles, not out of malice but with a sort of warm amusement. 'The forest tests us all,' he says, offering you passage for a small task instead.",
  options: [
    {
      text: "Accept his task.",
      nextText: 16
    },
    {
      text: "Politely decline and choose another path.",
      nextText: 17
    }
  ]
},
{
  id: 7,
  text: "Engaging in conversation, you find the fisherman's wisdom profound, touching on the cycles of nature and the balance of the forest. He offers you a choice of his blessings for your journey.",
  options: [
    {
      text: "Request a blessing of strength.",
      setState: { strength: true },
      nextText: 18
    },
    {
      text: "Request a blessing of wisdom.",
      setState: { wisdom: true },
      nextText: 18
    }
  ]
},
{
  id: 8,
  text: "The figure lowers their hood, revealing an ancient elf who has been expecting you. 'Seeker, your journey is pivotal to the realm's fate,' they say, offering a gift to aid your quest.",
  options: [
    {
      text: "Accept the gift of foresight.",
      setState: { foresight: true },
      nextText: 19
    },
    {
      text: "Politely decline, trusting in your own abilities.",
      nextText: 20
    }
  ]
},
{
  id: 9,
  text: "From a distance, you observe the figure conducting a ritual. Suddenly aware of your presence, they invite you closer, promising no harm and offering knowledge.",
  options: [
    {
      text: "Approach cautiously and listen.",
      nextText: 21
    },
    {
      text: "Keep your distance, preferring to watch.",
      nextText: 22
    }
  ]
},
{
  id: 10,
  text: "Circling the clearing, you find an ancient tome half-buried under the leaves. The figure notices your discovery and nods approvingly, indicating that the tome is meant for you.",
  options: [
    {
      text: "Thank the figure and study the tome.",
      setState: { tome: true },
      nextText: 23
    },
    {
      text: "Leave the tome, feeling uneasy about its origins.",
      nextText: 24
    }
  ]
},

{
  id: 14,
  text: "As you cross the bridge, the sound of the water below soothes your weary spirit. The path forward leads you into a dense part of the forest, where the trees seem to whisper secrets of the land.",
  options: [
    {
      text: "Listen to the whispers for guidance.",
      nextText: 25
    },
    {
      text: "Ignore the whispers, focusing on the path ahead.",
      nextText: 26
    }
  ]
},
{
  id: 15,
  text: "The fisherman points you towards a hidden trail, promising a safer journey. 'Beware the guardians of the path,' he warns as you set off.",
  options: [
    {
      text: "Heed the fisherman's warning and prepare for encounters.",
      nextText: 27
    },
    {
      text: "Thank the fisherman and proceed with caution.",
      nextText: 28
    }
  ]
},
{
  id: 16,
  text: "'Retrieve a lost gem from the caves beyond the river,' the fisherman tasks you. 'It holds the essence of the water's spirit.'",
  options: [
    {
      text: "Accept the quest and head towards the caves.",
      nextText: 29
    },
    {
      text: "Decide the task is too perilous and reconsider your options.",
      nextText: 17
    }
  ]
},
{
  id: 17,
  text: "Choosing another path, you find yourself at the edge of a serene lake. The reflection of the moon on its surface reveals something gleaming at the bottom.",
  options: [
    {
      text: "Investigate the gleaming object.",
      nextText: 30
    },
    {
      text: "Continue your journey, leaving the lake behind.",
      nextText: 31
    }
  ]
},
{
  id: 18,
  text: "Armed with the fisherman's blessing, you feel a surge of confidence. The forest seems less daunting, and you notice paths that were hidden before.",
  options: [
    {
      text: "Explore a newly revealed path that seems to glow faintly.",
      nextText: 32
    },
    {
      text: "Stick to the main path, wary of the unknown.",
      nextText: 33
    }
  ]
},
{
  id: 19,
  text: "With the gift of foresight, visions of potential futures flash before your eyes. You see danger, but also hope. The path forward is perilous, yet there are allies to be found.",
  options: [
    {
      text: "Embrace the visions and proceed with newfound insight.",
      nextText: 34
    },
    {
      text: "Shake off the visions, determined to carve your own path.",
      nextText: 35
    }
  ]
},
{
  id: 20,
  text: "Declining the figure's gift, you rely on your instincts and experience. There's strength in self-reliance, and you feel prepared for the challenges ahead.",
  options: [
    {
      text: "Continue on the path, alert to any dangers.",
      nextText: 36
    },
    {
      text: "Seek out the source of a distant melody that beckons you.",
      nextText: 37
    }
  ]
}
// Continue adding more text nodes following this pattern...

// More text nodes to be added following this pattern...

    ]
  }

];
startGame();