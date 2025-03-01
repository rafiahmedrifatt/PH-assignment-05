function getNumberByID(id) {
  const number = document.getElementById(id).innerText;
  const convertedNum = parseInt(number);
  return convertedNum;
}

function mainWork(id) {
  if (confirm("Board Loaded Successfully")) {
    const navNumber = getNumberByID("navNumber");
    document.getElementById("navNumber").innerText = navNumber + 1;
    const taskNumber = getNumberByID("taskNumber");
    document.getElementById("taskNumber").innerText = taskNumber - 1;
    document.getElementById(id).classList.add("btn-disabled");
  } else {
    alert("finish it ASAP!");
  }
  if (parseInt(document.getElementById("taskNumber").innerText) === 0) {
    alert("yooo you have done it");
  }
}

function activities(event) {
  const activity = document.getElementById("activities");
  const pTag = document.createElement("p");
  const date = new Date();
  let hours = date.getHours();
  let ampm = 'am'
  if (hours >= 12) {
    ampm = 'pm'
    newHours = hours % 12
  } else {
    ampm = 'am'
    newHours = hours
  }
  pTag.style.textAlign = 'left'
  pTag.style.padding = '10px'
  pTag.style.marginBottom = '20px'
  pTag.style.backgroundColor = '#F4F7FF'
  pTag.style.marginInline = '5px'
  pTag.style.borderRadius = '10px'
  pTag.innerHTML = `you have successfully done '${event.target.parentElement.parentElement.parentElement.children[1].innerText
    }' at ${newHours}:${date.getMinutes()}:${date.getSeconds()}${ampm}`;
  activity.appendChild(pTag);
}
