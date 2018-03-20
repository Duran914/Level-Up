// Ui variables

      // Navbar variables
const menuBars = document.querySelector('.menuBars');
      navbarUl = document.querySelector('.navbar-list');
      navbarLinks = document.querySelectorAll('.navbar-list-item');
      // Availiability form variables
      availabilityForm = document.querySelector('#availability-form');
      availabilityFormDestination = document.querySelector('#destination');
      availabilityFormCheckIn = document.querySelector('#checkIn');
      availabilityFormCheckOut = document.querySelector('#checkOut');
      availabilityFormAdultsNum = document.querySelector('#adults');
      availabilityFormChildrenNum = document.querySelector('#children');
      availabilityFormRoom = document.querySelector('#room');
      // Sign up form variables
      contactUsForm = document.querySelector('#contact-us-form');
      contactUsName = document.querySelector('#name');
      contactUsEmail = document.querySelector('#email');
      contactUsSubject = document.querySelector('#subject');
      contactUsTextarea = document.querySelector('#textarea');
      contactUsSubmit = document.querySelector('#submit-form');
      

// Event listeners
menuBars.addEventListener('click', openSideNav);
availabilityForm.addEventListener('submit', checkAvailability);
contactUsForm.addEventListener('submit', submitContactForm);

// Room availability validation
function checkAvailability(e){
    if (availabilityFormDestination.value == "") {

    }
    if (availabilityFormCheckIn.value == "") {
        
    }
    if (availabilityFormCheckOut.value == "") {
        
    }
    if (availabilityFormAdultsNum.value == "") {
        
    }
    if (availabilityFormChildrenNum.value == "") {
        
    }
    if (availabilityFormRoom.value == "") {
        
    }
    
    e.preventDefault();
}

// Contact form validation
function submitContactForm(e){
    if (contactUsName.value == "") {

    }
    if (contactUsEmail.value == "") {
        
    }
    if (contactUsSubject.value == "") {
        
    }
    if (contactUsTextarea.value == "") {
    }
    e.preventDefault();
    console.log("contact form test");
    
}


// Slide out navbar function
function openSideNav() {
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
         document.body.style.marginRight = "0px";
    }
}

