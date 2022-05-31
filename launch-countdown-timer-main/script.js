// Set date we are counting down to 
var countDownDate = new Date("Jun 30, 2022 13:30:00").getTime();

// Update th count down every 1 second
var x = setInterval(() => {
    // Get today's date and time

    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("remdays").innerHTML = days;
    document.getElementById("remhours").innerHTML = hours;
    document.getElementById("remmins").innerHTML = minutes;
    document.getElementById("remsecs").innerHTML = seconds;

    
}, 1000);
