// ==========================================
// SKILL BAR ANIMATION
// ==========================================

const bars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.width =
                entry.target.dataset.width;

        }

    });

}, {

    threshold:0.4

});

bars.forEach(bar => {

    skillObserver.observe(bar);

});