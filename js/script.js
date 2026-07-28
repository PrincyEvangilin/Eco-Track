let ecoScore = Number(localStorage.getItem("ecoScore")) || 0;
document.getElementById("score").textContent = ecoScore;
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

// Prevent duplicate tracker points
let waterDone = localStorage.getItem("waterDone") === "true";
let electricityDone = localStorage.getItem("electricityDone") === "true";
let carbonDone = localStorage.getItem("carbonDone") === "true";

// ---------------- Eco Score ----------------

function updateScore(points) {
    ecoScore += points;

    document.getElementById("score").textContent = ecoScore;
    localStorage.setItem("ecoScore", ecoScore);

    if (ecoScore >= 100) {
        document.getElementById("badge").innerHTML =
            "🏆 Congratulations! You are an Eco Hero!";
    }
}

// ---------------- Get Started ----------------

const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
    document.querySelector(".features").scrollIntoView({
        behavior: "smooth"
    });
});

// ---------------- Water Tracker ----------------

const waterBtn = document.getElementById("waterBtn");

waterBtn.addEventListener("click", function () {

    const water = Number(document.getElementById("waterInput").value);
    const result = document.getElementById("waterResult");

    if (isNaN(water) || water <= 0) {
        result.innerHTML = "❌ Please enter valid litres.";
        return;
    }

    if (water <= 100) {
        result.innerHTML = "🌿 Excellent! You're saving water.";

        if (!waterDone) {
            updateScore(25);
            waterDone = true;
localStorage.setItem("waterDone", "true");
        }

    } else if (water <= 200) {

        result.innerHTML = "💧 Good! Try to save a little more.";

        if (!waterDone) {
            updateScore(15);
            waterDone = true;
localStorage.setItem("waterDone", "true");
        }

    } else {

        result.innerHTML = "⚠️ High water usage. Save more water!";

        if (!waterDone) {
            updateScore(5);
            waterDone = true;
localStorage.setItem("waterDone", "true");
        }

    }

});

// ---------------- Electricity Tracker ----------------

const electricityBtn = document.getElementById("electricityBtn");

electricityBtn.addEventListener("click", function () {

    const units = Number(document.getElementById("electricityInput").value);
    const result = document.getElementById("electricityResult");

    if (isNaN(units) || units <= 0) {
        result.innerHTML = "❌ Please enter valid units.";
        return;
    }

    if (units <= 200) {

        result.innerHTML = "🌿 Excellent! Eco-friendly usage.";

        if (!electricityDone) {
            updateScore(25);
            electricityDone = true;
localStorage.setItem("electricityDone", "true");
        }

    } else if (units <= 500) {

        result.innerHTML = "⚡ Moderate usage.";

        if (!electricityDone) {
            updateScore(15);
            electricityDone = true;
localStorage.setItem("electricityDone", "true");
        }

    } else {

        result.innerHTML = "🚨 High electricity usage.";

        if (!electricityDone) {
            updateScore(5);
            electricityDone = true;
localStorage.setItem("electricityDone", "true");
        }

    }

});
// ---------------- Carbon Tracker ----------------

const carbonBtn = document.getElementById("carbonBtn");

carbonBtn.addEventListener("click", function () {

    const km = Number(document.getElementById("carbonInput").value);
    const result = document.getElementById("carbonResult");

    if (isNaN(km) || km <= 0) {
        result.innerHTML = "❌ Please enter a valid distance.";
        return;
    }

    if (km <= 10) {

        result.innerHTML = "🌿 Low carbon footprint.";

        if (!carbonDone) {
            updateScore(25);
            carbonDone = true;
localStorage.setItem("carbonDone", "true");
        }

    } else if (km <= 30) {

        result.innerHTML = "🚶 Moderate carbon footprint.";

        if (!carbonDone) {
            updateScore(15);
            carbonDone = true;
localStorage.setItem("carbonDone", "true");
        }

    } else {

        result.innerHTML = "🚗 High carbon footprint.";

        if (!carbonDone) {
            updateScore(5);
          carbonDone = true;
localStorage.setItem("carbonDone", "true");
        }

    }

});

// ---------------- Waste Tracker ----------------

const wasteBtn = document.getElementById("wasteBtn");

wasteBtn.addEventListener("click", function () {

    const waste = document.getElementById("wasteType").value;
    const result = document.getElementById("wasteResult");

    if (waste === "") {
        result.innerHTML = "❌ Please select a waste type.";
    }
    else if (waste === "plastic") {
        result.innerHTML = "♻ Plastic can be recycled. Use the blue recycling bin.";
    }
    else if (waste === "paper") {
        result.innerHTML = "📄 Paper is recyclable. Keep it clean and dry.";
    }
    else if (waste === "glass") {
        result.innerHTML = "🍾 Glass is recyclable. Handle with care.";
    }
    else if (waste === "organic") {
        result.innerHTML = "🌱 Organic waste can be composted.";
    }

});

// ---------------- Dark Mode ----------------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("darkMode", "true");
    } 
    else {
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("darkMode", "false");
    }

});

// ---------------- Eco Goals ----------------

let goals = document.querySelectorAll(".goal");
let points = document.getElementById("points");
let level = document.getElementById("level");
let progress = document.getElementById("progress");
let completed = document.getElementById("completed");

let savedGoals = JSON.parse(localStorage.getItem("savedGoals")) || [];

let ecoPoints = savedGoals.length * 10;

// Restore checked goals
goals.forEach(function(goal, index){

    if(savedGoals.includes(index)){
        goal.checked = true;
    }

});

// Goal events
goals.forEach(function(goal, index){

    goal.addEventListener("change", function(){

        if(goal.checked){

            if(!savedGoals.includes(index)){
                savedGoals.push(index);
                ecoPoints += 10;
            }

        }else{

            savedGoals = savedGoals.filter(function(item){
                return item !== index;
            });

            ecoPoints -= 10;

        }

        points.textContent = ecoPoints;

        updateProgress();
        updateLevel();

        localStorage.setItem("savedGoals", JSON.stringify(savedGoals));

    });

});
// ---------------- Progress Bar ----------------
function updateProgress() {

    let completedGoals = document.querySelectorAll(".goal:checked").length;

    completed.textContent = completedGoals;

    let percentage = (completedGoals / goals.length) * 100;

    progress.style.width = percentage + "%";

}
document.getElementById("score").textContent = ecoScore;
if (ecoScore >= 100) {
    document.getElementById("badge").innerHTML =
        "🏆 Congratulations! You are an Eco Hero!";
}

// ---------------- Eco Level ----------------

function updateLevel() {

    if (ecoPoints === 0) {
        level.textContent = "No Badge Yet 🍃";
    }
    else if (ecoPoints <= 10) {
        level.textContent = "Beginner 🌱";
    }
    else if (ecoPoints <= 20) {
        level.textContent = "Eco Friend 🌿";
    }
    else if (ecoPoints <= 40) {
        level.textContent = "Eco Hero 🌳";
    }
    else {
        level.textContent = "Eco Champion 🏆";
    }

}

// ---------------- Initial Load ----------------

points.textContent = ecoPoints;
updateLevel();
updateProgress();

// ---------------- Active Navbar ----------------

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.forEach(function(item){
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// ---------------- Scroll Animation ----------------

const animatedElements = document.querySelectorAll(
    ".card, .dashboard-card, .goals, .score"
);

function showOnScroll(){

    animatedElements.forEach(function(element){

        let position = element.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showOnScroll);

// Show visible elements immediately on page load
showOnScroll();