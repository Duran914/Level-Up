/*********************************
 JS FOR BOOKING SYSTEM
/********************************* */



function getMonthDays(y,m){
return new Date(y, m, 0).getDate();
} 

let currentMonth = new Date().getMonth() + 1; // insert into getMonthDay
let currentYear = new Date().getFullYear(); //  insert into getMonthDay
let currentDay = new Date().getDay() + 1; // day(1-7)
let currentDayInMonth = new Date().getDate(); // day in month
const allMonths = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];
let twoDigitDate =  currentYear.toString().slice(2);
let currentDate = getMonthDays(currentYear, currentMonth);

let checkInDateInput = document.querySelector('#checkIn');

checkInDateInput.addEventListener("focus", (e) => {
    console.log("enter a date");
    console.log(typeof(currentDate));
    console.log(allMonths[currentMonth - 1]);
    console.log(currentYear);
      
    // console.log(twoDigitDate);
  let daysInMonth = []
    for (let i = 1; i <= currentDate; i++) {
      if(i === currentDayInMonth){
        daysInMonth.push(`<li class="selectDay" onclick=selectedCheckInDate(event)><span class="active">${i}</span></li>`)
      }
      else{
      daysInMonth.push(`<li class="selectDay" onclick=selectedCheckInDate(event) >${i}</li>`);
      }
    }
   
    let calenderBox = document.createElement('div');
    calenderBox.className =  'calendar-box';
    calenderBox.innerHTML = 'Enter a date';
    let parentEl = document.querySelector('#check-in');
    parentEl.appendChild(calenderBox, parentEl);
    calenderBox.innerHTML = `<div class="month">      
    <ul>
      <li class="prevMonth" onclick=prevMonth()>&#10094;</li>
      <li class="nextMonth" onclick=nextMonth()>&#10095;</li>
      <li class="monthHeader" id="current-month">${allMonths[currentMonth - 1]}</li>
      <li style="font-size:18px">${currentYear}</li>
    </ul>
  </div>
  
  <ul class="weekdays">
    <li>Su</li>
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
  </ul>
  
  <ul class="days">  
      ${daysInMonth.join("  ")}
  </ul>`;

  try {
    if ('.clearXIn') {
      document.querySelector('.clearXIn').remove(); 
    }
  } catch (error) {
    }
});

let checkOutDateInput = document.querySelector('#checkOut');

checkOutDateInput.addEventListener("focus", (e) => {
    console.log("enter a date");
    console.log(typeof(currentDate));
  let daysInMonth = []
    for (let i = 1; i <= currentDate; i++) {
      if(i === currentDayInMonth){
        daysInMonth.push(`<li class="selectDay" onclick=selectedCheckOutDate(event)><span class="active">${i}</span></li>`)
      }
      else{
      daysInMonth.push(`<li class="selectDay" onclick=selectedCheckOutDate(event) >${i}</li>`);
      }
    }
   
    let calenderBox = document.createElement('div');
    calenderBox.className =  'calendar-box';
    calenderBox.innerHTML = 'Enter a date';
    let parentEl = document.querySelector('#check-out');
    parentEl.appendChild(calenderBox, parentEl);
    calenderBox.innerHTML = `<div class="month">      
    <ul>
      <li class="prev" id='prevMonth' onclick=prevMonth() >&#10094;</li>
      <li class="next" id="fwdMonth" onclick=nextMonth() >&#10095;</li>
      <li><br><span class="monthHeader" style="font-size:18px">2017</span>
      </li>
    </ul>
  </div>
  
  <ul class="weekdays">
    <li>Su</li>
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
  </ul>
  
  <ul class="days">  
      ${daysInMonth.join("  ")}
  </ul>`;

  try {
    if ('.clearXOut') {
      document.querySelector('.clearXOut').remove(); 
    }
  } catch (error) {
    }
});

/*********************************
  SELECT CHECK IN DATE AND INJECT
  INTO CHECK-IN FORM INPUT FIELD
/********************************* */
let checkInDate;
let checkOutDate;

function selectedCheckInDate(event){
  console.log(event.target);
  console.log(event.target.parentElement.parentElement.firstChild.privousSibling);
  document.querySelector('.calendar-box').remove();
  checkInDateInput.value = `7/${event.target.innerHTML}/${twoDigitDate}`;
  let clearFieldXIn = document.createElement('span');
  let parentEl = document.querySelector('#check-in');
  clearFieldXIn.classList = 'clearXIn';
  parentEl.appendChild(clearFieldXIn, parentEl);
  clearFieldXIn.innerHTML = '<i class="fa fa-times-circle" onclick=clearDate(event) aria-hidden="true"></i>';
  // checkInDateInput = event.target.innerHTML;
  document.querySelector('#checkOut').disabled = false;
}

function selectedCheckOutDate(event){
  console.log(event.target);
  document.querySelector('.calendar-box').remove();
  checkOutDateInput.value = `7/${event.target.innerHTML}/18`;
  let clearFieldXOut = document.createElement('span');
  let parentEl = document.querySelector('#check-out');
  clearFieldXOut.classList = 'clearXOut';
  parentEl.appendChild(clearFieldXOut, parentEl);
  clearFieldXOut.innerHTML = '<i class="fa fa-times-circle" onclick=clearDate(event) aria-hidden="true"></i>';
  // checkOutDateInput = event.target.innerHTML;
  // document.querySelector('#checkOut').disabled = false;
}



/*********************************
 Clear selected date X button
/********************************* */
function clearDate(event){
  event.target.parentElement.previousSibling.previousSibling.value = 'MM/DD/YY';  
  event.target.remove();
}

// function nextMonthArrow(){
//  let month =  document.querySelector('#current-month').innerHTML;
// //  console.log(month);
 
// //  console.log(allMonths);
//   for (let i = month; i <= allMonths.length; i++) {
//     const element = allMonths[i + 1];
//     console.log(element);
//   }
// }

/************************************
Foward and Back buttons for calendar 
*************************************/

function prevMonth(){
  currentMonth = currentMonth - 1
  document.querySelector('.monthHeader').innerHTML = allMonths[currentMonth]
  daysInPrevMonth = [];
  let newMonth = getMonthDays(currentYear, currentMonth);
    for (let i = 1; i <= newMonth; i++) {
      // daysInPrevMonth.push(i);
      if(i === currentDayInMonth){
        daysInPrevMonth.push(`<li class="selectDay" onclick=selectedCheckOutDate(event)><span class="active">${i}</span></li>`)
      }
      else{
        daysInPrevMonth.push(`<li class="selectDay" onclick=selectedCheckOutDate(event) >${i}</li>`);
      }
    }
  document.querySelector('.days').innerHTML = `<ul class="days">${daysInPrevMonth.join("  ")}</ul>`;
}

// foward button month
function nextMonth(){
  currentMonth = currentMonth + 1
  document.querySelector('.monthHeader').innerHTML = allMonths[currentMonth]
  let daysInFwdMonth = [];
  let newMonth = getMonthDays(currentYear, currentMonth);
    for (let i = 1; i <= newMonth; i++) {
      // daysInFwdMonth.push(i);
      if(i === currentDayInMonth){
        daysInFwdMonth.push(`<li class="selectDay" onclick=selectedCheckOutDate(event)><span class="active">${i}</span></li>`)
      }
      else{
        daysInFwdMonth.push(`<li class="selectDay" onclick=selectedCheckOutDate(event) >${i}</li>`);
      }
    }
    document.querySelector('.days').innerHTML = `<ul class="days">${daysInFwdMonth.join("  ")}</ul>`;
  }