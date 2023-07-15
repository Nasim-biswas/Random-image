const imageContainerEl = document.querySelector(".image-container");
const button = document.querySelector(".btn");

button.addEventListener("click",() =>
{
     imageNum = 8;
    moreNewImages(); 
});

function moreNewImages() {
    for(let index = 0;index < imageNum; index++){
 const newImg = document.createElement("img");
    newImg.
    src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainerEl.appendChild(newImg);
    }
}