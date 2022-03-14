// const colors = ["green","red","rgba(133,122,200)","#f15025"];
let letters = "0123456789ABCDEF";
let hexCode = '#';
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = hexCode; // get random number.
    color.innerHTML = hexCode //to pass the color code to span element.
    console.log(hexCode);
    return;
})


function getRandomNumber(){ //creates random number 
    hexCode = "#";
    for(let i = 0; i < 6; i++){
        hexCode = hexCode + letters[(Math.floor(Math.random() * 16))];
    }
}