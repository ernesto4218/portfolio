// pointer
const circle = document.getElementById('circle');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const delay = 100; // Adjust delay in milliseconds
const delay2 = 200; // Adjust delay in milliseconds
const delay3 = 400;

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Schedule circle update with a delay
    setTimeout(() => {
        circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
        circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;
        
    }, delay);

    setTimeout(() => {
        circle2.style.left = `${mouseX - circle2.offsetWidth / 2}px`;
        circle2.style.top = `${mouseY - circle2.offsetHeight / 2}px`;
    }, delay2);

    setTimeout(() => {
        circle3.style.left = `${mouseX - circle3.offsetWidth / 2}px`;
        circle3.style.top = `${mouseY - circle3.offsetHeight / 2}px`;
    }, delay3);

    const cursorStyle = window.getComputedStyle(document.body).cursor;

    if (cursorStyle === 'pointer') {
        circle.style.display = 'none';  // Hide the 
        console.log("pointer");
    } else {
        circle.style.display = 'block'; // Show the circle
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    var navLinks = document.querySelectorAll('.navigator a');
    var sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

    function updateNavOnScroll() {
        var scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove 'SelectedNav' class from all links
                navLinks.forEach(navLink => navLink.classList.remove('SelectedNav'));

                // Add 'SelectedNav' class to the current section's link
                navLinks[index].classList.add('SelectedNav');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateNavOnScroll);

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'SelectedNav' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('SelectedNav'));

            // Add 'SelectedNav' class to the clicked link
            this.classList.add('SelectedNav');

            // Scroll to the corresponding section smoothly
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            // Scroll with smooth behavior
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
