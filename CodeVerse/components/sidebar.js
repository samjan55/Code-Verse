 (function () {

    const sidebarContainer = document.getElementById("sidebar-container");
    const layout = document.querySelector(".cv-layout");

    if (!sidebarContainer || !layout) return;

    // اگر sidebar قبلاً بسته بوده، قبل از اولین نمایش اعمال شود
    try {
        if (localStorage.getItem("cvSidebarClosed") === "true") {
            layout.classList.add("sidebar-collapsed");
        }
    } catch (e) {}

    sidebarContainer.innerHTML = `
<aside class="cv-sidebar" id="cvSidebar">

    <div class="cv-sidebar-header">
        <a href="../Dashboard/dashboard.html" class="cv-logo">
            <span class="cv-logo-icon">✦</span>
            <span class="cv-logo-text">CODE<span>VERSE</span></span>
        </a>
        <button class="cv-toggle" id="sidebarToggle">☰</button>
    </div>

    <div class="cv-user">
        <div class="cv-user-avatar">👩‍💻</div>
        <div class="cv-user-info">
            <h4>CodeVerse Student</h4>
            <p>Welcome back!</p>
        </div>
    </div>

    <p class="cv-menu-title">MAIN MENU</p>

    <nav class="cv-navigation" id="cvNav">

        <div class="cv-lantern-glow"></div>
        <span class="cv-rope"></span>
        <div class="cv-lamp">
            <svg viewBox="0 0 34 52" aria-hidden="true">
                <path d="M17 0v8" stroke="#8a93a6" stroke-width="1.5"/>
                <path d="M9 10h16l-3-5h-10z" fill="#3b4660"/>
                <rect x="8" y="10" width="18" height="30" rx="3"
                      fill="#ffb454" fill-opacity=".2" stroke="#8a93a6" stroke-width="1.5"/>
                <path class="cv-flame" d="M17 36c-4-3-4-8 0-14 4 6 4 11 0 14z" fill="#ffc46b"/>
                <path d="M13 40h8l2 6h-12z" fill="#3b4660"/>
            </svg>
        </div>

        <a href="../Dashboard/dashboard.html" class="cv-link" data-page="dashboard" title="Dashboard">
            <span class="cv-icon">⌂</span>
            <span class="cv-link-text">Dashboard</span>
        </a>

        <a href="../Learning/learning.html" class="cv-link" data-page="learning" title="Learning">
            <span class="cv-icon">▣</span>
            <span class="cv-link-text">Learning</span>
        </a>

        <a href="../Quiz/quiz.html" class="cv-link" data-page="quiz" title="Quiz">
            <span class="cv-icon">✎</span>
            <span class="cv-link-text">Quiz</span>
        </a>

        <a href="../Entertainment/entertainment.html" class="cv-link" data-page="entertainment" title="Entertainment">
            <span class="cv-icon">♧</span>
            <span class="cv-link-text">Entertainment</span>
        </a>

        <a href="../profile/profile.html" class="cv-link" data-page="profile" title="My Profile">
            <span class="cv-icon">◉</span>
            <span class="cv-link-text">My Profile</span>
        </a>

    </nav>

    <div class="cv-sidebar-bottom">
        <div class="cv-bottom-icon">🚀</div>
        <div class="cv-bottom-text">
            <h4>Keep Growing!</h4>
            <p>Your future is written in code.</p>
        </div>
    </div>

    <a href="../Login/login.html" class="cv-logout" id="sidebarLogout" title="Logout">
        <span class="cv-icon">↪</span>
        <span class="cv-link-text">Logout</span>
    </a>

</aside>`;

    // دکمهٔ باز/بسته کردن
    document.getElementById("sidebarToggle").addEventListener("click", function () {
        layout.classList.toggle("sidebar-collapsed");
        try {
            localStorage.setItem(
                "cvSidebarClosed",
                layout.classList.contains("sidebar-collapsed")
            );
        } catch (e) {}
    });

    // صفحهٔ فعال
    const currentPage = document.body.dataset.page;
    document.querySelectorAll(".cv-link").forEach(function (link) {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });

    // خروج
    const logout = document.getElementById("sidebarLogout");
    logout.addEventListener("click", function (event) {
        event.preventDefault();
        if (confirm("Are you sure you want to logout?")) {
            window.location.href = logout.href;
        }
    });

    initLantern();

})();


/* ---------------- LANTERN ---------------- */

function initLantern() {

    const nav = document.getElementById("cvNav");
    if (!nav) return;

    const lamp   = nav.querySelector(".cv-lamp");
    const links  = Array.from(nav.querySelectorAll(".cv-link"));
    const active = nav.querySelector(".cv-link.active") || links[0];

    let lampY = null;
    let timer;

    function centerY(el) {
        const n = nav.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        return r.top - n.top + r.height / 2;
    }

    function light(y) {

        const tilt = lampY === null
            ? 0
            : Math.max(-12, Math.min(12, (y - lampY) * -0.15));

        lampY = y;

        lamp.style.setProperty("--tilt", tilt + "deg");
        lamp.classList.add("moving");

        clearTimeout(timer);
        timer = setTimeout(function () {
            lamp.classList.remove("moving");
        }, 350);

        nav.style.setProperty("--y", y + "px");

        const rowH = links[0].offsetHeight + 8;

        links.forEach(function (link) {
            const d = Math.abs(centerY(link) - y) / rowH;
            const lit = Math.max(0, Math.min(1, 1 - d / 1.6));
            link.style.setProperty("--lit", lit.toFixed(2));
        });
    }

    links.forEach(function (link) {
        link.addEventListener("mouseenter", function () { light(centerY(link)); });
        link.addEventListener("focus", function () { light(centerY(link)); });
    });

    nav.addEventListener("mouseleave", function () { light(centerY(active)); });
    window.addEventListener("resize", function () { light(centerY(active)); });

    nav.classList.add("no-anim");
    light(centerY(active));
    nav.offsetHeight;
    nav.classList.remove("no-anim");
}