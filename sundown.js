// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
var elemC = document.querySelector("#elem-container");
var fixedC = document.querySelector("#fixed-box")
elemC.addEventListener("mouseenter",function(){
    fixedC.style.opacity = 1
})

elemC.addEventListener("mouseleave",function(){
    fixedC.style.opacity = 0
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixedC.style.backgroundImage = `url(${image})`
    })
})
var chotu = document.querySelector(".chotu")
var swipper = document.querySelector(".swiper")
swipper.addEventListener("mousemove",function(dets){
   chotu.style.left = dets.x + "px"
   chotu.style.top = dets.y + "px"
})
var loader = document.querySelector("#loader")
setTimeout(function(){
   loader.style.top = '-100%'
},3500)