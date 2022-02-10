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
    
let score = 0;

//this function is creating the asteroid element and recieves its positioning
//on the screen via two arguments: left, bottom
function generateAsteroid(){
    let asteroidImg = document.createElement('img');
    asteroidImg.classList.add('asteroid');
    asteroidImg.src = 'images/smallAsteroid.png';
    asteroidImg.style.position= 'fixed';
    asteroidImg.style.left = getX() + 'vw';
    asteroidImg.style.bottom = getY() + 'vh'
    //    asteroidImg.style.animationName = 'slidein'
    //    asteroidImg.style.animationDuration = '3s'
    //    asteroidImg.style.
    
    document.getElementById('root').appendChild(asteroidImg)
    
    //event listener for asteroids
    asteroidImg.addEventListener('click', function(){
        // let explosion = new Audio('sounds/fastExplosion.wav')
        // explosion.play()
        asteroidImg.style.display = 'none'
        score++
        console.log(score)
        if(score === 2){
            alert('You Win!')
        }else{console.log('L')}
})

}


//a helper function to generate asteroids in random locations
async function in2Seconds(){
    await sleep(2000)
    generateAsteroid(getX(), getY())
    
}
//same as above trying to debug
async function in6Seconds(){
    await sleep(6000)
    generateAsteroid(getX(), getY())
    
}

in2Seconds()
in6Seconds()




