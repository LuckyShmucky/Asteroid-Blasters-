//creating random numbers for X and Y coordinates
 function getX(){
    return Math.floor(Math.random() * 85) + 10;
    //console.log(x) 
    }

 function getY(){
    return Math.floor(Math.random() * 85) + 10;
    // console.log(y) 
    }
    
    //sleep function
    function sleep(time){
        return new Promise(resolve =>{
            setTimeout(resolve, time)
        })
    }
    
    // function gameTime(time){
    //     return new Promise (resolve =>{
    //         setTimeout(resolve, time)
    //     })
    // }

    //creates a score to allow player to win or lose the game 
let score = {
    points: 0
}

// let asteroid ={
//         create: document.createElement('img'),
//         class: 'asteroid',
//         source: 'images/smallAsteroid.png',

        
// }
    
const startButton = document.getElementById('start')
const guideDiv = document.getElementById('guide')
startButton.addEventListener('click', async function(){
     guideDiv.style.display = 'none'
     restartGame()
    in2Seconds()
    in6Seconds()

    //the logic to let the player lose has to invoked again after the time has gone by
    await sleep(6000)
    if (score.points < 2){
        playerLost()
        //guideDiv.style.display = 'block'
        
    }
   
})

const winCard = document.getElementById('winCard')
const loseCard = document.getElementById('loseCard')

//trying to add a way for player to lose
 function playerLost(){
    loseCard.style.display = 'block'
    guideDiv.style.display = 'block'
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
    asteroidImg.src = 'images/smallAsteroid.png';
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
        asteroidImg.remove()
        //asteroidImg.style.display = 'none'
        score.points++
        console.log(score)
      
        //here I am creating a way for the player to win the game and reset the score to 0 
        if (score.points === 2){
            playerWon()
            //guideDiv.style.display = 'block'
            
        } else{
        // await sleep(6000)
        // playerLost() 
    }
    
})

}

 
// async function timeLimit(){
//     await sleep(1000)
//     loseCard.style.display = 'block'
// }



//a helper function to generate asteroids in random locations
async function in2Seconds(){
    await sleep(2000)
    //for loop to invoke function multiple times
    for (var i = 0; i < 1; i++){
        generateAsteroid(getX(), getY())
    }
    
}

async function in6Seconds(){
    await sleep(4000)
    for (var i = 0; i < 1; i++){
        generateAsteroid(getX(), getY())
    }
    
}



//resets score for now
function restartGame(){
    score.points = 0
    
}


