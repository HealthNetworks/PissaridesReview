// script.js

// Get all images with class "person"
var images = document.querySelectorAll('.person img');

// Get the modal
var modal = document.getElementById("bioModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to display the modal with the clicked image's alt text
function displayBio(event) {
    // Check if the clicked element is not a social icon
    if (!event.target.closest('.social-icons')) {
        var bioText = event.target.alt;
        document.getElementById("bioContent").innerHTML = "<p>" + bioText + "</p>";
        modal.style.display = "block";
    }
}

// Loop through each image and add a click event listener
images.forEach(function(image) {
    image.addEventListener('click', displayBio);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});
