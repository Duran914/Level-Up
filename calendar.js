/*********************************
 JS FOR BOOKING CALENDAR
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


let currentDate = getMonthDays(currentYear, currentMonth);

let checkInDateInput = document.querySelector('#checkIn');

checkInDateInput.addEventListener("focus", (e) => {
    console.log("enter a date");
    console.log(typeof(currentDate));
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
    let parentEl = document.querySelector('.card').firstElementChild;
    parentEl.appendChild(calenderBox, parentEl);
    calenderBox.innerHTML = `<div class="month">      
    <ul>
      <li class="prev">&#10094;</li>
      <li class="next">&#10095;</li>
      <li>August<br><span class="monthHeader" style="font-size:18px">2017</span>
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
    if ('.clearX') {
      document.querySelector('.clearX').remove(); 
    }
  } catch (error) {
    }
});

/*********************************
  SELECT CHECK IN DATE AND INJECT
  INTO CHECK-IN FORM INPUT FIELD
/********************************* */
function selectedCheckInDate(event){
  console.log(event.target.innerHTML);
  document.querySelector('.calendar-box').remove();
  checkInDateInput.value = `7/${event.target.innerHTML}/18`;
  let clearFieldX = document.createElement('span');
  let parentEl = document.querySelector('#check-in');
  clearFieldX.classList = 'clearX';
  parentEl.appendChild(clearFieldX, parentEl);
  clearFieldX.innerHTML = '<i class="fa fa-times-circle" onclick=clearDate() aria-hidden="true"></i>';
}

/*********************************
 CLEAR SELECTED CHECK-IN DATE
/********************************* */
function clearDate(){
  document.querySelector('.clearX').remove(); 
  checkInDateInput.value = 'MM/DD/YY';
}

