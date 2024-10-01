class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  // java header grudado lindo

  // window.onscroll = function() {myFunction()};

  // var header = document.getElementById("myHeader");
  // var sticky = header.offsetTop;
  
  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }


  // When the user scrolls the page, execute myFunction

window.onscroll = function() {myFunction()};


// Get the header

var header = document.getElementById("myHeader");


// Get the offset position of the navbar

var sticky = header.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {

  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");

  } else {

    header.classList.remove("sticky");

  }

}