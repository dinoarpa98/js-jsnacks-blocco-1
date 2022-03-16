let question = prompt("Parola 1");
let question2 = prompt("Parola 2");


if (question > question2 ) {
    document.getElementById("greatest").innerHTML = "la prima parola è più lunga";
} else {
    document.getElementById("greatest").innerHTML = "la seconda parola è più lunga";
}