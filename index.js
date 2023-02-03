const colors = ["green",
                "red",
                "rgba(133,122,200)",
                "#f15025",
                "#f2478f",
                "aquamarine",
                "blue",
                "rgb(129,201,235)",
                "rgb(223,156,098)",
                "#fdca23",
                "#1f34f2",
                "#f1f5f8",
                "#527fb5",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const contentContainer = document.querySelector(".content-container")
const navBar = document.querySelector(".nav-bar")

btn.addEventListener("click", function click() {
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    contentContainer.style.backgroundColor = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber].textColor();
});

const getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}

const textColor = () => {
    if (randomNumber !== 12) {
        color.style.color = "#fff";
    }
}

console.log(getRandomNumber());
console.log(textColor());