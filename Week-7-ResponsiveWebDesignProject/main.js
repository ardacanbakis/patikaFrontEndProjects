// Active Buttons under "Our Classes"
function showImage(sport) {
  console.log('Button clicked:', sport);
  var imageContainer = document.querySelector('.image-container');
  var classDescription = document.querySelector('.class-description');
  var imagePath = 'assets/' + sport.toLowerCase() + '.jpg'; 
  var classText = getClassDescription(sport); 
  imageContainer.innerHTML = '<img src="' + imagePath + '" alt="' + sport + '">';
  classDescription.innerText = classText;
}

// Show text related to selection
function getClassDescription(sport) {
    switch (sport) {
        case 'Yoga':
            return 'Our certified instructors guide you through poses, meditation, and breathing techniques, fostering a deep connection between mind, body, and soul.';
        case 'Group':
            return 'Our group classes offer a diverse range of workouts including HIIT, cardio, strength training, and dance fitness. Get ready to sweat, smile, and push your limits!';
        case 'Solo':
            return 'Whether you are aiming for weight loss, muscle gain, or overall fitness improvement, our solo training sessions provide individualized guidance and support.';
        case 'Stretching':
            return 'Guided by experienced instructors, you will learn proper stretching techniques and therapeutic exercises to alleviate stiffness and enhance recovery.';
        default:
            return '';
    }
}

//BMI Calculator

// Listen for input in the weight and height fields
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
    // Map the BMI to the arrow's left offset value
    // You'll need to determine the correct mapping based on your image's scale
    var arrowPosition = someFunctionToMapBMItoPixels(bmi);
    document.getElementById('orange-arrow').style.left = arrowPosition + 'px';
  }
}

function someFunctionToMapBMItoPixels(bmi) {
  // This function should convert the BMI value to a pixel offset for the arrow
  // You need to customize this logic to fit the scale of your BMI image
  // For example, if BMI of 18.5 should be at 10% from the left, and 30 should be at 90%:
  const minBMI = 18;
  const maxBMI = 35;
  const pixelRange = document.getElementById('bmi-index-image').clientWidth; // Get the width of the BMI image

  // Map the BMI to a value between 0 (minBMI) and 1 (maxBMI)
  const positionRatio = (bmi - minBMI) / (maxBMI - minBMI);

  // Convert the ratio to a pixel value within the image width
  return positionRatio * pixelRange;
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
    if (scroll > 120) {
      navbar.style.backgroundColor = '#355592'  
    } else if (scroll < 120) {
      navbar.style.backgroundColor = 'transparent'
 }});
