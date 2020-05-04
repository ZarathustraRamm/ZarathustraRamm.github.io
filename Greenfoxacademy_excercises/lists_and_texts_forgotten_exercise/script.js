let justArray = ['SinceHereAddedWithJavaScript', 'Johnny' , 'Sam', 'Ben', 'Daryl', 'David']
// justArray.forEach(myFunction)
justArray.forEach ( 
    (name) => {
$('ul').append('<li>' + name + '</li>')
}
)

$('li:last-child').css('font-weight', 'bold');

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How bloody awesome!"
  }

$("main").append("<h2>Added with javascript</h2>")
$("main").append("<p>This block was added using JavaScript's jQuery library. How bloody awesome!</p>")

  
  