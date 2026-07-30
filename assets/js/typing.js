// ==========================================
// TYPING EFFECT
// CyberPortfolio v3.0
// ==========================================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const roles = [

        "Cybersecurity Engineer",
        "Python Security Developer",
        "Linux Enthusiast",
        "Network Security Learner",
        "Web Security Researcher",
        "Ethical Hacking Enthusiast"

    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let typingSpeed = 90;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentRole.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {

                    roleIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 45 : typingSpeed);

    }

    typeEffect();

}