// Move Horizontally
window.addEventListener("load", (event) => {
    let distance = 0
    let direction = 1
    let timer = setInterval(()=>{
        cloud1.style.left = distance + "px"
        cloud2.style.left = 750 - distance + "px"
        cloud3.style.right = 300 - distance + "px"
        distance = distance + 0.05 * direction
        if (distance >= 20){
            direction = -1
        } else if (distance <= 0){
            direction = 1
        }
    })
})

// Rotation
window.addEventListener("load", (event) => {
    let angle = 1
    let timer = setInterval(()=>{
        rock1.style.transform = 'rotate('+ angle + 'deg)'
        rock2.style.transform = 'rotate('+ angle + 'deg)'
        rock3.style.transform = 'rotate('+ angle + 'deg)'
        rock5.style.transform = 'rotate('+ angle + 'deg)'
        angle += 0.1
        if(angle >= 360) angle = 0;
    })
})

