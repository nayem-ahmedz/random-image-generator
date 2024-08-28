const imgCont = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener('click', loadMore);

function loadMore(){
    for(let i=0; i<6; i++){
        let newImg = document.createElement('img');
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`;
        imgCont.appendChild(newImg);
    }
}

// button ripple effect
button.addEventListener('mouseover', (event)=>{
    //console.log(event.pageX - button.offsetLeft);
    //pageX = from page on x axis far left and offsetLeft means from left side element distance
    let x = event.pageX - button.offsetLeft;
    let y = event.pageY - button.offsetTop;
    button.style.setProperty('--xPos', x + 'px');
    button.style.setProperty('--yPos', y + 'px');
});