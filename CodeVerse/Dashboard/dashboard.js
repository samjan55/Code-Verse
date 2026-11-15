document.addEventListener("DOMContentLoaded", function () {

    // CURRENT DATE
    const dateElement = document.getElementById("currentDate");

    if (dateElement) {
        const today = new Date();

        dateElement.textContent = today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    // STUDENT POINTS
    const savedPoints = Number(localStorage.getItem("funPoints")) || 50;

    const pointsElement = document.getElementById("pointsCount");

    if (pointsElement) {
        pointsElement.textContent = savedPoints;
    }

    // LEARNING PROGRESS
    const progress = 35;

    const progressElement = document.getElementById("progressCount");
    const miniProgress = document.getElementById("miniProgress");

    if (progressElement) {
        progressElement.textContent = progress + "%";
    }

    if (miniProgress) {
        miniProgress.style.width = progress + "%";
    }

    // DAILY GOAL
    const dailyGoal = 70;

    const goalPercent = document.getElementById("goalPercent");
    const goalCircle = document.getElementById("goalCircle");

    if (goalPercent) {
        goalPercent.textContent = dailyGoal + "%";
    }

    if (goalCircle) {
        goalCircle.style.background = `
            conic-gradient(
                #24C9E8 0% ${dailyGoal}%,
                #E9EDF5 ${dailyGoal}% 100%
            )
        `;
    }

    // ANIMATE COURSE PROGRESS BARS
    document.querySelectorAll(".course-progress span").forEach(function (bar) {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(function () {
            bar.style.width = width;
        }, 300);

    });

    // ANIMATE MAIN PROGRESS
    document.querySelectorAll(".progress-fill").forEach(function (bar) {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(function () {
            bar.style.width = width;
        }, 400);

    });

});