document.addEventListener("DOMContentLoaded", function () {

    const quizData = [
        {
            id: "computer",
            title: "Computer Basics",
            icon: "💻",
            color: "#EDE9FF",
            description: "Test your knowledge of computer fundamentals.",
            questions: [
                {
                    question: "What is the brain of the computer called?",
                    options: ["Monitor", "CPU", "Keyboard", "Mouse"],
                    answer: 1
                },
                {
                    question: "Which device is used to type text?",
                    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
                    answer: 2
                },
                {
                    question: "What does RAM stand for?",
                    options: [
                        "Read Access Memory",
                        "Random Access Memory",
                        "Run All Memory",
                        "Ready Access Machine"
                    ],
                    answer: 1
                },
                {
                    question: "Which one is an output device?",
                    options: ["Mouse", "Keyboard", "Scanner", "Monitor"],
                    answer: 3
                },
                {
                    question: "Which of these is an operating system?",
                    options: ["Windows", "Google", "HTML", "CSS"],
                    answer: 0
                }
            ]
        },
        {
            id: "web",
            title: "Web Development",
            icon: "🌐",
            color: "#E1F8FC",
            description: "Explore the basics of websites and the web.",
            questions: [
                {
                    question: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Text Machine Language",
                        "Hyper Tool Multi Language",
                        "Home Text Markup Language"
                    ],
                    answer: 0
                },
                {
                    question: "Which language is used to style web pages?",
                    options: ["Java", "CSS", "Python", "SQL"],
                    answer: 1
                },
                {
                    question: "What does URL stand for?",
                    options: [
                        "Uniform Resource Locator",
                        "Universal Read Link",
                        "User Reference Location",
                        "Uniform Read Language"
                    ],
                    answer: 0
                },
                {
                    question: "Which language adds interactivity to websites?",
                    options: ["HTML", "CSS", "JavaScript", "XML"],
                    answer: 2
                },
                {
                    question: "What is a web browser?",
                    options: [
                        "A programming language",
                        "Software used to access websites",
                        "A database",
                        "A computer part"
                    ],
                    answer: 1
                }
            ]
        },
        {
            id: "html",
            title: "HTML",
            icon: "📄",
            color: "#FFF0E5",
            description: "Check your understanding of HTML elements.",
            questions: [
                {
                    question: "Which tag creates a heading?",
                    options: ["<p>", "<h1>", "<img>", "<br>"],
                    answer: 1
                },
                {
                    question: "Which tag creates a paragraph?",
                    options: ["<p>", "<div>", "<a>", "<li>"],
                    answer: 0
                },
                {
                    question: "Which attribute specifies an image path?",
                    options: ["href", "src", "alt", "class"],
                    answer: 1
                },
                {
                    question: "Which tag creates a hyperlink?",
                    options: ["<link>", "<a>", "<button>", "<url>"],
                    answer: 1
                },
                {
                    question: "Which tag creates an unordered list?",
                    options: ["<ol>", "<li>", "<ul>", "<list>"],
                    answer: 2
                }
            ]
        },
        {
            id: "css",
            title: "CSS",
            icon: "🎨",
            color: "#E8F0FF",
            description: "Test your skills in styling and layouts.",
            questions: [
                {
                    question: "What does CSS stand for?",
                    options: [
                        "Creative Style System",
                        "Cascading Style Sheets",
                        "Computer Style Syntax",
                        "Colorful Style Sheets"
                    ],
                    answer: 1
                },
                {
                    question: "Which property changes text color?",
                    options: ["background", "font-size", "color", "text-style"],
                    answer: 2
                },
                {
                    question: "Which property adds space inside an element?",
                    options: ["margin", "padding", "border", "gap"],
                    answer: 1
                },
                {
                    question: "Which CSS layout uses rows and columns?",
                    options: ["Float", "Grid", "Inline", "Static"],
                    answer: 1
                },
                {
                    question: "How do you select an element by its ID?",
                    options: [".name", "#name", "*name", "name()"],
                    answer: 1
                }
            ]
        },
        {
            id: "javascript",
            title: "JavaScript",
            icon: "⚡",
            color: "#FFF8DC",
            description: "Challenge yourself with JavaScript basics.",
            questions: [
                {
                    question: "Which keyword declares a variable?",
                    options: ["var", "style", "html", "body"],
                    answer: 0
                },
                {
                    question: "Which method displays a message in the console?",
                    options: ["alert()", "console.log()", "print()", "write()"],
                    answer: 1
                },
                {
                    question: "Which symbol is used for strict equality?",
                    options: ["=", "==", "===", "!="],
                    answer: 2
                },
                {
                    question: "Which method selects an element by ID?",
                    options: [
                        "getElementById()",
                        "getClass()",
                        "selectId()",
                        "findElement()"
                    ],
                    answer: 0
                },
                {
                    question: "Which data type represents true or false?",
                    options: ["String", "Number", "Boolean", "Array"],
                    answer: 2
                }
            ]
        },
        {
            id: "project",
            title: "Final Project",
            icon: "🚀",
            color: "#F3E9FF",
            description: "Review your knowledge of building websites.",
            questions: [
                {
                    question: "What is the purpose of a navigation bar?",
                    options: [
                        "To play music",
                        "To help users move between pages",
                        "To store images",
                        "To change the computer settings"
                    ],
                    answer: 1
                },
                {
                    question: "Which language is responsible for page structure?",
                    options: ["CSS", "JavaScript", "HTML", "SQL"],
                    answer: 2
                },
                {
                    question: "What does responsive design mean?",
                    options: [
                        "A website adapts to different screen sizes",
                        "A website only works on computers",
                        "A website has many colors",
                        "A website loads without HTML"
                    ],
                    answer: 0
                },
                {
                    question: "Where can browser data be stored locally?",
                    options: ["Local Storage", "CSS file", "HTML heading", "Image tag"],
                    answer: 0
                },
                {
                    question: "Which tool helps developers inspect web pages?",
                    options: ["Calculator", "Browser DevTools", "Music Player", "Paint"],
                    answer: 1
                }
            ]
        }
    ];

    const $ = id => document.getElementById(id);

    const selection = $("quizSelection");
    const playSection = $("quizPlay");
    const resultSection = $("quizResult");
    const cardsContainer = $("quizCards");

    let currentQuiz = null;
    let currentQuestion = 0;
    let selectedAnswers = [];
    let timeLeft = 15 * 60;
    let timerInterval = null;
    let quizFinished = false;

    function getNumber(key) {
        return Number(localStorage.getItem(key)) || 0;
    }

    function renderCards() {
        cardsContainer.innerHTML = "";

        quizData.forEach(quiz => {
            const card = document.createElement("article");
            card.className = "quiz-card";

            card.innerHTML = `
                <div class="course-icon" style="background:${quiz.color}">
                    ${quiz.icon}
                </div>

                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>

                <div class="quiz-meta">
                    <span>📝 ${quiz.questions.length} Questions</span>
                    <span>⏱ 15 Minutes</span>
                </div>

                <button class="start-button" data-quiz="${quiz.id}">
                    Start Quiz →
                </button>
            `;

            cardsContainer.appendChild(card);
        });

        cardsContainer.querySelectorAll(".start-button").forEach(button => {
            button.addEventListener("click", function () {
                startQuiz(this.dataset.quiz);
            });
        });
    }

    function updateStats() {
        $("completedQuizzes").textContent = getNumber("cvCompletedQuizzes");
        $("totalPoints").textContent = getNumber("funPoints") + 50;

        const scores = JSON.parse(
            localStorage.getItem("cvQuizScores") || "[]"
        );

        const average = scores.length
            ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
            : 0;

        $("averageScore").textContent = average + "%";
        $("totalQuizzes").textContent = quizData.length;
    }

    function startQuiz(quizId) {
        currentQuiz = quizData.find(quiz => quiz.id === quizId);

        if (!currentQuiz) return;

        currentQuestion = 0;
        selectedAnswers = new Array(currentQuiz.questions.length).fill(null);
        timeLeft = 15 * 60;
        quizFinished = false;

        selection.classList.add("hidden");
        resultSection.classList.add("hidden");
        playSection.classList.remove("hidden");

        $("activeQuizTitle").textContent = currentQuiz.title;

        showQuestion();
        updateTimer();

        clearInterval(timerInterval);

        timerInterval = setInterval(function () {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                finishQuiz();
            }
        }, 1000);
    }

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        $("timer").textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");
    }

    function showQuestion() {
        const question = currentQuiz.questions[currentQuestion];
        const total = currentQuiz.questions.length;
        const progress = ((currentQuestion + 1) / total) * 100;

        $("questionCounter").textContent =
            `Question ${currentQuestion + 1} of ${total}`;

        $("questionText").textContent = question.question;
        $("progressPercent").textContent = Math.round(progress) + "%";
        $("questionProgress").style.width = progress + "%";

        const optionsContainer = $("answerOptions");
        optionsContainer.innerHTML = "";

        question.options.forEach((option, index) => {
            const optionElement = document.createElement("div");

            optionElement.className = "answer-option";

            if (selectedAnswers[currentQuestion] === index) {
                optionElement.classList.add("selected");
            }

            const letter = document.createElement("span");
            letter.className = "option-letter";
            letter.textContent = String.fromCharCode(65 + index);

            const text = document.createElement("span");
            text.textContent = option;

            optionElement.append(letter, text);

            optionElement.addEventListener("click", function () {
                selectedAnswers[currentQuestion] = index;
                showQuestion();
            });

            optionsContainer.appendChild(optionElement);
        });

        $("previousQuestion").disabled = currentQuestion === 0;
        $("previousQuestion").style.opacity =
            currentQuestion === 0 ? "0.5" : "1";

        const isLast = currentQuestion === total - 1;

        $("nextQuestion").classList.toggle("hidden", isLast);
        $("submitQuiz").classList.toggle("hidden", !isLast);
    }

    $("nextQuestion").addEventListener("click", function () {
        if (selectedAnswers[currentQuestion] === null) {
            alert("Please select an answer first.");
            return;
        }

        if (currentQuestion < currentQuiz.questions.length - 1) {
            currentQuestion++;
            showQuestion();
        }
    });

    $("previousQuestion").addEventListener("click", function () {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
        }
    });

    $("submitQuiz").addEventListener("click", function () {
        const unanswered = selectedAnswers.some(answer => answer === null);

        if (unanswered) {
            alert("Please answer all questions before submitting.");
            return;
        }

        finishQuiz();
    });

    function finishQuiz() {
        if (quizFinished) return;

        quizFinished = true;
        clearInterval(timerInterval);

        let correct = 0;

        currentQuiz.questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                correct++;
            }
        });

        const total = currentQuiz.questions.length;
        const wrong = total - correct;
        const score = Math.round((correct / total) * 100);
        const points = correct * 10;

        const completed = getNumber("cvCompletedQuizzes") + 1;
        const oldPoints = getNumber("funPoints");

        localStorage.setItem("cvCompletedQuizzes", completed);
        localStorage.setItem("funPoints", oldPoints + points);

        const scores = JSON.parse(
            localStorage.getItem("cvQuizScores") || "[]"
        );

        scores.push(score);
        localStorage.setItem("cvQuizScores", JSON.stringify(scores));

        $("resultScore").textContent = score + "%";
        $("correctAnswers").textContent = correct;
        $("wrongAnswers").textContent = wrong;
        $("earnedPoints").textContent = points;

        if (score >= 80) {
            $("resultTitle").textContent = "Excellent Work!";
            $("resultMessage").textContent =
                "Amazing! You have a strong understanding of this topic.";
        } else if (score >= 50) {
            $("resultTitle").textContent = "Good Effort!";
            $("resultMessage").textContent =
                "Nice work! Keep practicing to improve your score.";
        } else {
            $("resultTitle").textContent = "Keep Learning!";
            $("resultMessage").textContent =
                "Review your lessons and try this quiz again.";
        }

        playSection.classList.add("hidden");
        resultSection.classList.remove("hidden");

        updateStats();
    }

    function backToSelection() {
        clearInterval(timerInterval);

        playSection.classList.add("hidden");
        resultSection.classList.add("hidden");
        selection.classList.remove("hidden");

        updateStats();
    }

    $("exitQuiz").addEventListener("click", function () {
        const leave = confirm("Are you sure you want to leave this quiz?");

        if (leave) {
            backToSelection();
        }
    });

    $("tryAgain").addEventListener("click", function () {
        if (currentQuiz) {
            startQuiz(currentQuiz.id);
        }
    });

    $("backToQuizzes").addEventListener("click", backToSelection);

    renderCards();
    updateStats();

});