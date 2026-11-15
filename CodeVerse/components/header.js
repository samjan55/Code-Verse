 (function () {

    const container = document.getElementById("header-container");
    if (!container) return;

    const pages = {
        dashboard:     { icon: "⌂", title: "Dashboard",     tagline: "Welcome to your learning journey." },
        learning:      { icon: "▣", title: "Learning",      tagline: "Learn. Practice. Build amazing projects." },
        quiz:          { icon: "✎", title: "Quiz",          tagline: "Test your knowledge. Grow your skills." },
        entertainment: { icon: "♧", title: "Entertainment", tagline: "Make learning fun with coding games." },
        profile:       { icon: "◉", title: "My Profile",    tagline: "Manage your information and progress." }
    };

    const current = pages[document.body.dataset.page] || pages.dashboard;

    let points = 50;
    try { points = localStorage.getItem("funPoints") || 50; } catch (e) {}

    container.innerHTML = `
<header class="cv-header">

    <span class="cv-header-code">&lt;/&gt;</span>

    <div class="cv-header-left">

        <div class="cv-header-breadcrumb">
            <span>✦ CODEVERSE</span>
            <i>/</i>
            <strong>${current.title.toUpperCase()}</strong>
        </div>

        <div class="cv-header-titlerow">
            <span class="cv-header-icon">${current.icon}</span>
            <h1 class="cv-header-title">${current.title}</h1>
        </div>

        <p class="cv-header-tagline">${current.tagline}</p>

    </div>

    <div class="cv-header-right">

        <div class="cv-header-points">
            <span>⭐</span>
            <div>
                <strong id="headerPoints">${points}</strong>
                <small>Total Points</small>
            </div>
        </div>

        <button class="cv-header-bell" title="Notifications">
            🔔
            <span class="cv-header-dot"></span>
        </button>

        <div class="cv-header-user">
            <div class="cv-header-avatar">U</div>
            <div class="cv-header-user-info">
                <strong>CodeVerse Student</strong>
                <small>Student Account</small>
            </div>
        </div>

    </div>

</header>`;

})();