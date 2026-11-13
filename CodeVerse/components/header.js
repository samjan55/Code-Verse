 document.addEventListener("DOMContentLoaded", function () {

    const headerContainer = document.getElementById("header-container");

    if (!headerContainer) {
        console.error("Header container not found!");
        return;
    }

    fetch("../components/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header file not found");
            }

            return response.text();
        })

        .then(html => {

            headerContainer.innerHTML = html;

            const page = document.body.dataset.page;

            const pages = {

                dashboard: {
                    section: "HOME",
                    page: "DASHBOARD",
                    title: "Dashboard",
                    description: "Welcome to your CodeVerse learning journey."
                },

                learning: {
                    section: "LEARNING",
                    page: "JAVASCRIPT",
                    title: "JavaScript Learning",
                    description: "Learn JavaScript. Practice coding. Build amazing projects."
                },

                quiz: {
                    section: "LEARNING",
                    page: "QUIZ",
                    title: "Quiz Center",
                    description: "Test your knowledge. Challenge yourself. Grow your skills."
                },

                entertainment: {
                    section: "FUN ZONE",
                    page: "ENTERTAINMENT",
                    title: "Entertainment Zone",
                    description: "Make learning fun with exciting coding games and challenges."
                },

                profile: {
                    section: "ACCOUNT",
                    page: "MY PROFILE",
                    title: "My Profile",
                    description: "Manage your personal information and progress."
                }

            };

            const current = pages[page] || pages.dashboard;

            // UPDATE HEADER TEXT

            const headerSection = document.getElementById("headerSection");
            const headerPage = document.getElementById("headerPage");
            const headerTitle = document.getElementById("headerTitle");
            const headerDescription = document.getElementById("headerDescription");
            const headerPoints = document.getElementById("headerPoints");

            if (headerSection) {
                headerSection.textContent = current.section;
            }

            if (headerPage) {
                headerPage.textContent = current.page;
            }

            if (headerTitle) {
                headerTitle.textContent = current.title;
            }

            if (headerDescription) {
                headerDescription.textContent = current.description;
            }

            // LOAD POINTS

            const points = localStorage.getItem("funPoints") || 50;

            if (headerPoints) {
                headerPoints.textContent = points;
            }

        })

        .catch(error => {
            console.error("Header Error:", error);
        });

});