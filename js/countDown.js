var timer, minInSec, seconds;
var distance = 1500,
    resetTime = 1500; // 25 mins by default (need to modify in html as well)

var options = [{
    title: "Time is up",
    body: "Take a break."
}]

function setTime() {
    stopTimer();
    distance = 0;
    minInSec = parseInt(document.getElementById('minutes').value * 60, 10); // base 10
    seconds = parseInt(document.getElementById('seconds').value * 1, 10);

    distance = minInSec + seconds;
    if (!isNaN(distance)) {
        updateTime();
        resetTime = distance;
        document.getElementById('minutes').value = "";
        document.getElementById('seconds').value = "";
    }
}

function startTimer() {
    stopTimer();
    // Update the count down every 1 second
    timer = setInterval(function () {
        // If the count down is over, notify
        if (distance < 0) {
            stopTimer();
            new Notification(options[0].title, options[0]);
        } else {
            updateTime();
            distance -= 1;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    distance = resetTime;
    updateTime();
}

function updateTime() {
    var minutes = Math.floor(distance / 60);
    var seconds = distance % 60;
    // Output the result in an element with id="time"
    document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
}