//document.body.style.backgroundImage = "url('../images/AdobeBackground.jpeg')"

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
     guideDiv.style.display = 'none'
     restartGame()
     loseCard.style.display = 'none'
     winCard.style.display = 'none'
    in2Seconds()
    in6Seconds()

    //the logic to let the player lose has to invoked again after the time has gone by
    await sleep(22000)
    if (score.points < 10){
        restartGame()
        playerLost()
               
    }
   
})

const winCard = document.getElementById('winCard')
const loseCard = document.getElementById('loseCard')

//trying to add a way for player to lose
 function playerLost(){
    loseCard.style.display = 'block'
    guideDiv.style.display = 'block'
    removeImages()
    //removeImages()
}
 function playerWon(){
    winCard.style.display = 'block'
    guideDiv.style.display = 'block'

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
   
   asteroidImg.style.position= 'fixed';
   asteroidImg.style.left = getX() + 'vw';
   asteroidImg.style.bottom = getY() + 'vh'
    

    document.getElementById('root').appendChild(asteroidImg)
    
    //event listener for asteroids
    asteroidImg.addEventListener('click', async function(){
        // let explosion = new Audio('sounds/fastExplosion.wav')
        // explosion.play()
        playSound()
        asteroidImg.remove()
        //asteroidImg.style.display = 'none'
        score.points++
        console.log(score)
      
        //here I am creating a way for the player to win the game and reset the score to 0 
           
        if (score.points === 10){
           playerWon()
        }
    })

}

//a helper function to generate asteroids in random locations
async function in2Seconds(){
    await sleep(2000)
    //for loop to invoke function multiple times
    for (var i = 0; i < 5; i++){
        generateAsteroid(getX(), getY())
    }
    
}

async function in6Seconds(){
    await sleep(4000)
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
for (var i = 0; i < l; i++){
    images[0].parentNode.removeChild(images[0])
}
}


//function to play sound everytime we click on meteor
let playSound = () => new Audio('sounds/fastExplosion.wav').play()