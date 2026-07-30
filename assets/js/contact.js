// ==========================================
// CONTACT FORM
// ==========================================

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
`Thank you for your message!

This contact form will be connected to EmailJS in the next step.`
    );

    this.reset();

});