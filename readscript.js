function exploreReadmissionForm() {
    // Replace 'path/to/readmission-form.pdf' with the actual path to your PDF file
    var pdfPath = 'PUP-Application-for-Re-admission.pdf';

    // Open the PDF file in a new browser window or tab
    window.open(pdfPath, '_blank');
}

function exploreGuidelines() {
    // Add code to handle the "Guidelines" button click
    // You can open another PDF file or perform a different action
}

function exploreHelpfulTips() {
    // Add code to handle the "Helpful Tips" button click
    // You can open another PDF file or perform a different action
}

//REVEAL 
document.addEventListener('DOMContentLoaded', function () {
    // Add a scroll event listener to trigger the reveal function
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealCenter = revealTop + reveals[i].offsetHeight / 2;
            var revealPoint = 1; // Set reveal point to center of the window

            if (revealCenter < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } 
        }
    }
});

//NAVIGATION
document.addEventListener('DOMContentLoaded', function () {
    var prevScrollPos = window.pageYOffset;
    var nav = document.querySelector('nav');

    // Add a scroll event listener to toggle the nav-hidden class
    window.addEventListener('scroll', function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos < currentScrollPos) {
            // Scrolling down, hide the navigation
            nav.classList.add('nav-hidden');
        } else {
            // Scrolling up, show the navigation
            nav.classList.remove('nav-hidden');
        }

        prevScrollPos = currentScrollPos;
    });

    // Add a scroll event listener to trigger the reveal function
    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100; // Adjust this value to trigger the reveal earlier

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } 
        }
    }

    // Add click event listener for the "Home" link
    var homeLink = document.querySelector('nav ul li:first-child a');
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToTop();
    });

    // Add click event listener for the "SIGN IN" button
    var signInButton = document.querySelector('.btn');
    signInButton.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('login');
    });

    var contactUsLink = document.querySelector('nav ul li:last-child a');
    contactUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('contact-us');
    });

    // Add click event listener for the "About" link
    var aboutLink = document.querySelector('nav ul li:nth-child(2) a');
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('getting-started');
    });

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function to scroll to the top of the webpage
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
        });
    }
});

    
