// JS starts here

const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // 1000ms here is delay time

// setInterval: It’s a built-in JavaScript function that repeatedly runs a given function at fixed time intervals (in milliseconds) until you stop it.

// Use "clearInterval(id)"" to stop it.
