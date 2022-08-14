const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle")
radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("result").innerHTML = `The circumference is: ${circumference}`;