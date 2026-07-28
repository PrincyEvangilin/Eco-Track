// ---------------- Eco Score ----------------

let ecoScore = 0;

let waterDone = false;
let electricityDone = false;
let carbonDone = false;


function updateScore(points){

    ecoScore += points;

    document.getElementById("score").textContent = ecoScore;


    if(ecoScore >= 100){

        document.getElementById("badge").innerHTML =
        "🏆 Congratulations! You are an Eco Hero!";

    }

}



// ---------------- Get Started ----------------

document.getElementById("startBtn").addEventListener("click",function(){

    document.querySelector(".features").scrollIntoView({
        behavior:"smooth"
    });

});




// ---------------- Water Tracker ----------------

document.getElementById("waterBtn").addEventListener("click",function(){

    let water = Number(document.getElementById("waterInput").value);

    let result = document.getElementById("waterResult");


    if(water <= 100){

        result.innerHTML="🌿 Excellent! You're saving water.";


        if(!waterDone){

            updateScore(25);
            waterDone = true;

        }


    }

    else if(water <= 200){


        result.innerHTML="💧 Good! Try to save a little more.";


        if(!waterDone){

            updateScore(15);
            waterDone = true;

        }


    }

    else{


        result.innerHTML="⚠️ High water usage. Save more water!";


        if(!waterDone){

            updateScore(5);
            waterDone = true;

        }


    }


});





// ---------------- Electricity Tracker ----------------


document.getElementById("electricityBtn").addEventListener("click",function(){


    let units = Number(document.getElementById("electricityInput").value);

    let result = document.getElementById("electricityResult");



    if(units <= 200){


        result.innerHTML="🌿 Excellent! Eco-friendly usage.";


        if(!electricityDone){

            updateScore(25);
            electricityDone=true;

        }


    }


    else if(units <= 500){


        result.innerHTML="⚡ Moderate usage.";


        if(!electricityDone){

            updateScore(15);
            electricityDone=true;

        }


    }


    else{


        result.innerHTML="🚨 High electricity usage.";


        if(!electricityDone){

            updateScore(5);
            electricityDone=true;

        }


    }



});






// ---------------- Carbon Tracker ----------------


document.getElementById("carbonBtn").addEventListener("click",function(){


    let km = Number(document.getElementById("carbonInput").value);

    let result = document.getElementById("carbonResult");



    if(km <= 10){


        result.innerHTML="🌿 Low carbon footprint.";


        if(!carbonDone){

            updateScore(25);
            carbonDone=true;

        }


    }


    else if(km <= 30){


        result.innerHTML="🚶 Moderate carbon footprint.";


        if(!carbonDone){

            updateScore(15);
            carbonDone=true;

        }


    }


    else{


        result.innerHTML="🚗 High carbon footprint.";


        if(!carbonDone){

            updateScore(5);
            carbonDone=true;

        }


    }



});






// ---------------- Waste Tracker ----------------


document.getElementById("wasteBtn").addEventListener("click",function(){


    let waste=document.getElementById("wasteType").value;

    let result=document.getElementById("wasteResult");



    if(waste==="plastic"){

        result.innerHTML="♻ Plastic can be recycled.";

    }

    else if(waste==="paper"){

        result.innerHTML="📄 Paper is recyclable.";

    }

    else if(waste==="glass"){

        result.innerHTML="🍾 Glass is recyclable.";

    }

    else if(waste==="organic"){

        result.innerHTML="🌱 Organic waste can be composted.";

    }

    else{

        result.innerHTML="❌ Please select waste type.";

    }


});






// ---------------- Dark Mode ----------------


let themeBtn=document.getElementById("themeBtn");


themeBtn.addEventListener("click",function(){


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }


});






// ---------------- Eco Goals ----------------


let goals=document.querySelectorAll(".goal");

let points=document.getElementById("points");

let level=document.getElementById("level");

let progress=document.getElementById("progress");

let completed=document.getElementById("completed");


let ecoPoints=0;



goals.forEach(function(goal){


    goal.addEventListener("change",function(){


        ecoPoints=document.querySelectorAll(".goal:checked").length*10;


        points.textContent=ecoPoints;


        updateProgress();

        updateLevel();


    });


});





function updateProgress(){


    let completedGoals=document.querySelectorAll(".goal:checked").length;


    completed.textContent=completedGoals;


    let percentage=(completedGoals/goals.length)*100;


    progress.style.width=percentage+"%";


}





function updateLevel(){


    if(ecoPoints===0){

        level.textContent="No Badge Yet 🍃";

    }

    else if(ecoPoints<=10){

        level.textContent="Beginner 🌱";

    }

    else if(ecoPoints<=20){

        level.textContent="Eco Friend 🌿";

    }

    else{

        level.textContent="Eco Hero 🌳";

    }


}


updateProgress();

updateLevel();







// ---------------- Navbar Active ----------------


let navLinks=document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link){


    link.addEventListener("click",function(){


        navLinks.forEach(function(item){

            item.classList.remove("active");

        });


        this.classList.add("active");


    });


});







// ---------------- Scroll Animation ----------------


let animatedElements=document.querySelectorAll(
".card,.dashboard-card,.goals,.score"
);



function showOnScroll(){


    animatedElements.forEach(function(element){


        let position=element.getBoundingClientRect().top;


        if(position < window.innerHeight-100){

            element.classList.add("show");

        }


    });


}



window.addEventListener("scroll",showOnScroll);


showOnScroll();