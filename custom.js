const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// banner section

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 50,
        speed: 1000,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    })

});


const handleDropdownClicked = (event) => {
    event.stopPropagation();
    const dropdownMenu = document.getElementById("dropdown-menu");
    toggleDropdownMenu(!dropdownMenu?.classList?.contains("open"));
  };
  
  const handleMenuLabelClicked = (label) => {
    const navigationMenu = document.getElementById("navigation-menu");
    const mainMenu = document.getElementById("main-menu");
    const secondaryMenuLabels = document.getElementsByClassName("secondary-menu");
    if (label) {
      for (let l of secondaryMenuLabels) {
        l.classList.remove("open");
      }
      const secondaryMenu = document.getElementById(label);
      secondaryMenu.classList.add("open");
      navigationMenu.style.height = secondaryMenu.clientHeight + "px";
    } else {
      navigationMenu.style.height = "168px";
    }
    mainMenu.classList.toggle("open");
  };
  
  const toggleDropdownMenu = () => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("open");
    const dropdownIcon = document.getElementById("dropdown-icon");
    dropdownIcon.innerText = dropdownMenu.classList.contains("open")
      ? "close"
      : "expand_more";
  };
  