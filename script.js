// Ui variables

      // Navbar variables
const menuBars = document.querySelector('.menuBars');
      navbarUl = document.querySelector('.navbar-list');
      navbarLinks = document.querySelectorAll('.navbar-list-item');
      // Availiability form variables
      availabilityForm = document.querySelector('#availiability-form');
      availabilityFormDestination = document.querySelector('#destination');
      availabilityFormCheckIn = document.querySelector('#checkIn');
      availabilityFormCheckOut = document.querySelector('#checkOut');
      availabilityFormAdultsNum = document.querySelector('select.adult');
      availabilityFormRoom = document.querySelector('select.room');
      
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
        availabilityFormDestination.style.border = "2px solid red";
        e.preventDefault();
    }
    if (availabilityFormCheckIn.value == "") {
        availabilityFormCheckIn.style.border = "2px solid red";
        e.preventDefault();
    }
    if (availabilityFormCheckOut.value == "") {
        availabilityFormCheckOut.style.border = "2px solid red";  
        e.preventDefault();
    }
    if (availabilityFormAdultsNum.value == "Adult") {
        availabilityFormAdultsNum.style.borderColor = "red";
        e.preventDefault();
    }
    if (availabilityFormRoom.value == "Room") {
        availabilityFormRoom.style.borderColor = "red";
        e.preventDefault();
    }

}

// basic Contact form validation
function submitContactForm(e){
    if (contactUsName.value == "" ) {
        document.querySelector('.errors.name').innerHTML = "&#187; Please enter your name";
         e.preventDefault();
    }
    if (contactUsEmail.value == "") {
        document.querySelector('.errors.email').innerHTML = "&#187; Please enter your email";
         e.preventDefault();
    }
    if (contactUsSubject.value == "" ) {
        document.querySelector('.errors.subject').innerHTML = "&#187; Please enter a subject";
         e.preventDefault();
    }
    if (contactUsTextarea.value == "" ) {
        document.querySelector('.errors.textarea').innerHTML = "&#187; Please enter a message";
         e.preventDefault();
    }
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

