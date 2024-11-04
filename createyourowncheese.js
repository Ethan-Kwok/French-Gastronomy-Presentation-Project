let selectedRegion = '';
let selectedAnimal = '';

function selectRegion(region) {
    selectedRegion = region;

    document.getElementById('button-container').innerHTML = `
        <div class="option">
            <img src="animal-images/cow2.png" alt="Cow" class="image">
            <button class="btn" id="cow-btn" onclick="selectAnimal('Cow')">Cow</button>
        </div>
        <div class="option">
            <img src="animal-images/goat1.png" alt="Goat" class="image">
            <button class="btn" id="goat-btn" onclick="selectAnimal('Goat')">Goat</button>
        </div>
        <div class="option">
            <img src="animal-images/sheep1.png" alt="Sheep" class="image">
            <button class="btn" id="sheep-btn" onclick="selectAnimal('Sheep')">Sheep</button>
        </div>
    `;

    if (selectedRegion === 'Mountain') {
        document.getElementById('cow-btn').disabled = true;
        document.getElementById('sheep-btn').disabled = true;
    }

    if (selectedRegion === 'Desert') {
        document.getElementById('sheep-btn').disabled = true;
    }
}

function selectAnimal(animal) {
    selectedAnimal = animal;
    localStorage.setItem('region', selectedRegion);
    localStorage.setItem('animal', selectedAnimal);
    window.location.href = 'clickanimals.html';
}


// Back arrow
document.addEventListener('DOMContentLoaded', function() {
    const backArrow = document.getElementById('back-arrow');

    function handleBackArrowClick() {
        window.location.href = 'index.html';
    }

    backArrow.addEventListener('click', handleBackArrowClick);
});