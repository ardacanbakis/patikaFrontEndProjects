// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Preload the first class "Yoga"
document.addEventListener('DOMContentLoaded', () => {
  showImage('Yoga');
});

// Active Buttons under "Our Classes"
function showImage(sport) {
    var imageContainer = document.querySelector('.image-container');
    var classDescription = document.querySelector('.class-description');
    var imagePath = 'assets/' + sport.toLowerCase() + '.jpg'; 
    var classText = getClassDescription(sport); 
    imageContainer.innerHTML = '<img src="' + imagePath + '" alt="' + sport + '">';
    classDescription.innerHTML = classText;

    // Highlight the active class button
    document.querySelectorAll('.class-buttons button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.class-buttons button[onclick="showImage('${sport}')"]`).classList.add('active');
}

function getClassDescription(sport) {
    switch (sport) {
        case 'Yoga':
            return `
                <h3>Why Yoga?</h3>
                <ul>
                    <li>Improve flexibility and balance</li>
                    <li>Reduce stress and anxiety</li>
                    <li>Boost physical and mental health</li>
                </ul><br>
                <h3>When are the Yoga classes?</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am<br><br>Monday-Tuesday: 10:00am - 12:00pm<br><br>Wednesday-Friday: 3:00pm - 6:00pm</p>
            `;
        case 'Group':
            return `
                <h3>Why Group Training</h3>
                <ul>
                    <li>Team spirit workouts</li>
                    <li>Motivating atmosphere</li>
                    <li>Effective training plans</li>
                </ul><br>
                <h3>Training Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am<br><br>Monday-Tuesday: 10:00am - 12:00pm<br><br>Wednesday-Friday: 3:00pm - 6:00pm</p>
            `;
        case 'Solo':
            return `
                <h3>Why Solo Training</h3>
                <ul>
                    <li>Personalized workout plans</li>
                    <li>Direct coaching support</li>
                    <li>Goal-oriented training</li>
                </ul><br>
                <h3>Solo Training Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am<br><br>Monday-Tuesday: 10:00am - 12:00pm<br><br>Wednesday-Friday: 3:00pm - 6:00pm</p>
            `;
        case 'Stretching':
            return `
                <h3>Why Stretching Exercises</h3>
                <ul>
                    <li>Improve posture and alignment</li>
                    <li>Reduce muscle tension</li>
                    <li>Enhance flexibility and mobility</li>
                </ul><br>
                <h3>Stretching classes Schedule</h3>
                <p>Saturday-Sunday: 8:00am - 10:00am<br><br>Monday-Tuesday: 10:00am - 12:00pm<br><br>Wednesday-Friday: 3:00pm - 6:00pm</p>
            `;
        default:
            return(Yoga);
    }
}


// BMI Calculator
document.getElementById('height').addEventListener('input', updateBMIArrow);
document.getElementById('weight').addEventListener('input', updateBMIArrow);

function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    var weight = parseFloat(document.getElementById('weight').value);
    return (weight / (height ** 2)).toFixed(2); // BMI formula and rounding to 2 decimal places
}

function updateBMIArrow() {
    var bmi = calculateBMI();
    if (!isNaN(bmi)) { // Check if BMI is a number
        var arrowPosition = mapBMIToPixels(bmi);
        document.getElementById('orange-arrow').style.left = arrowPosition + 'px';
        // Set the BMI value in the bmi-result span
        document.getElementById('bmi-result').innerHTML = bmi; 
    } else {
        // Clear the BMI result if inputs are invalid
        document.getElementById('bmi-result').innerHTML = '';
    }
}

function mapBMIToPixels(bmi) {
    const minBMI = 18.5;
    const maxBMI = 30;
    const pixelRange = document.getElementById('bmi-index-image').clientWidth; // Get the width of the BMI image

    // Map the BMI to a value between 0 (minBMI) and 1 (maxBMI)
    const positionRatio = (bmi - minBMI) / (maxBMI - minBMI);

    // Convert the ratio to a pixel value within the image width
    return Math.max(0, Math.min(positionRatio * pixelRange, pixelRange));
}


// Smooth scrolling for navbar buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Nav bar while scrolling
let navbar = document.querySelector('#navbar') 
window.addEventListener('scroll',(e)=>{
    let scroll = window.scrollY
    if (scroll > 250) {
        navbar.style.backgroundColor = '#355592'  
    } else if (scroll < 250) {
        navbar.style.backgroundColor = 'transparent'
    }
});
