/* =========================
   CODEVERSE PROFILE
========================= */

// DEFAULT USER INFORMATION

const defaultUser = {
    name: "CodeVerse Student",
    email: "student@example.com",
    username: "student",
    joinDate: "November 2026"
};

let user = JSON.parse(
    localStorage.getItem("codeverseUser")
) || defaultUser;


// ELEMENTS

const editModal = document.getElementById("editModal");
const passwordModal = document.getElementById("passwordModal");


// LOAD PROFILE INFORMATION

function loadProfile() {

    document.getElementById("displayName").textContent = user.name;
    document.getElementById("displayEmail").textContent = user.email;

    document.getElementById("infoName").textContent = user.name;
    document.getElementById("infoEmail").textContent = user.email;
    document.getElementById("infoUsername").textContent = "@" + user.username;
    document.getElementById("joinDate").textContent = user.joinDate;

    const letter = user.name.charAt(0).toUpperCase();

    document.getElementById("avatarLetter").textContent = letter;
    document.getElementById("topAvatar").textContent = letter;

    document.getElementById("nameInput").value = user.name;
    document.getElementById("emailInput").value = user.email;
    document.getElementById("usernameInput").value = user.username;

    updateStatistics();
    loadPhoto();
}

loadProfile();


// =========================
// STATISTICS
// =========================

function updateStatistics() {

    // Get points from Entertainment page

    const points = Number(
        localStorage.getItem("funPoints")
    ) || 0;

    const games = Number(
        localStorage.getItem("funPlayed")
    ) || 0;

    const courses = Number(
        localStorage.getItem("coursesCompleted")
    ) || 0;

    document.getElementById("totalPoints").textContent = points;

    document.getElementById("gamesPlayed").textContent = games;

    document.getElementById("coursesCompleted").textContent = courses;

    let level = "Beginner";
    let progress = 0;
    let next = 40;

    if (points >= 100) {

        level = "Advanced";
        progress = 100;
        next = "Maximum";

    } else if (points >= 40) {

        level = "Intermediate";
        progress = ((points - 40) / 60) * 100;
        next = "100";

    } else {

        level = "Beginner";
        progress = (points / 40) * 100;
        next = "40";

    }

    document.getElementById("userLevel").textContent = level;

    document.getElementById("levelTitle").textContent = level;

    document.getElementById("levelPoints").textContent =
        points + " Points";

    document.getElementById("nextLevel").textContent =
        "Next: " + next;

    document.getElementById("levelBar").style.width =
        progress + "%";
}


// =========================
// EDIT PROFILE
// =========================

function openEditModal() {
    editModal.classList.add("show");
}

function closeEditModal() {
    editModal.classList.remove("show");
}

document.getElementById("editProfileBtn").onclick =
    openEditModal;

document.getElementById("editInfoBtn").onclick =
    openEditModal;

document.getElementById("closeModal").onclick =
    closeEditModal;


// SAVE PROFILE INFORMATION

document.getElementById("profileForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        user.name = document.getElementById("nameInput").value.trim();

        user.email = document.getElementById("emailInput").value.trim();

        user.username = document.getElementById("usernameInput").value.trim();

        if (!user.name || !user.email || !user.username) {
            alert("Please fill in all fields.");
            return;
        }

        localStorage.setItem(
            "codeverseUser",
            JSON.stringify(user)
        );

        loadProfile();

        closeEditModal();

        alert("Your profile was updated successfully!");

    }
);


// =========================
// PROFILE PICTURE
// =========================

const photoInput = document.getElementById("photoInput");

document.getElementById("photoBtn").onclick = function() {
    photoInput.click();
};

photoInput.addEventListener("change", function() {

    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        alert("Please select an image smaller than 2 MB.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {

        try {

            localStorage.setItem(
                "codeversePhoto",
                event.target.result
            );

            loadPhoto();

            alert("Profile picture updated!");

        } catch (error) {

            alert("The image is too large for browser storage. Choose a smaller image.");

        }

    };

    reader.readAsDataURL(file);

});


function loadPhoto() {

    const savedPhoto = localStorage.getItem("codeversePhoto");

    const profilePhoto = document.getElementById("profilePhoto");

    if (savedPhoto) {

        profilePhoto.innerHTML = `
            <img src="${savedPhoto}" alt="Profile Picture">
        `;

    } else {

        profilePhoto.innerHTML = `
            <span id="avatarLetter">
                ${user.name.charAt(0).toUpperCase()}
            </span>
        `;

    }

}


// =========================
// CHANGE PASSWORD
// =========================

document.getElementById("changePasswordBtn").onclick =
    function() {
        passwordModal.classList.add("show");
    };

document.getElementById("closePassword").onclick =
    function() {
        passwordModal.classList.remove("show");
    };


document.getElementById("passwordForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const newPassword =
            document.getElementById("newPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (newPassword.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;

        }

        if (newPassword !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }

        alert(
            "Password form validated. Connect this feature to your authentication system to securely change the account password."
        );

        this.reset();

        passwordModal.classList.remove("show");

    }
);


// =========================
// RECENT ACTIVITY
// =========================

function loadActivities() {

    const activityList =
        document.getElementById("activityList");

    const games = Number(
        localStorage.getItem("funPlayed")
    ) || 0;

    const points = Number(
        localStorage.getItem("funPoints")
    ) || 0;

    activityList.innerHTML = "";

    if (games === 0) {

        activityList.innerHTML = `
            <div class="empty-activity">
                <span>✨</span>
                <p>Your activities will appear here.</p>
            </div>
        `;

        return;
    }

    activityList.innerHTML = `

        <div class="activity-item">

            <div class="activity-icon">🎮</div>

            <div>
                <h4>Played Coding Games</h4>
                <p>${games} games completed</p>
            </div>

        </div>

        <div class="activity-item">

            <div class="activity-icon">⭐</div>

            <div>
                <h4>Earned Points</h4>
                <p>${points} total points collected</p>
            </div>

        </div>

    `;

}

loadActivities();


// =========================
// LOGOUT
// =========================

document.getElementById("logoutBtn").onclick =
    function(event) {

        event.preventDefault();

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (confirmLogout) {

            window.location.href = "../Login/login.html";

        }

    };


// CLOSE MODALS BY CLICKING OUTSIDE

editModal.addEventListener("click", function(event) {

    if (event.target === editModal) {
        closeEditModal();
    }

});

passwordModal.addEventListener("click", function(event) {

    if (event.target === passwordModal) {
        passwordModal.classList.remove("show");
    }

});