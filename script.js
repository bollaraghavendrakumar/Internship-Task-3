const images=[
"images/image1.jpg",
"images/image2.jpg",
"images/image3.jpg",
"images/image4.jpg"
];

let current=0;

const slide=document.getElementById("slide");

document.getElementById("next").onclick=function(){

current++;

if(current==images.length){
current=0;
}

slide.src=images[current];

}

document.getElementById("prev").onclick=function(){

current--;

if(current<0){
current=images.length-1;
}

slide.src=images[current];

}

setInterval(function(){

current++;

if(current==images.length){
current=0;
}

slide.src=images[current];

},3000);