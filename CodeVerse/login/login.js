 /* ================= ELEMENTS ================= */

const earth = document.getElementById("startEarth");
const instruction = document.getElementById("earthInstruction");

const modalOverlay = document.getElementById("modalOverlay");
const loginCard = document.getElementById("loginCard");
const closeLogin = document.getElementById("closeLogin");

const authForm = document.getElementById("authForm");

const signInTab = document.getElementById("signInTab");
const signUpTab = document.getElementById("signUpTab");

const nameGroup = document.getElementById("nameGroup");
const confirmGroup = document.getElementById("confirmGroup");
const rememberRow = document.getElementById("rememberRow");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

const switchText = document.getElementById("switchText");
const forgotPassword = document.getElementById("forgotPassword");

let currentMode = "signin";

/* ================= OPEN AND CLOSE LOGIN ================= */

function openLogin() {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    formMessage.textContent = "";
}

function closeLoginCard() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

earth.addEventListener("click", openLogin);
instruction.addEventListener("click", openLogin);
closeLogin.addEventListener("click", closeLoginCard);

modalOverlay.addEventListener("click", function(event) {
    if (event.target === modalOverlay) {
        closeLoginCard();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLoginCard();
    }
});

/* ================= CHANGE FORM MODE ================= */

function changeMode(mode) {

    currentMode = mode;

    formMessage.textContent = "";
    formMessage.className = "form-message";

    authForm.reset();

    if (mode === "signup") {

        nameGroup.style.display = "block";
        confirmGroup.style.display = "block";
        rememberRow.style.display = "none";

        fullName.required = true;
        confirmPassword.required = true;

        formTitle.textContent = "Create Account";
        formSubtitle.textContent =
            "Start your journey into the universe.";

        submitBtn.innerHTML =
            "<span>CREATE MY ACCOUNT</span><span>→</span>";

        signUpTab.classList.add("active");
        signInTab.classList.remove("active");

        switchText.innerHTML =
            'Already have an account? <button type="button" id="switchToSignIn">Sign In</button>';

        document.getElementById("switchToSignIn")
            .addEventListener("click", function() {
                changeMode("signin");
            });

    } else {

        nameGroup.style.display = "none";
        confirmGroup.style.display = "none";
        rememberRow.style.display = "flex";

        fullName.required = false;
        confirmPassword.required = false;

        formTitle.textContent = "Welcome Back";
        formSubtitle.textContent =
            "Enter your universe. Continue your journey.";

        submitBtn.innerHTML =
            "<span>ENTER CODEVERSE</span><span>→</span>";

        signInTab.classList.add("active");
        signUpTab.classList.remove("active");

        switchText.innerHTML =
            'Don\'t have an account? <button type="button" id="switchToSignUp">Create Account</button>';

        document.getElementById("switchToSignUp")
            .addEventListener("click", function() {
                changeMode("signup");
            });
    }
}

signInTab.addEventListener("click", function() {
    changeMode("signin");
});

signUpTab.addEventListener("click", function() {
    changeMode("signup");
});

document.getElementById("switchToSignUp")
    .addEventListener("click", function() {
        changeMode("signup");
    });

/* ================= SHOW / HIDE PASSWORD ================= */

document.querySelectorAll(".show-password").forEach(function(button) {

    button.addEventListener("click", function() {

        const targetId = button.dataset.target;
        const input = document.getElementById(targetId);

        if (input.type === "password") {
            input.type = "text";
            button.textContent = "HIDE";
        } else {
            input.type = "password";
            button.textContent = "SHOW";
        }

    });

});

/* ================= FORM SUBMISSION ================= */

authForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent = "";
    formMessage.className = "form-message";

    const emailValue = email.value.trim();
    const passwordValue = password.value;

    if (passwordValue.length < 8) {

        showMessage(
            "Password must contain at least 8 characters.",
            "error"
        );

        return;
    }

    if (currentMode === "signup") {

        const nameValue = fullName.value.trim();
        const confirmValue = confirmPassword.value;

        if (nameValue.length < 2) {
            showMessage("Please enter your full name.", "error");
            return;
        }

        if (passwordValue !== confirmValue) {
            showMessage("Passwords do not match!", "error");
            return;
        }

        showMessage(
            "Account form completed! Connect a backend to create your account.",
            "success"
        );

    } else {

        showMessage(
            "Login form completed! Connect a backend to authenticate your account.",
            "success"
        );

    }

});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = "form-message " + type;
}

/* ================= FORGOT PASSWORD ================= */

forgotPassword.addEventListener("click", function(event) {

    event.preventDefault();

    const emailValue = email.value.trim();

    if (!emailValue) {
        showMessage(
            "Please enter your email address first.",
            "error"
        );
        email.focus();
        return;
    }

    showMessage(
        "Password recovery needs an email service connected to the website.",
        "error"
    );

});

/* ================= SNOW ANIMATION ================= */

const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

let snowflakes = [];

function resizeCanvas() {

    const ratio = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    createSnow();
}

function createSnow() {

    snowflakes = [];

    const amount = Math.min(
        140,
        Math.floor(window.innerWidth / 7)
    );

    for (let i = 0; i < amount; i++) {

        snowflakes.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 2.5 + 0.5,
            speed: Math.random() * 1.5 + 0.4,
            wind: Math.random() * 0.8 - 0.4,
            opacity: Math.random() * 0.7 + 0.2
        });

    }
}

function animateSnow() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    snowflakes.forEach(function(snow) {

        snow.y += snow.speed;
        snow.x += snow.wind;

        if (snow.y > window.innerHeight) {
            snow.y = -5;
            snow.x = Math.random() * window.innerWidth;
        }

        if (snow.x > window.innerWidth) {
            snow.x = 0;
        }

        if (snow.x < 0) {
            snow.x = window.innerWidth;
        }

        ctx.beginPath();

        ctx.arc(
            snow.x,
            snow.y,
            snow.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(190, 230, 255, " + snow.opacity + ")";

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#75dfff";

        ctx.fill();

    });

    ctx.shadowBlur = 0;

    requestAnimationFrame(animateSnow);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateSnow();

/* ================= MOUSE LIGHT EFFECT ================= */

const scene = document.querySelector(".space-scene");

document.addEventListener("mousemove", function(event) {

    if (window.innerWidth <= 950) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;

    scene.style.transform =
        "translate(" + x + "px, " + y + "px)";

});

document.addEventListener("mouseleave", function() {
    scene.style.transform = "translate(0, 0)";
});

console.log("🚀 CodeVerse Galaxy is ready!");