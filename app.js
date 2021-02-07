var colors = randomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var winningColor = document.querySelector("#winningColor");
winningColor.textContent = colorPicked;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easymode");
var hardButton = document.querySelector("#hardmode");

// Response when clicking squares
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === colorPicked) {
      message.textContent = "Correct!";
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  });
}

// Pick new winner colour selecting the index array
function pickColor() {
  var indexwinner = Math.floor(Math.random() * colors.length);
  return colors[indexwinner];
}

// Creating array with colors
function randomColors(amount) {
  var array = [];
  for (var i = 0; i < amount; i++) {
    array.push(randomColor());
  }
  return array;
}

// Creating RGB color code RGB (0-255, 0-255, 0-255)
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}

// Reset game button
reset.addEventListener("click", function () {
  colors = randomColors(6);
  colorPicked = pickColor();
  winningColor.textContent = colorPicked;
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
  reset.textContent = "Reset Colors";
});

// Easy mode game
easyButton.addEventListener("click", function () {
  easyButton.classList.add("active");
  hardButton.classList.remove("active");
  colors = randomColors(3);
  colorPicked = pickColor();
  winningColor.textContent = colorPicked;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    if (i > 2) {
      squares[i].style.display = "none";
    }
  }
});

// Hard mode game
hardButton.addEventListener("click", function () {
  hardButton.classList.add("active");
  easyButton.classList.remove("active");
  colors = randomColors(6);
  colorPicked = pickColor();
  winningColor.textContent = colorPicked;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    if (squares[i].style.display === "none") {
      squares[i].style.display = "block";
    }
    squares[i].style.backgroundColor = colors[i];
  }
});
