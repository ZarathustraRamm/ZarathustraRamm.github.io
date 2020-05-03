let color = "purple"
let number = 10
let word = "cool"

if (color === "purple") {
$(".north").css("background", "purple")
}

if (number > 100) {
$(".east").text("whoah, that's a big number.")
} else{
    $(".east").text("just a regular two digit number")
}

if (word === "cool") {
    $(".south").text("the power of DOM")

} else {
    $(".west").text("the power of DOM")
}