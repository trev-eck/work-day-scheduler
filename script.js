// at the time naming these buttons to the corresponding time made sense but now im extremely annoyed because i cant loop over them.......
var btn1 = $("#btn1");
var btn2 = $("#btn2");
var btn3 = $("#btn3");
var btn4 = $("#btn4");
var btn5 = $("#btn5");
var btn9 = $("#btn9");
var btn10 = $("#btn10");
var btn11 = $("#btn11");
var btn12 = $("#btn12");
var text1 = $("#text1");
var text2 = $("#text2");
var text3 = $("#text3");
var text4 = $("#text4");
var text5 = $("#text5");
var text9 = $("#text9");
var text10 = $("#text10");
var text11 = $("#text11");
var text12 = $("#text12");
var textArea = $(".textarea");
var storedText = ["", "", "", "", "", "", "", "", ""];

//function to provide current date and time to the jumbotron
function update() {
  $("#currentDay").html(moment().format("MMM Do, YYYY [at] hh:mm:ss a"));
}

//we need the text areas to show any saved events in local storage if the page gets refreshed
function updateTextAreas() {
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText != null) {
      storedText = savedText;
  }
  text1.val(storedText[4]);
  text2.val(storedText[5]);
  text3.val(storedText[6]);
  text4.val(storedText[7]);
  text5.val(storedText[8]);
  text9.val(storedText[0]);
  text10.val(storedText[1]);
  text11.val(storedText[2]);
  text12.val(storedText[3]);
}

//we need a function to change the backgrounds of the textareas depending on the time of day. This function is deprecated, see function below.
function changeBackground() {
  var currentTime = moment().format("H");
  console.log(currentTime);
  if (currentTime < 9) {
    text1.addClass("future");
    text2.addClass("future");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("future");
    text10.addClass("future");
    text11.addClass("future");
    text12.addClass("future");
  } else if (currentTime == 9) {
    text1.addClass("future");
    text2.addClass("future");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("present");
    text10.addClass("future");
    text11.addClass("future");
    text12.addClass("future");
  } else if (currentTime == 10) {
    text1.addClass("future");
    text2.addClass("future");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("present");
    text11.addClass("future");
    text12.addClass("future");
  } else if (currentTime == 11) {
    text1.addClass("future");
    text2.addClass("future");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("present");
    text12.addClass("future");
  } else if (currentTime == 12) {
    text1.addClass("future");
    text2.addClass("future");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("present");
  } else if (currentTime == 1) {
    text1.addClass("present");
    text2.addClass("future");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("past");
  } else if (currentTime == 2) {
    text1.addClass("past");
    text2.addClass("present");
    text3.addClass("future");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("past");
  } else if (currentTime == 3) {
    text1.addClass("past");
    text2.addClass("past");
    text3.addClass("present");
    text4.addClass("future");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("past");
  } else if (currentTime == 4) {
    text1.addClass("past");
    text2.addClass("past");
    text3.addClass("past");
    text4.addClass("present");
    text5.addClass("future");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("past");
  } else if (currentTime == 5) {
    text1.addClass("past");
    text2.addClass("past");
    text3.addClass("past");
    text4.addClass("past");
    text5.addClass("present");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("past");
  } else {
    text1.addClass("past");
    text2.addClass("past");
    text3.addClass("past");
    text4.addClass("past");
    text5.addClass("past");
    text9.addClass("past");
    text10.addClass("past");
    text11.addClass("past");
    text12.addClass("past");
  }
}


//the function above works but it makes my head hurt.... after some google searching i figured out how to accomplish the same thing by looping over the elements of class textarea and assigning them a data-state for comparison
function changeBackgroundV2() {
  var currentTime = parseInt(moment().format("H"));
  for (var i = 0; i < textArea.length; i++) {
    if (textArea[i].dataset.hour < currentTime) {
      textArea[i].className += " past";
    } else if (textArea[i].dataset.hour == currentTime) {
      textArea[i].className += " present";
    } else {
      textArea[i].className += " future";
    }
  }
}

setInterval(update, 1000);
updateTextAreas();
changeBackgroundV2();

//each of these on click events effectively does the same thing, when you click on the save button it takes the corresponding text and saves it to an array in local storage

btn1.on("click", function () {
  storedText[4] = text1.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[4] = storedText[4];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn2.on("click", function () {
  storedText[5] = text2.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[5] = storedText[5];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn3.on("click", function () {
  storedText[6] = text3.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[6] = storedText[6];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn4.on("click", function () {
  storedText[7] = text4.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[7] = storedText[7];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn5.on("click", function () {
  storedText[8] = text5.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[8] = storedText[8];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn9.on("click", function () {
  storedText[0] = text9.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[0] = storedText[0];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn10.on("click", function () {
  storedText[1] = text10.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[1] = storedText[1];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn11.on("click", function () {
  storedText[2] = text11.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[2] = storedText[2];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
btn12.on("click", function () {
  storedText[3] = text12.val();
  var savedText = JSON.parse(localStorage.getItem("schedule"));
  if (savedText == null) {
    localStorage.setItem("schedule", JSON.stringify(storedText));
  } else {
    savedText[3] = storedText[3];
    localStorage.setItem("schedule", JSON.stringify(savedText));
  }
});
