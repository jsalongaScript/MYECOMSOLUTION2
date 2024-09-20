function openNav() {
  document.getElementById("navbar").style.left = "0";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navbar").style.left = "-250px";
  document.getElementById("main").style.marginLeft = "0";
}


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__icons", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__container a", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__container .solution h4", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // about container
  ScrollReveal().reveal(".about__container .about__image", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".about__container .about__image.image__1", {
    ...scrollRevealOption,
    origin: "right",
  });
  
  ScrollReveal().reveal(".about__content", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  // cast container
  ScrollReveal().reveal(".team__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // media container
  ScrollReveal().reveal(".c__card", {
    ...scrollRevealOption,
    interval: 500,
  });


  const counts = document.querySelectorAll('.count')
  const speed = 97
  
  counts.forEach((counter) => {
      function upDate(){
          const target = Number(counter.getAttribute('data-target'))
          const count = Number(counter.innerText)
          const inc = target / speed        
          if(count < target){
              counter.innerText = Math.floor(inc + count) 
              setTimeout(upDate, 15)
          }else{
              counter.innerText = target
          }
      }
      upDate()
  })