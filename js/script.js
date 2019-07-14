let typedText = document.querySelector('.introduction-box h2');

window.addEventListener('load', () => {
  
  typedText.classList.add('anim-typewriter');
  setTimeout(() => {
    introduction.classList.add('introduction-shadow');
  }, 3600);

});


var bgImage= document.querySelector(".header, .header1");

window.addEventListener("scroll", function() {

   var scrolledHeight= window.pageYOffset,
                limit= bgImage.offsetTop+ bgImage.offsetHeight;
                
  if(scrolledHeight > bgImage.offsetTop && scrolledHeight <= limit) {
    bgImage.style.backgroundPositionY=  (scrolledHeight - bgImage.offsetTop) /30+ "px";
 
    } else {
     bgImage.style.backgroundPositionY=  "0";
    }
     });


const menuIcon = document.querySelector('.nav-icon');
const menuLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const introduction = document.querySelector('.introduction-box');
const arrow = document.querySelector('.arrow-box');

let toggleMenu = () => {
  introduction.classList.toggle('hide');
  // arrow.classList.toggle('hide');
  menuIcon.classList.toggle('open');
  menuLinks.classList.toggle('show-links');
  nav.classList.toggle('nav-collapse');
};

menuIcon.addEventListener('click', toggleMenu);
menuLinks.addEventListener('click', toggleMenu);





//SLIDER ***********************************************************

// var prev = document.querySelectorAll('buttons,.prev')[0];

// var next = document.querySelectorAll('buttons,.next')[0];
// var list = document.querySelectorAll('.opinionText');

// console.log(list)
// var index = 0;

// list[index].classList.add('visible');

// prev.addEventListener('click',function(){
//     list[index].classList.remove('visible');
//     index -= 1;
//     if (index<0){
//         index=list.length - 1;
//     }
//     list[index].classList.add('visible');
// });

// next.addEventListener('click',function(){
//     list[index].classList.remove('visible');
//     index += 1;
//     if (index >= list.length){
//         index=0;
//     }
//     list[index].classList.add('visible');
// });



// var number = 0;
// animation();

// function animation(){
//     var i;
//     var x = $('.opinionText');
//     console.log(x);

//     for(i=0; i<x.length;i++){
//         x[i].style.display = 'none';

//     }
//     number++;
//     if(number>x.length){
//         number=1;
//     }
//     x[number-1].style.display = 'block';
//     setTimeout(animation, 5000);
// }
// (function () {
//   new Slider("#slider .slide").options({
//       prev: "#slider nav button.arrow-prev",
//       next: "#slider nav button.arrow-next",
//       nav: "#slider nav.dots span",
//       animation: "fade"
//   }).init();
// })();

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
