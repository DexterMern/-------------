//about left page
const titleTag = document.title;
window.addEventListener("blur", function () {
  document.title = "رفتی که😢😢😢";
});
window.addEventListener("focus", function () {
  document.title = titleTag;
});
// درباره تایمر برای درصد
let $ = document;
let hourElement = $.getElementById("hour");
let minutesElement = $.getElementById("minutes");
let secondElement = $.getElementById("second");

// زمان اولیه
let countdownTime = {
  hours: 2,
  minutes: 30,
  seconds: 0,
};

// تابع برای بروزرسانی تایمر
function updateTimer() {
  let totalSeconds =
    countdownTime.hours * 3600 +
    countdownTime.minutes * 60 +
    countdownTime.seconds;

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  // بروزرسانی عناصر HTML
  hourElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondElement.innerHTML = seconds;

  if (totalSeconds > 0) {
    totalSeconds--;
    countdownTime.hours = Math.floor(totalSeconds / 3600);
    countdownTime.minutes = Math.floor((totalSeconds % 3600) / 60);
    countdownTime.seconds = totalSeconds % 60;
  }
}

// بروزرسانی هر ثانیه
setInterval(updateTimer, 1000);
//ضاهر و پنهان شدن زیرمنو دسته بندی
let ToggleSubMenu = $.querySelector(".category-menue");
let SubMenu = $.querySelector(".container-submenu-category");
ToggleSubMenu.addEventListener("click", () => {
  if (SubMenu.classList.contains("toggle_sub_menu")) {
    SubMenu.classList.remove("toggle_sub_menu");
  } else {
    SubMenu.classList.add("toggle_sub_menu");
  }
  console.log(SubMenu.classList.contains("toggle_sub_menu"));
});

//ظاهر و پنهان شدن مدال شهر
let ModalCity = $.querySelector(".modal-center-city");
let ToggleModalCity = $.querySelector(".bottom-left-menue");
let section1 = $.querySelector(".header");
let section2 = $.querySelector(".menue");
let DeleteBtnElem = $.querySelector(".delete-modal-city");

ToggleModalCity.addEventListener("click", (event) => {
  if (ModalCity.classList.contains("toggle-modal-city")) {
    ModalCity.classList.remove("toggle-modal-city");
    section1.style.filter = "blur(0px)";
    section2.style.filter = "blur(0px)";
  } else {
    ModalCity.classList.add("toggle-modal-city");
    section1.style.filter = "blur(10px)";
    section2.style.filter = "blur(10px)";
  }
});
$.body.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode == 27) {
    ModalCity.classList.remove("toggle-modal-city");
    section1.style.filter = "blur(0px)";
    section2.style.filter = "blur(0px)";
  }
});

DeleteBtnElem.addEventListener("click", () => {
  ModalCity.classList.remove("toggle-modal-city");
  section1.style.filter = "blur(0px)";
  section2.style.filter = "blur(0px)";
});
