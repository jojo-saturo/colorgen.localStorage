const SAVE_COLOR = "SAVE_COLOR";
const COLOR_BOX = document.getElementById("colorBox");
const STORED_COLOR = localStorage.getItem(SAVE_COLOR);
const COLOR_CODE = document.getElementById("colorCode");
//check if storage is empty

if (
  STORED_COLOR !== null ||
  STORED_COLOR !== "" ||
  STORED_COLOR !== undefined
) {
  COLOR_BOX.style.backgroundColor = STORED_COLOR;
  COLOR_CODE.textContent = STORED_COLOR;
} else {
  COLOR_BOX.style.backgroundColor = "";
  COLOR_CODE.textContent = "";
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += letters[randomIndex];
  }
  return color;
}

function generateColor() {
  let newColor = getRandomColor();
  COLOR_BOX.style.backgroundColor = newColor;

  localStorage.setItem(SAVE_COLOR, newColor);

  COLOR_CODE.textContent = newColor; //STORED_COLOR;
}

function copyColor() {
  let colorText = document.getElementById("colorCode").textContent;
  navigator.clipboard.writeText(STORED_COLOR);
  alert("Copied " + colorText);
}
