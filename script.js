// Set the date we're counting down to
const targetDate = new Date("August 30, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = targetDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);
