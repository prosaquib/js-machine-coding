(function () {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");
  var startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countdownTimer = null;

  // Start Timer Button - Start
  startBtn.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countdownTimer = setInterval(function () {
        timer();
      }, 1000);
    }

    startInterval();
  });

  // Start Timer Button - End

  function timer() {
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }

    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value) - 60;
    }

    min.value = min.value > 60 ? 60 : min.value;

    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
  }

  // Stop Interval Logic - START
  function stopInterval(state) {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countdownTimer);
  }

  // Stop Interval Logic - END

  // Stop Btn Click - Logic

  stopBtn.addEventListener("click", function () {
    stopInterval("pause");
  });

  // Reset Btn Click - Logic

  resetBtn.addEventListener("click", function () {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    stopInterval("reset");
  });
})();
