// l,l
const timer = document.getElementById('stopwatch');

//var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
// this is startTimer function
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
// this is startTimer function
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

// this is timerCycle function
function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    //hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 99) {
      min = min + 1;
      sec = 0;
    }
    // if (min == 60) {
    //   hr = hr + 1;
    //   min = 0;
    //   sec = 0;
    // }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    // if (hr < 10 || hr == 0) {
    //   hr = '0' + hr;
    // }

    timer.innerHTML = min + ':' + sec;

    setTimeout("timerCycle()", 10);
  }
}
// this is resetTimer function
function resetTimer() {
    timer.innerHTML = '00:00';
    stoptime = true;
   // hr = 0;
    sec = 0;
    min = 0;
}