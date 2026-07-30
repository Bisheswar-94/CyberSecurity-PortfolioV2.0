// ==========================================
// CYBER PORTFOLIO v3.0
// Main JavaScript
// ==========================================

// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";

    }, 2000);

});

// ==========================
// Sticky Navbar
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 0 20px rgba(0,245,255,.15)";

    } else {

        header.style.background = "rgba(5,8,22,.75)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

document.querySelectorAll(".card,.stat-card").forEach((el)=>{

observer.observe(el);

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ==========================
// Active Navbar Link
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Button Ripple Effect
// ==========================

document.querySelectorAll(".btn,.btn2").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-this.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

// ==========================
// Console Message
// ==========================

console.log(

"%cWelcome to Bisheswar's Cyber Portfolio",

"color:#00F5FF;font-size:18px;font-weight:bold;"

);

console.log(

"%cGitHub : https://github.com/Bisheswar-94",

"color:#8B5CF6;font-size:14px;"

);