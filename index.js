var userLetter = "X";
var counter = 0;
var gameOver = false;
var title = document.getElementById('title');
var messageDiv = document.getElementById('messageDiv');
var theMessage = document.getElementById('theMessage');

function resetGame() {
    counter = 0;
    gameOver = false;
    messageDiv.style.display = 'none';
    title.style.display = 'block';
    userLetter = "X";

    for (item = 1; item <= 9; item++) {
        var theBoxId = "box" + item;
        var theBox = document.getElementById(theBoxId);
        theBox.innerHTML = "";
        theBox.style.color = "#FFF";
    }
}

function changeUser() {
    if (userLetter === "X") {
        userLetter = "O";
    }

    else if (userLetter === "O") {
        userLetter = "X";
    }

    else {
        messageDiv.style.display = 'block';
        theMessage.innerHTML = 'Something went wrong';
    }
}

function completeRow(x, y, z, k, l, m) { 
    if ((x.length == 1) && (x == y) && (x == z)) {
        gameOver = true;
        title.style.display = 'none';
        messageDiv.style.display = 'block';
        play2();
        document.querySelector(k).style.color = '#FF880D';
        document.querySelector(l).style.color = '#FF880D';
        document.querySelector(m).style.color = '#FF880D';
        theMessage.innerHTML = x + " wins!";
    }

    else {
        console.log("keep going");
    }
}

function checkForWin() {
    var a = {
        letter: document.getElementById('box1').innerHTML,
        id: "#box1"
    }

    var b = {
        letter: document.getElementById('box2').innerHTML,
        id: "#box2"
    }

    var c = {
        letter: document.getElementById('box3').innerHTML,
        id: "#box3"
    }

    var d = {
        letter: document.getElementById('box4').innerHTML,
        id: "#box4"
    }

    var e = {
        letter: document.getElementById('box5').innerHTML,
        id: "#box5"
    }

    var f = {
        letter: document.getElementById('box6').innerHTML,
        id: "#box6"
    }

    var g = {
        letter: document.getElementById('box7').innerHTML,
        id: "#box7"
    }

    var h = {
        letter: document.getElementById('box8').innerHTML,
        id: "#box8"
    }

    var i = {
        letter: document.getElementById('box9').innerHTML,
        id: "#box9"
    }

    if (counter > 4) {
        completeRow(a.letter, b.letter, c.letter, a.id, b.id, c.id);
        completeRow(d.letter, e.letter, f.letter, d.id, e.id, f.id);
        completeRow(g.letter, h.letter, i.letter, g.id, h.id, i.id);   
        completeRow(a.letter, d.letter, g.letter, a.id, d.id, g.id);
        completeRow(b.letter, e.letter, h.letter, b.id, e.id, h.id);
        completeRow(c.letter, f.letter, i.letter, c.id, f.id, i.id);
        completeRow(a.letter, e.letter, i.letter, a.id, e.id, i.id);
        completeRow(c.letter, e.letter, g.letter, c.id, e.id, g.id);
    }

    if ((counter == 9) && (gameOver == false)) {
        gameOver = true;
        messageDiv.style.display = 'block';
        theMessage.innerHTML = "Cat's Game!";
        title.style.display = 'none';
    }
};

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function play2() {
    var audio = document.getElementById("audio2");
    audio.play()
}

var boxes = document.getElementsByClassName('box');

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', checkSpace)
}

function checkSpace(event) {
    var clickedBoxId = event.srcElement.id;
    var clickedBoxLetter = event.srcElement.innerHTML;

    if (gameOver == false) {
        if (clickedBoxLetter == false) {
            play();
            
            document.getElementById(clickedBoxId).innerHTML = userLetter;

            counter++;

            setTimeout(() => {
                checkForWin();
            }, 800);

            changeUser();
        }
        else {
            alert('This space is taken. Try another!');
        }
    }
    else {
        alert('Game Over. Click the "Play Again" button to start a new game.');   
    }
}