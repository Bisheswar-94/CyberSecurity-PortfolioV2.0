console.log("GitHub JS Loaded");

const username = "Bisheswar-94";

document.addEventListener("DOMContentLoaded", () => {

    const projectContainer = document.querySelector("#projects .cards");

    console.log("Container:", projectContainer);

    if (!projectContainer) {
        console.error("Project container not found!");
        return;
    }

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then(response => {
            console.log("Response:", response.status);
            return response.json();
        })
        .then(repos => {

            console.log("Repositories:", repos);

            projectContainer.innerHTML = "";

            repos.slice(0, 8).forEach(repo => {

                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <h3>${repo.name.replace(/-/g, " ")}</h3>

                    <p>${repo.description || "Cybersecurity Project"}</p>

                    <a href="${repo.html_url}" target="_blank" class="btn">
                        View Repository
                    </a>
                `;

               console.log(card);
               projectContainer.appendChild(card);
            });

        })
        .catch(error => {
            console.error("Fetch Error:", error);
        });

});