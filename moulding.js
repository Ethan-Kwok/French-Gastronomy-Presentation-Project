const mouldContainer = document.getElementById("mould-containers");
const numImages = 15;
let clickedCount = 0;

for (let i = 0; i < numImages; i++) {
    const img = document.createElement("img");
    img.src = "images/emptymould.png";
    img.classList.add("mould-image");
    img.addEventListener("click", function () {
        // Only change the image if it hasn't already been clicked
        if (img.src.includes("images/emptymould.png")) {
            img.src = "images/fullmould.png";
            clickedCount++;
            
            // Check if all images have been clicked
            if (clickedCount === numImages) {
                window.location.href = "drainsaltage.html";
            }
        }
    });
    mouldContainer.appendChild(img);
}


// Back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.getElementById('back-arrow');

    function handleBackArrowClick() {
        window.location.href = 'index.html';
    }

    backArrow.addEventListener('click', handleBackArrowClick);
});