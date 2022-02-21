$('#btnSubmit').click(function() {
    alert('This is a very mean message')
    alert($('#typeText').val())
    $('button').on('click');
})

$('#newDiv').mouseover(function(event) {
    setRandomColor(event)
    $("#log").append("<div>Handler for .mouseover() called.</div>");
    $('newDiv').on('mouseover');
});

$('#newDiv').mouseout(function(event) {
    event.target.style.backgroundColor = "white";
    $('newDiv').on('mouseover');
});


let colorArr = [
    "blue",
    "pink",
    "purple",
    "grey",
    "orange",
    "yellow",


]

function setRandomColor(event) {
    const randomNum = Math.floor(Math.random() * colorArr.length);
    event.target.style.backgroundColor = colorArr[randomNum];
}