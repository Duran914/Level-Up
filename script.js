// Ui variables
const menuBars = document.querySelector('.menuBars');
      navbarUl = document.querySelector('.navbar-list');
      navbarLinks = document.querySelectorAll('.navbar-list-item');
      

// Event listeners
menuBars.addEventListener('click', openSideNav);


// Slide out navbar function
function openSideNav() {
    // console.log("test");
    if (navbarUl.className == "navbar-list") {
        navbarUl.classList += " sidebar-nav";
        navbarLinks.forEach(function(link){
            link.classList += " sidebar-nav-a";
        });
         menuBars.classList += " side-bar-nav-menuBars";
         menuBars.innerHTML = "&#120;";
    }
    else{
        navbarUl.className == "navbar-list"
        navbarUl.classList = "navbar-list";
        navbarLinks.forEach(function(link){
            link.classList = "navbar-list-item";
        });
         menuBars.classList = "menuBars";
         menuBars.innerHTML = "&#9776;";
    }
}
