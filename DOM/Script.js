document.addEventListener("DOMContentLoaded", function() {


    let colorArr = [
        "blue",
        "pink",
        "purple",
        "grey",
        "orange",
        "yellow",


    ]

    let friendArr = [
        "Jack",
        "Julie",
        "Kelsey",
        "Rob",
        "Matt",
        "Dillon",
        "Austin",
        "Savannah",
        "Ccaw",
        "Misso",
    ]

    let btn3 = document.getElementById('btn3')
    let newUl = document.getElementById('newUl')

    let friendCount = 0


    btn3.addEventListener('click', function() {
        friendCount++
        let friendListItem = document.createElement('li')
        friendListItem.textContent = friendArr[friendCount]
        newUl.appendChild(friendListItem)





    })




    function setRandomColor(event) {
        const randomNum = Math.floor(Math.random() * colorArr.length);
        event.target.style.backgroundColor = colorArr[randomNum];
    }


    const btn = document.createElement('button');
    document.body.appendChild(btn)
    btn.textContent = "cheese!"

    btn.addEventListener('click', function() {

        alert("This is a very mean message.")
        alert(document.getElementById('txttype').value)

    })
    document.getElementById('newDiv')
    newDiv.addEventListener('mouseover', function(event) {
        setRandomColor(event)




    })
    let spanBtn = document.getElementById("newbtn")
    let div2 = document.getElementById('div2')
    spanBtn.addEventListener('click', function() {
        const span2 = document.createElement('span')
        span2.textContent = "Will"
        div2.appendChild(span2)





    })



    newDiv.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = "white";


    })

    document.getElementById('pp')
    pp.addEventListener('click', function(event) {
        setRandomColor(event)

    })










})