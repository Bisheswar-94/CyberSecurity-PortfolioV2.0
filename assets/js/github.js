// =======================================
// GitHub Projects Loader
// =======================================

const GITHUB_USERNAME = "Bisheswar-94";

document.addEventListener("DOMContentLoaded", loadGitHubProjects);

async function loadGitHubProjects() {

    const container = document.querySelector("#projects .cards");

    if (!container) {
        console.error("Projects container not found.");
        return;
    }

    container.innerHTML = `
        <div class="loading">
            Loading GitHub Projects...
        </div>
    `;

    try {

        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch GitHub repositories.");
        }

        const repos = await response.json();

        container.innerHTML = "";

        repos.forEach(repo => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${repo.name.replace(/-/g, " ")}</h3>

                <p>
                    ${repo.description || "Cybersecurity Project"}
                </p>

                <div class="repo-info">

                    <span>⭐ ${repo.stargazers_count}</span>

                    <span>
                        ${repo.language || "Unknown"}
                    </span>

                </div>

                <a
                    href="${repo.html_url}"
                    target="_blank"
                    class="btn"
                >
                    View Repository
                </a>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="card">
                <h3>Unable to Load Projects</h3>

                <p>
                    GitHub API is unavailable or rate limit exceeded.
                </p>
            </div>
        `;
    }
}