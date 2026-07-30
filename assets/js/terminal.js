// =====================================================
// CYBER TERMINAL v3.0
// Bisheswar Bhattacharjee
// =====================================================

const terminalBody = document.getElementById("terminal-body");
const input = document.getElementById("command");

const commands = {

help: `
Available Commands

help         Show all commands
whoami       About me
skills       Technical skills
projects     My cybersecurity projects
education    Education details
github       Open GitHub
linkedin     Open LinkedIn
contact      Contact details
resume       Download Resume
certs        Certifications
goals        Career Goals
neofetch     System Information
pwd          Current Directory
date         Current Date
clear        Clear Terminal
`,

whoami: `
Name : Bisheswar Bhattacharjee

Cybersecurity Engineer

Currently pursuing B.Tech in Computer Science & Engineering.

Focused on:

• Linux
• Networking
• Python
• Nmap
• Web Security
• Ethical Hacking
`,

skills: `
Technical Skills

✓ Python

✓ Linux

✓ Networking

✓ Nmap

✓ Burp Suite

✓ Wireshark

✓ Git & GitHub

✓ Web Security

✓ Bash Scripting

✓ Security Automation
`,

projects: `
Cybersecurity Projects

1. Advanced Port Scanner

2. Linux Security Audit Tool

3. Malware Static Analyzer

4. Packet Sniffer

5. HTTP Header Analyzer

6. SSL Certificate Analyzer

7. Web Tech Detector

8. Subdomain Scanner
`,

education: `
Education

B.Tech in Computer Science & Engineering

Currently pursuing

Focused on Cybersecurity & Python Development
`,

contact: `
Email

BisheswarBhattacharjee@gmail.com

GitHub

https://github.com/Bisheswar-94

LinkedIn

https://www.linkedin.com/in/bisheswar-bhattacharjee-4810a1337/
`,

goals: `
Career Goal

Become an expert Cybersecurity Engineer

Specializing in

• Penetration Testing

• Malware Analysis

• Security Automation

• Cloud Security

• Digital Forensics
`,

certs: `
Currently Learning

✓ Linux

✓ Networking

✓ Python Security

✓ OWASP Top 10

✓ Ethical Hacking

✓ TryHackMe Labs
`,

pwd: "/home/bisheswar",

neofetch: `
Bisheswar@CyberPortfolio

OS            CyberPortfolio Linux

Shell         Bash

Role          Cybersecurity Engineer

Language      Python

Focus         Web Security

Editor        VS Code

GitHub        Bisheswar-94
`

};

// ====================================
// Focus input
// ====================================

document.addEventListener("click", () => {

    input.focus();

});

// ====================================
// Handle Commands
// ====================================

input.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    const cmd = input.value.trim().toLowerCase();

    if(cmd==="") return;

    printCommand(cmd);

    execute(cmd);

    input.value="";

});

function printCommand(command){

    const div=document.createElement("div");

    div.className="command";

    div.innerHTML=`<span class="prompt">bisheswar@portfolio:~$</span> ${command}`;

    terminalBody.insertBefore(div,document.querySelector(".input-line"));

}

function printOutput(text){

    const div=document.createElement("div");

    div.className="response";

    div.textContent=text;

    terminalBody.insertBefore(div,document.querySelector(".input-line"));

    terminalBody.scrollTop=terminalBody.scrollHeight;

}

function execute(cmd){

    switch(cmd){

        case "help":

            printOutput(commands.help);

            break;

        case "whoami":

            printOutput(commands.whoami);

            break;

        case "skills":

            printOutput(commands.skills);

            break;

        case "projects":

            printOutput(commands.projects);

            break;

        case "education":

            printOutput(commands.education);

            break;

        case "contact":

            printOutput(commands.contact);

            break;

        case "goals":

            printOutput(commands.goals);

            break;

        case "certs":

            printOutput(commands.certs);

            break;

        case "pwd":

            printOutput(commands.pwd);

            break;

        case "neofetch":

            printOutput(commands.neofetch);

            break;

        case "date":

            printOutput(new Date().toString());

            break;

        case "github":

            window.open(
            "https://github.com/Bisheswar-94",
            "_blank");

            printOutput("Opening GitHub...");

            break;

        case "linkedin":

            window.open(
            "https://www.linkedin.com/in/bisheswar-bhattacharjee-4810a1337/",
            "_blank");

            printOutput("Opening LinkedIn...");

            break;

        case "resume":

            window.open(
            "assets/resume/BISHESWAR_CV.pdf",
            "_blank");

            printOutput("Opening Resume...");

            break;

        case "clear":

            document.querySelectorAll(".command,.response").forEach(el=>el.remove());

            break;

        default:

            printOutput(

`Command not found: ${cmd}

Type "help" to see available commands.`

            );

    }

}