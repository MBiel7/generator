var card = document.querySelector('.card');
var container = document.querySelector('.container');

var title = document.querySelector('.title')
var paint = document.querySelector('.paint img')
var description = document.querySelector('.info h3')
var circle = document.querySelector('.circle')

container.addEventListener("mousemove", e =>{
    var xAxis = (window.innerWidth/2 - e.pageX)/(101-{xAxisSensitivity});
    var yAxis = (window.innerHeight/2 - e.pageY)/(101-{yAxisSensitivity});
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
})
//najechanie na kontener
container.addEventListener("mouseenter", e =>{
    card.style.transition = `all 0.1s ease`;

    title.style.transform = "translateZ(150px)";
    //paint.style.transform = "translateZ(200px) rotateZ(45deg)";
    //paint.style.filter = "grayscale(0%)";
    {mouseEnterColor}
    description.style.transform = "translateZ(125px)";
    circle.style.background = "{color}";
    {mouseEnterPicture}
})
//wyjscie z kontenera
container.addEventListener("mouseleave", e =>{
    card.style.transition = `all 0.5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = "translateZ(0px)";
    //paint.style.transform = "translateZ(0px) rotateZ(0deg)";
    //paint.style.filter = "grayscale(100%)";
    {mouseLeaveColor}
    description.style.transform = "translateZ(0px)";
    circle.style.background = "white";
    {mouseLeavePicture}

}) 