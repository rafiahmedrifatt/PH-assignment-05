document.getElementById("shopease").addEventListener("click", function (event) {
  mainWork("shopease");
  activities(event);
});

document.getElementById("cloudsync").addEventListener("click", function (event) {
  mainWork("cloudsync");
  activities(event);
});

document.getElementById("swiftpay").addEventListener("click", function (event) {
  mainWork("swiftpay");
  activities(event);
});

document.getElementById("meta").addEventListener("click", function (event) {
  mainWork("meta");
  activities(event);
});

document.getElementById("googlellc").addEventListener("click", function (event) {
  mainWork("googlellc");
  activities(event);
});

document.getElementById("glassdoor").addEventListener("click", function (event) {
  mainWork("glassdoor");
  activities(event)
});


const months = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];
const days = [
  'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
]
let date = new Date()
document.getElementById('calender').innerHTML = `<p id="completed">${days[date.getDay()]}</p> <h5>${months[date.getMonth()]}, ${date.getFullYear()}</h5>`


document.getElementById('clearHistory').addEventListener('click', function (event) {
  let element = document.getElementById('activities')
  element.innerHTML = ''
})

document.getElementById('bigBtn').addEventListener('click', function () {
  window.location.assign('/discover.html')
})