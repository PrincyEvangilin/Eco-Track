let ecoScore = 0;

function updateScore(points) {

    ecoScore += points;

    document.getElementById("score").textContent = ecoScore;

    if (ecoScore >= 100) {
        document.getElementById("badge").innerHTML =
        "🏆 Congratulations! You are an Eco Hero!";
    }

}
const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
    document.querySelector(".features").scrollIntoView({
        behavior: "smooth"
    });
});
const waterBtn = document.getElementById("waterBtn");

waterBtn.addEventListener("click", function () {

    const water = Number(document.getElementById("waterInput").value);

    const result = document.getElementById("waterResult");

    if (water <= 100) {
    result.innerHTML = "🌿 Excellent! You're saving water.";
    updateScore(25);
}
else if (water <= 200) {
    result.innerHTML = "💧 Good! Try to save a little more.";
    updateScore(15);
}
else {
    result.innerHTML = "⚠️ High water usage. Save more water!";
    updateScore(5);
}

});
const electricityBtn = document.getElementById("electricityBtn");

electricityBtn.addEventListener("click", function () {

    const units = Number(document.getElementById("electricityInput").value);
    const result = document.getElementById("electricityResult");

    if (units <= 200) {
    result.innerHTML = "🌿 Excellent! Eco-friendly usage.";
    updateScore(25);
}
else if (units <= 500) {
    result.innerHTML = "⚡ Moderate usage.";
    updateScore(15);
}
else {
    result.innerHTML = "🚨 High electricity usage.";
    updateScore(5);
}
});
const carbonBtn = document.getElementById("carbonBtn");

carbonBtn.addEventListener("click", function () {

    const km = Number(document.getElementById("carbonInput").value);

    const result = document.getElementById("carbonResult");
if (isNaN(km) || km <= 0) {
        result.innerHTML = "❌ Please enter a valid distance.";
    }
    else if (km <= 10) {
    result.innerHTML = "🌿 Low carbon footprint.";
    updateScore(25);
}
else if (km <= 30) {
    result.innerHTML = "🚶 Moderate carbon footprint.";
    updateScore(15);
}
else {
    result.innerHTML = "🚗 High carbon footprint.";
    updateScore(5);
}

});
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
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀️";
    }
    else{
        themeBtn.innerHTML="🌙";
    }

});
let goals = document.querySelectorAll(".goal");
let points = document.getElementById("points");
let level = document.getElementById("level");
let progress = document.getElementById("progress");
let completed = document.getElementById("completed");

let ecoPoints = localStorage.getItem("ecoPoints") || 0;
ecoPoints = Number(ecoPoints);
let savedGoals = JSON.parse(localStorage.getItem("savedGoals")) || [];
goals.forEach(function(goal, index) {

    if (savedGoals.includes(index)) {
        goal.checked = true;
    }

});
goals.forEach(function(goal, index) {

    goal.addEventListener("change", function() {

        if (goal.checked) {
    ecoPoints += 10;
    savedGoals.push(index);
} 
else {
    ecoPoints -= 10;
    savedGoals = savedGoals.filter(function(item){
        return item !== index;
    });
}
        points.textContent = ecoPoints;

        updateProgress();
        updateLevel();
        localStorage.setItem("ecoPoints", ecoPoints);
        localStorage.setItem("savedGoals", JSON.stringify(savedGoals));

    });

});


function updateProgress() {

    let completedGoals = document.querySelectorAll(".goal:checked").length;

    let percentage = (completedGoals / goals.length) * 100;

    progress.style.width = percentage + "%";

    completed.textContent = completedGoals;

}
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
    else {
        level.textContent = "Eco Hero 🌳";
    }

}
points.textContent = ecoPoints;
updateLevel();
updateProgress();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

    link.addEventListener("click",function(){

        navLinks.forEach(function(item){
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
const animatedElements = document.querySelectorAll(
    ".card, .dashboard-card, .goals, .score"
);


window.addEventListener("scroll", function(){

    animatedElements.forEach(function(element){

        let position = element.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            element.classList.add("show");
        }

    });

});
