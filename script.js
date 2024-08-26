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