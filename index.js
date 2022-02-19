//creating random numbers for X and Y coordinates
 function getX(){
    return Math.floor(Math.random() * 50) + 20;
    
    }

 function getY(){
    return Math.floor(Math.random() * 50) + 20;
     
    }
    
    //sleep function
    function sleep(time){
        return new Promise(resolve =>{
            setTimeout(resolve, time)
        })
    }

    //creates a score to allow player to win or lose the game 
let score = {
    points: 0
}

const startButton = document.getElementById('start')
const guideDiv = document.getElementById('guide')
startButton.addEventListener('click', async function(){
    playStart()
    restartGame()
     guideDiv.style.display = 'none'
     loseCard.style.display = 'none'
     winCard.style.display = 'none'
    in2Seconds()
    in6Seconds()
    result()

    //the logic to let the player lose has to invoked again after the time has gone by
    // await sleep(22000)
    // if (score.points < 10){
    //     restartGame()
        
    //     playerLost()
               
    // }
   
})

const winCard = document.getElementById('winCard')
const loseCard = document.getElementById('loseCard')

//trying to add a way for player to lose
 function playerLost(){
    loseCard.style.display = 'block'
    guideDiv.style.display = 'block'
    playLoserSound()
    removeImages()
}
 function playerWon(){
    winCard.style.display = 'block'
    guideDiv.style.display = 'block'
    playVictory()
 }

 //this function is creating the asteroid element and recieves its positioning
 //on the screen via two arguments: left, bottom
 function generateAsteroid(){
     
     let asteroidImg = document.createElement('img');
     asteroidImg.classList.add('asteroid');
    asteroidImg.src = 'images/purpleAsteroid.png';
    asteroidImg.style.position= 'fixed';
    asteroidImg.style.left = getX() + 'vw';
    asteroidImg.style.bottom = getY() + 'vh'
   document.getElementById('root').appendChild(asteroidImg)
    
    //event listener for asteroids
    asteroidImg.addEventListener('click', async function(){
     playSound()
        asteroidImg.remove()
        score.points++
        //console.log(score)
    })

}

async function result(){
    await sleep(22000)
    if(score.points === 10){
        playerWon()
    } else {
        playerLost()
    }
}


//a helper function to generate asteroids in random locations
async function in2Seconds(){
    await sleep(2000)
    //for loop to invoke function multiple times
    for (var i = 0; i < 5; i++){
        generateAsteroid(getX(), getY())
    }
    
}


//same as in 2 seconds by waits for 6 seconds
async function in6Seconds(){
    await sleep(6000)
    for (var i = 0; i < 5; i++){
        generateAsteroid(getX(), getY())
    }
    
}

//resets score 
function restartGame(){
    score.points = 0
    removeImages()
}

//remove images when needed
function removeImages(){
let images = document.getElementsByTagName('img')
let l = images.length;
//because there are multiple images in the DOM, we have to run this code in a 
//for loop to remove all elements (or iterations) from the array
for (var i = 0; i < l; i++){
    images[0].parentNode.removeChild(images[0])
}
}


//helper function to play sound everytime we click on meteor
function playSound(){
    new Audio('sounds/fastExplosion.wav').play()
}
 
function playStart(){
    new Audio('sounds/SpaceQuick.mp3').play()
}

function playLoserSound(){
    new Audio('sounds/playerLost.mp3').play()
}

function playVictory(){
    new Audio('sounds/winSound.wav').play()
}