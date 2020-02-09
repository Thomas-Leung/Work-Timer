var minInSec, seconds, distance;

function setTime() {
    distance = 0;
    minInSec = parseInt(document.getElementById('minutes').value * 60, 10); // base 10
    console.log(minInSec, 'ok');
    seconds = parseInt(document.getElementById('seconds').value, 10);
    console.log(seconds);

    distance = minInSec + seconds;
    updateTime();
}

function startTimer() {
    // Update the count down every 1 second
    var x = setInterval(function () {

        console.log(distance);
        updateTime();
        distance -= 1;
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function updateTime() {
    console.log(distance, 'disa')
    var minutes = Math.floor(distance / 60);
    console.log('min', minutes);
    var seconds = distance % 60;

    console.log(seconds, 's');
    // Output the result in an element with id="time"
    document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";
}