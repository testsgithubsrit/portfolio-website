   var typed = new Typed('#element', {
    strings: ['front end', 'web developer.'],
    typeSpeed: 70,
  });
  let currentSlide = 0;
  function showSlide(index){
    const slides =document.querySelectorAll('.slide');
    if(index >= slides.length){
      currentSlide = 0;
    }
    else if (index < 0){
currentSlide = slides.length - 1;
    }
    else{
      currentSlide=index;
    }
    const offset = - currentSlide*100;
    document.querySelector('.slides').style.transform=
    'translateX(${offset}%)';

  }
  function moveSlide(step) {
    showSlide(currentSlide + step);

  }document.addEventListener('DOMContentLoaded',()=>{
    showSlide(currentSlide);
  });
  