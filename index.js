// Image scroll & parallax effect
const track = document.getElementById("menu-image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth * 3 / 4; // Sensitivity of mouse drag; adjust as necessary
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("menu-image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

const handleOnTouchMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const clientX = e.touches[0].clientX;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX,
        maxDelta = window.innerWidth;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.style.transform = `translate(${nextPercentage}%, -50%)`;
  
  for (const image of track.getElementsByClassName("menu-image")) {
    image.style.objectPosition = `${100 + nextPercentage}% center`
  }
}

function onOpen() {
  nextPercentage = 0;
  
  track.dataset.percentage = nextPercentage;
  
  track.style.transform = `translate(${nextPercentage}%, -50%)`;
  
  for (const image of track.getElementsByClassName("menu-image")) {
    image.style.objectPosition = `${100 + nextPercentage}% center`
  }
}

onOpen();

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnTouchMove(e);



// Clickable images
const images = document.querySelectorAll('#menu-image-track .menu-image-container');

images.forEach((imageContainer) => {
    imageContainer.addEventListener('click', () => {
        imageContainer.classList.toggle('flipped'); // Toggle the flipped class
    });
});



// Create your own cheese button
function beginCheeseMaking() {
  window.location.href = 'createyourowncheese.html';
}