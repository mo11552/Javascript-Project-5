function clock() {
  var date = new Date();
  var hrs = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  var time = `${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};

clock();

