const t = document.getElementById("root");
const u = document.createElement("div");

let attempts = 0;
let time = 60;

// Create timer
const timer = document.createElement("div");
timer.textContent = `${time} secondes`;
timer.classList.add("timer");
t.appendChild(timer);

// Create random number
const getRandomNumber = (min, max) => {
  return String(Math.round(Math.random() * (max - min) + min));
};

const createCircle = () => {
  u.classList.add("circle");
  t.appendChild(u);
};

const myTimer = setInterval(() => {
  const newTime = time--;
  if (newTime <= 0) {
    timer.textContent = `0 seconde`;
    clearInterval(myTimer);
    alert(`Le temps est écoulé !!, vous avez fait ${attempts} essais`);
  } else {
    timer.textContent = `${newTime} secondes`;
  }
}, 1000);

const onClick = (e) => {
  if (e.target === e.currentTarget) {
    if (e.target.id === "root") {
      time -= 20;
      attempts += 1;
    }
  } else {
    // get value in css
    const valueWidth = u.offsetWidth;
    const valueHeight = u.offsetHeight;
    // Create number for style position
    u.style.left = `${getRandomNumber(0, 1500)}px`;
    u.style.top = `${getRandomNumber(0, 400)}px`;
    // Change value in css
    u.style.width = `${valueWidth - 20}px`;
    u.style.height = `${valueHeight - 20}px`;

    if (u.style.width === "0px") {
      alert(
        `Vous avez réussi en ${attempts + 1} essais et ${59 - time} secondes`
      );
      clearInterval(myTimer);
    }
    attempts += 1;
  }
};

createCircle();
t.addEventListener("click", onClick);
u.addEventListener("click", onClick);
