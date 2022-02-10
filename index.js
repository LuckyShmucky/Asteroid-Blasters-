
 function getX(){
    return Math.floor(Math.random() * 90) + 5;
    //console.log(x) 
    }

 function getY(){
    return Math.floor(Math.random() * 90) + 5;
    // console.log(y) 
    }
    
    



//this function is creating the asteroid element and recieves its positioning
//on the screen via two arguments: left, bottom
function generateAsteroid(left, bottom){
   let asteroidImg = document.createElement('img');
   asteroidImg.src = 'images/smallAsteroid.png';
   asteroidImg.style.position= 'fixed';
   asteroidImg.style.left = left + 'vw';
   asteroidImg.style.bottom = bottom + 'vh'
   document.getElementById('root').appendChild(asteroidImg)
}

//sleep function
function sleep(time){
    return new Promise(resolve =>{
        setTimeout(resolve, time)
    })
}

//a helper function to generate asteroids in random locations
async function asteroidField(){
    await sleep(2000)
    generateAsteroid(getX(), getY())
    console.log('hello')
}
//same as above trying to debug
async function anotherField(){
    await sleep(500)
    generateAsteroid(getX(), getY())
    console.log('world')
}

asteroidField()
anotherField()