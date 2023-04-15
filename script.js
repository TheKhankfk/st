// Get the HTML elements for the timer text and buttons
let timer_text = document.getElementById("timer_display");
let button1 = document.getElementById("start_button");
let button2 = document.getElementById("stop_button");
let button3 = document.getElementById("reset_button");

// Add event listeners to buttons for when they are clicked
button3.addEventListener("click" , Reset);
button1.addEventListener("click" , Start);
button2.addEventListener("click" , Stop);

// Initialize variables for the timer and its current state
let chk = false;
let chkstart = false;

let mls = 0;
let seconds = 0;
let ms, s , m , h;
let hours = 0;
let minutes = 0;
let event_value;

function Start() {
    // If the timer has already started, do nothing
    if(chkstart === true) return;

    // Set both the "start" button and the timer check to true
    chk = true;
    chkstart = true;

    // Use setInterval to update the timer display every 5 milliseconds
    event_value = setInterval(function(){
        // Increase the time by 5 milliseconds
        mls =mls+5;

        // If 1 second has passed, reset the milliseconds and increase the seconds
        if(mls === 1000) {
            mls = 0;
            seconds++;
        }

        // If 1 minute has passed, reset the seconds and increase the minutes
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // If 1 hour has passed, reset the minutes and increase the hours
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }

        // If 24 hours have passed, reset the timer
        if(hours === 24) {
            Reset();
        }

        // Format the milliseconds with leading zeros if necessary
        if(mls < 10) {
            ms = "00" + mls;
        }
        else if(mls < 100) {
            ms = "0" + mls;
        }
        else {
            ms = mls;
        }

        // Format the seconds with leading zeros if necessary
        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        // Format the minutes with leading zeros if necessary
        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        // Format the hours with leading zeros if necessary
        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        // Set the timer display to the formatted time
        timer_display.innerHTML = h + " : " + m + " : " + s + " : " + ms;
    },5)
}
// Stop the timer
function Stop() {
    // If the timer is not running, return
    if(chk === false) return;
    
    // Clear the interval
    clearInterval(event_value);
    
    // Change the text of the start button to "RESUME"
    start_button.innerText = "RESUME";
    
    // Set chkstart to false to indicate the timer is paused
    chkstart = false;
}

// Reset the timer
function Reset() {
    // Set all time variables to zero
    seconds = 0;
    minutes = 0;
    hours = 0;
    mls = 0;

    // Set chk and chkstart to false to indicate the timer is stopped
    chk = false;
    chkstart = false;

    // Set the timer display to 00 : 00 : 00 : 000
    timer_text.innerHTML = "00 : 00 : 00 : 000";
    
    // Clear the interval
    clearInterval(event_value);
    
    // Change the text of the start button to "START"
    start_button.innerText = "START";   
}
