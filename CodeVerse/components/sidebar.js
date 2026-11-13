document.addEventListener("DOMContentLoaded", function () {

    const sidebarContainer =
        document.getElementById("sidebar-container");

    const layout =
        document.querySelector(".cv-layout");

    if (!sidebarContainer || !layout) {
        console.error("Sidebar container or layout not found!");
        return;
    }

    fetch("../components/sidebar.html")

        .then(function (response) {
            if (!response.ok) {
                throw new Error("Sidebar file not found!");
            }

            return response.text();
        })

        .then(function (html) {

            sidebarContainer.innerHTML = html;

            const toggle =
                document.getElementById("sidebarToggle");

            // RESTORE SIDEBAR STATE
            if (localStorage.getItem("cvSidebarClosed") === "true") {
                layout.classList.add("sidebar-collapsed");
            }

            // TOGGLE SIDEBAR
            toggle.addEventListener("click", function () {

                layout.classList.toggle("sidebar-collapsed");

                const isClosed =
                    layout.classList.contains("sidebar-collapsed");

                localStorage.setItem(
                    "cvSidebarClosed",
                    isClosed
                );

            });

            // ACTIVE PAGE
            const currentPage = document.body.dataset.page;

            document.querySelectorAll(".cv-link").forEach(function (link) {

                if (link.dataset.page === currentPage) {
                    link.classList.add("active");
                }

            });

            // LOGOUT CONFIRMATION
            const logout =
                document.getElementById("sidebarLogout");

            logout.addEventListener("click", function (event) {

                event.preventDefault();

                if (confirm("Are you sure you want to logout?")) {
                    window.location.href = logout.href;
                }

            });

        })

        .catch(function (error) {
            console.error("Sidebar Error:", error);
        });

});