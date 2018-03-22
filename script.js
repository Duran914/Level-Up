// Ui variables

      // Navbar variables
const menuBars = document.querySelector('.menuBars');
      navbarUl = document.querySelector('.navbar-list');
      navbarLinks = document.querySelectorAll('.navbar-list-item');
      // Availability form variables
      availabilityForm = document.querySelector('#availability-form');
      availabilityFormDestination = document.querySelector('#destination');
      availabilityFormCheckIn = document.querySelector('#checkIn');
      availabilityFormCheckOut = document.querySelector('#checkOut');
      availabilityFormGuests = document.querySelector('select.guest');
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
navbarUl.addEventListener('click', scrollTo);


function scrollTo(goto){
    let link = goto.target.innerHTML;

     if (link == 'HOME') {
        document.querySelector('.availability-form').scrollIntoView(
            {behavior: "smooth",
              block: "start"});
              closeSideNav();
     }
     else if (link === 'DESTINATIONS') {
        document.querySelector('.destinations').scrollIntoView(
            {behavior: "smooth",
              block: "start"});
              closeSideNav();
     }
     else if (link === 'STORIES') {
        document.querySelector('.c3p0').scrollIntoView(
            {behavior: "smooth",
              block: "start"});
              closeSideNav();
     }
     else if (link === 'CONTACT US') {
        document.querySelector('.contact-us').scrollIntoView(
            {behavior: "smooth",
              block: "start"});
              closeSideNav();
     }
}
// Room availability validation
function checkAvailability(e){
    let dateFormat =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})$/;

    if (availabilityFormDestination.value == "") {
        availabilityFormDestination.style.border = "1px solid red";
        e.preventDefault();
    }
    if (availabilityFormCheckIn.value == "" || dateFormat.test(availabilityFormCheckIn.value) == false) {
        availabilityFormCheckIn.style.border = "1px solid red";
        e.preventDefault();
    }
    if (availabilityFormCheckOut.value == "" || dateFormat.test(availabilityFormCheckOut.value == false)) {
        availabilityFormCheckOut.style.border = "1px solid red"; 
        e.preventDefault();
    }
    if (availabilityFormGuests.value == "Guests") {
        availabilityFormGuests.style.borderColor = "red";
        e.preventDefault();
    }
    if (availabilityFormRoom.value == "Rooms") {
        availabilityFormRoom.style.borderColor = "red";
        e.preventDefault();
    }

}

// Basic contact form validation
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

// Opens sidebar navbar
function openSideNav() {
    if (navbarUl.className == "navbar-list") {
        navbarUl.classList += " sidebar-nav";
        navbarLinks.forEach(function(link){
            link.classList += " sidebar-nav-a";
        });
         menuBars.classList += " side-bar-nav-menuBars";
         menuBars.innerHTML = "&#120;";
         document.body.style.width = "205px";
         document.body.style.marginRight = "205px";
         document.body.style.width = "100%";
         document.body.style.overflow = "hidden";
    }
    else{
        closeSideNav();
  }
}

// Closes side navbar 
function closeSideNav(){
    navbarUl.className == "navbar-list"
    navbarUl.classList = "navbar-list";
    navbarLinks.forEach(function(link){
        link.classList = "navbar-list-item";
    });
     menuBars.classList = "menuBars";
     menuBars.innerHTML = "&#9776;";
     document.body.style.overflow = "visible";
}