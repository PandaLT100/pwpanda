function bobBurger() {
    document.getElementById("hooray").innerHTML = "Correct!";
} 

function bobNoBurger() {
    let xay = document.getElementById("hooray");

    xay.innerHTML = "Incorrect!";
}

function goodDay() {
    const hour = new Date().getHours();
    let demo = document.getElementById("demo");
    let greeting;
    if (hour > 4) {
        greeting = demo.innerHTML = "Good Morning";
    } else if (4 < hour < 11) {
        greeting = demo.innerHTML = "Good Morning, Again";
    } else {
        greeting = demo.innerHTML = "Good afternoon";
    }

}
