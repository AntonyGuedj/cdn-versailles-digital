const circle = document.querySelector("#home-hero-glow");
const star1 = document.querySelector("#home-hero-star-1");
const star2 = document.querySelector("#home-hero-star-2");
const star3 = document.querySelector("#home-hero-star-3");
const star4 = document.querySelector("#home-hero-star-4");
const star5 = document.querySelector("#home-hero-star-5");

const onMouseMove = (e) => {
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left + "px";
    circle.style.top = top + "px";
}
document.addEventListener("mousemove", onMouseMove);

const moveStars = (star) => {
    const min = 3500;
    const max = 15000;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    const cssClass = star.classList.contains("home-hero-horizontal-star") ? "to-right" : "to-top";
    
    star.removeEventListener("transitionend", transitionEndHandler);
    star.classList.remove(cssClass);
    
    setTimeout(() => {
        star.classList.add(cssClass);
        star.addEventListener("transitionend", transitionEndHandler);
    }, delay);
}

const transitionEndHandler = (event) => {
    const star = event.target;
    moveStars(star);
};

moveStars(star1);
moveStars(star2);
moveStars(star3);
moveStars(star4);
moveStars(star5);