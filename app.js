let numberSquares = 6;
let colors = randomColors(6);
let squares = document.querySelectorAll(".square");
let colorPicked = pickColor();
let winningColor = document.querySelector("#winningColor");
winningColor.textContent = colorPicked;
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let easyButton = document.querySelector("#easymode");
let hardButton = document.querySelector("#hardmode");

// Response when clicking squares
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === colorPicked) {
      message.textContent = "Correct!";
      h1.style.backgroundColor = clickedColor;
      squares.forEach(function (square) {
        square.style.backgroundColor = clickedColor;
      });
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  });
}

// loop colors
function changeColors(color) {
  h1.style.backgroundColor = color;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Pick new winner color by selecting the index array
function pickColor() {
  let indexwinner = Math.floor(Math.random() * colors.length);
  return colors[indexwinner];
}

// Creating an array with colors
function randomColors(amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    array.push(randomColor());
  }
  return array;
}

// Creating RGB color code RGB (0-255, 0-255, 0-255)
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}

// Easy mode game
easyButton.addEventListener("click", function () {
  easyButton.classList.add("active");
  hardButton.classList.remove("active");
  numberSquares = 3;
  colors = randomColors(numberSquares);
  colorPicked = pickColor();
  winningColor.textContent = colorPicked;
  for (let i = 0; i < squares.length; i++) {
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
  numberSquares = 6;
  colors = randomColors(numberSquares);
  colorPicked = pickColor();
  winningColor.textContent = colorPicked;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    if (squares[i].style.display === "none") {
      squares[i].style.display = "block";
    }
    squares[i].style.backgroundColor = colors[i];
  }
});

// Reset game button
reset.addEventListener("click", function () {
  colors = randomColors(numberSquares);
  colorPicked = pickColor();
  winningColor.textContent = colorPicked;
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
  reset.textContent = "Reset Colors";
});
