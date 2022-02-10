
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
function generateAsteroid(){
   let asteroidImg = document.createElement('img');
   asteroidImg.classList.add('asteroid');
   asteroidImg.src = 'images/smallAsteroid.png';
   asteroidImg.style.position= 'fixed';
   asteroidImg.style.left = getX() + 'vw';
   asteroidImg.style.bottom = getY() + 'vh'
   document.getElementById('root').appendChild(asteroidImg)
   
   //event listener for asteroids
   asteroidImg.addEventListener('click', function(){
       asteroidImg.style.display = 'none'
   })
}

//sleep function
function sleep(time){
    return new Promise(resolve =>{
        setTimeout(resolve, time)
    })
}

//a helper function to generate asteroids in random locations
async function in2Seconds(){
    await sleep(2000)
    generateAsteroid(getX(), getY())
    console.log('hello')
}
//same as above trying to debug
async function in6Seconds(){
    await sleep(6000)
    generateAsteroid(getX(), getY())
    console.log('world')
}

in2Seconds()
in6Seconds()




