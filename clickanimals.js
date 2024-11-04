let imageContainer = document.querySelector(".animals-image-container");
const animalsBackground = document.querySelector('.animals-background');
const numImagesPerAnimal = 5;
let animalsClicked = 0;

let animal = localStorage.getItem("animal").toLowerCase();
let region = localStorage.getItem("region");
const backgroundImages = {
    valley: 'url("images/grass.jpg")',
    mountain: 'url("images/mountain.avif")',
    desert: 'url("images/desert.avif")'
};
if (backgroundImages[region.toLowerCase()]) {
    animalsBackground.style.backgroundImage = backgroundImages[region.toLowerCase()];
} else {
    console.warn(`Background image for ${region} not found. Using default.`);
    animalsBackground.style.backgroundImage = 'url("images/grass.jpg")';
}

function getRandomSize() {
    return Math.random() * (1 - 0.4) + 0.4;
}

function getRandomPosition(max) {
    return Math.random() * max;
}

async function getImage(n, topOffset) {
    for (let i = 0; i < n; i++) {
        let randomIndex = Math.floor(Math.random() * numImagesPerAnimal) + 1;
        let url = `animal-images/${animal}${randomIndex}.png`;
        let img = document.createElement("img");
        img.src = url;

        // Set random size using viewport units
        let sizeFactor = getRandomSize();
        img.style.width = `${sizeFactor * 45}vmin`;
        img.style.height = "auto";

        // Set random position within the newly revealed area using viewport units
        img.style.top = `${topOffset / window.innerHeight * 100 + getRandomPosition(100 - sizeFactor * 20)}vh`;
        img.style.left = `${getRandomPosition(100 - sizeFactor * 20)}vw`;

        // Randomly mirror some images horizontally
        if (Math.random() < 0.5) {
            img.style.transform = 'scaleX(-1)';
        }

        imageContainer.appendChild(img);

        img.addEventListener("click", function () {
            if (img.classList.contains("alreadyClicked")) {
                return;
            }
            animalsClicked++;
            animalsClickedCounter.textContent = animalsClicked;
            img.classList.add("scale-fade-out");
            img.classList.add("alreadyClicked");
            setTimeout(() => {
                img.remove();
            }, 500); 
        });
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("scroll", function () {
    let { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    let viewportHeight = window.innerHeight;
    if (clientHeight + scrollTop + viewportHeight * 0.5 >= scrollHeight) {  // Use viewport height units
        const randomNumAnimals = getRandomNumber(2, 5);
        getImage(randomNumAnimals, scrollTop + clientHeight);
    }
});

const startingNumAnimals = getRandomNumber(2, 5);
getImage(startingNumAnimals, 0);



const follower = document.getElementById('follower');

// Show the image initially
follower.style.display = 'block';

document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;

    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;

    const followerWidth = follower.offsetWidth;
    const followerHeight = follower.offsetHeight;
    follower.style.transform = `translate(-${followerWidth / 2}px, -${followerHeight / 3}px)`;
});



// Timer countdown
let countdown = 15; // Set the countdown time
const timerElement = document.getElementById('timer');

const timerInterval = setInterval(() => {
    if (countdown > 0) {
        timerElement.textContent = countdown; // Update the timer display
        countdown--;
    } else {
        localStorage.setItem("animalsMilked", animalsClicked);
        clearInterval(timerInterval); // Clear the interval
        window.location.href = "curdling.html"; // Redirect after the timer ends
    }
}, 1000); // Update every second (1000 milliseconds)



// Back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.getElementById('back-arrow');

    function handleBackArrowClick() {
        window.location.href = 'index.html';
    }

    backArrow.addEventListener('click', handleBackArrowClick);
});