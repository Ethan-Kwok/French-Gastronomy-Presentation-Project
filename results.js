// Clickable images
const cheeseCard = document.querySelector('.cheese-image-container');

cheeseCard.addEventListener('click', () => {
    cheeseCard.classList.toggle('flipped'); // Toggle the flipped class
});

let animal = localStorage.getItem("animal").toLowerCase();
let region = localStorage.getItem("region").toLowerCase();
const animalsMilked = localStorage.getItem("animalsMilked")

let textForCopyToClipboard = '';

// Function to get text based on animal and region
function getTextBasedOnSelection(animal, region) {
    let cheeseImageSrc = '';
    let headerText = '';
    let bodyText = '';
    let animalsMilkedText;
    if (animal === 'sheep') {
        animalsMilkedText = "You milked " + animalsMilked + " sheep!";
    } else {
        animalsMilkedText = "You milked " + animalsMilked + " " + animal + "s!";
    }

    if (animal === 'cow') {
        if (region === 'valley') {
            cheeseImageSrc = 'cheese-images/camembert.jpg'
            headerText = 'Camembert';
            bodyText = 'The lush, grassy pastures contribute to your cheese\'s creamy texture and rich, buttery flavor. Camembert is known for its signature soft taste. The high levels of monounsaturated fatty acids from cow milk is great for heart health, and the low ratio of omega-6 to omega-3 fatty acids is good for balancing inflammation in the body. Great work!';
        } else if (region === 'desert') {
            cheeseImageSrc = 'cheese-images/laguiole.jpg'
            headerText = 'Laguiole';
            bodyText = 'The arid landscape leaves sparse grasses and aromatic herbs. This leads to a tougher, denser cheese with nutty, earthy flavors and herbal hints. The high levels of monounsaturated fatty acids from cow milk is great for heart health. and the low ratio of omega-6 to omega-3 fatty acids is good for balancing inflammation in the body. Great work!';
        }
    } else if (animal === 'sheep') {
        if (region === 'valley') {
            cheeseImageSrc = 'cheese-images/roquefort.jpg'
            headerText = 'Roquefort';
            bodyText = 'The lush, grassy pastures create a rich flavor and creamy texture. The distinctive blue veins develop from mold during the aging process. The starchiness and grassy note comes from the sheep\'s complex diet. The higher amounts of short-chain fatty acids make it easier to digest and provide potential gut health benefits. Great work!';
        }
    } else if (animal === 'goat') {
        if (region === 'valley') {
            cheeseImageSrc = 'cheese-images/chevre-du-poitou.webp'
            headerText = 'Chèvre du Poitou';
            bodyText = 'The abundance of grass and herbs in the fertile valley gives the cheese a creamy, tangy flavor that reflects the goats\' rich diet. The high omega-3 content and low thrombogenicity index means this cheese is less likely to contribute to cardiovascular risks. The bright white appearance is because of the lack of beta carotene, which goats convert into vitamin A. Great work!';
        } else if (region === 'mountain') {
            cheeseImageSrc = 'cheese-images/picodon.jpg'
            headerText = 'Picodon'
            bodyText = 'The diverse alpine flora and wild herbs only found in higher elevation create aromatic qualities, while the much more active lifestyle of goats in the mountains creates a strong, firm taste. The high omega-3 content and low thrombogenicity index means this cheese is less likely to contribute to cardiovascular risks. The bright white appearance is because of the lack of beta carotene, which goats convert into vitamin A. Great work!';
        } else if (region === 'desert') {
            cheeseImageSrc = 'cheese-images/feta-de-chevre.jpg'
            headerText = 'Feta de Chèvre';
            bodyText = 'The climate of the desert region makes the cheese crumbly and tangy, while the aromatic plants infuse complex flavors. The high omega-3 content and low thrombogenicity index means this cheese is less likely to contribute to cardiovascular risks. The bright white appearance is because of the lack of beta carotene, which goats convert into vitamin A. Great work!';
        }
    }

    // Update the DOM with the selected texts
    document.getElementById('animal-region-header').textContent = headerText;
    document.getElementById('animal-region-text').textContent = animalsMilkedText + " " + bodyText;
    document.getElementById('cheese-image').src = cheeseImageSrc;
    
    textForCopyToClipboard = 'Cheese: ' + headerText + '. \nRegion: ' + region + '. \nAnimal: ' + animal + '. \nDescription: \"' + bodyText + '\"'
}

// Call the function to set the text based on the selected animal and region
getTextBasedOnSelection(animal, region);


function copyResults() {
    const textToCopy = textForCopyToClipboard

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Text copied to clipboard: ', textToCopy);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};

// Back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.getElementById('back-arrow');

    function handleBackArrowClick() {
        window.location.href = 'index.html';
    }

    backArrow.addEventListener('click', handleBackArrowClick);
});