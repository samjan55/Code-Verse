 /* =========================================
   CODEVERSE - LEARNING SYSTEM
========================================= */


/* =========================================
   1. COURSE DATA
========================================= */

const courses = [

    {
        id: "computer",
        icon: "💻",
        style: "computer",
        title: "Computer Basics",
        description: "Learn computer skills from the beginning.",

        modules: [
            {
                title: "Introduction to Computers",
                lessons: [
                    "What is a Computer?",
                    "History of Computers",
                    "Types of Computers",
                    "How Computers Work",
                    "Characteristics of Computers"
                ]
            },
            {
                title: "Computer Hardware",
                lessons: [
                    "What is Hardware?",
                    "CPU and Its Functions",
                    "Motherboard",
                    "RAM and ROM",
                    "Monitor and Keyboard",
                    "Mouse and Printer",
                    "Storage Devices"
                ]
            },
            {
                title: "Software and Operating Systems",
                lessons: [
                    "What is Software?",
                    "System Software",
                    "Application Software",
                    "Operating Systems",
                    "Types of Operating Systems",
                    "Introduction to Windows"
                ]
            },
            {
                title: "Windows and File Management",
                lessons: [
                    "Windows Desktop",
                    "Start Menu and Taskbar",
                    "Working with Windows",
                    "Creating Files and Folders",
                    "Copy, Cut and Paste",
                    "File Extensions",
                    "Keyboard Shortcuts"
                ]
            },
            {
                title: "Internet and Computer Safety",
                lessons: [
                    "What is the Internet?",
                    "Web Browsers",
                    "Search Engines",
                    "Email Basics",
                    "Computer Viruses",
                    "Passwords and Online Safety"
                ]
            }
        ]
    },

    {
        id: "web",
        icon: "🌐",
        style: "web",
        title: "Introduction to Web",
        description: "Discover websites and web development.",

        modules: [
            {
                title: "Understanding the Web",
                lessons: [
                    "What is the World Wide Web?",
                    "What is a Website?",
                    "Web Pages and Homepages",
                    "Static vs Dynamic Websites"
                ]
            },
            {
                title: "Websites and Browsers",
                lessons: [
                    "How Websites Work",
                    "What is a Web Browser?",
                    "Browser Features",
                    "Search Engines",
                    "Domain Names",
                    "Web Hosting and Servers"
                ]
            },
            {
                title: "Frontend and Backend",
                lessons: [
                    "What is Frontend Development?",
                    "What is Backend Development?",
                    "Frontend vs Backend",
                    "Full Stack Development",
                    "How Frontend and Backend Connect"
                ]
            },
            {
                title: "Development Tools",
                lessons: [
                    "What is a Code Editor?",
                    "Installing Visual Studio Code",
                    "VS Code Interface",
                    "Creating Your First Project",
                    "Using Live Server",
                    "Browser Developer Tools"
                ]
            },
            {
                title: "Your First Website",
                lessons: [
                    "Introduction to HTML",
                    "Introduction to CSS",
                    "Introduction to JavaScript",
                    "How HTML, CSS and JavaScript Work Together",
                    "Building Your First Web Page"
                ]
            }
        ]
    },

    {
        id: "html",
        icon: "📄",
        style: "html",
        title: "HTML Fundamentals",
        description: "Build the structure of web pages.",

        modules: [
            {
                title: "HTML Fundamentals",
                lessons: [
                    "What is HTML?",
                    "History of HTML",
                    "HTML Document Structure",
                    "DOCTYPE Declaration",
                    "HTML Tags and Elements",
                    "Attributes in HTML"
                ]
            },
            {
                title: "Text and Content Elements",
                lessons: [
                    "HTML Headings",
                    "Paragraphs",
                    "Line Breaks and Horizontal Rules",
                    "Bold and Italic Text",
                    "HTML Comments",
                    "Special Characters"
                ]
            },
            {
                title: "Links, Images and Media",
                lessons: [
                    "Creating Links",
                    "Absolute and Relative URLs",
                    "Adding Images",
                    "Image Alt Text",
                    "Audio Elements",
                    "Video Elements"
                ]
            },
            {
                title: "Lists and Tables",
                lessons: [
                    "Unordered Lists",
                    "Ordered Lists",
                    "Description Lists",
                    "Creating Tables",
                    "Table Rows and Columns",
                    "Table Headers and Captions"
                ]
            },
            {
                title: "Forms and Inputs",
                lessons: [
                    "Introduction to Forms",
                    "Text Input",
                    "Email and Password Inputs",
                    "Radio Buttons and Checkboxes",
                    "Select and Textarea",
                    "Form Labels and Buttons",
                    "Form Validation Basics"
                ]
            },
            {
                title: "Semantic HTML",
                lessons: [
                    "What is Semantic HTML?",
                    "Header and Footer",
                    "Navigation",
                    "Main and Section",
                    "Article and Aside",
                    "Accessibility Basics"
                ]
            },
            {
                title: "HTML Projects",
                lessons: [
                    "Creating a Personal Profile",
                    "Building a Contact Form",
                    "Creating a Portfolio Structure",
                    "HTML Practice Challenge",
                    "Final HTML Project"
                ]
            }
        ]
    },

    {
        id: "css",
        icon: "🎨",
        style: "css",
        title: "CSS Fundamentals",
        description: "Design beautiful and responsive websites.",

        modules: [
            {
                title: "CSS Fundamentals",
                lessons: [
                    "What is CSS?",
                    "How CSS Works",
                    "Inline CSS",
                    "Internal CSS",
                    "External CSS",
                    "Connecting CSS to HTML"
                ]
            },
            {
                title: "Selectors and Specificity",
                lessons: [
                    "Element Selectors",
                    "Class Selectors",
                    "ID Selectors",
                    "Universal Selector",
                    "Grouping Selectors",
                    "Pseudo Classes",
                    "CSS Specificity"
                ]
            },
            {
                title: "Colors, Fonts and Backgrounds",
                lessons: [
                    "CSS Colors",
                    "HEX and RGB Colors",
                    "Background Colors",
                    "Background Images",
                    "Font Family",
                    "Font Size and Weight",
                    "Text Alignment and Decoration"
                ]
            },
            {
                title: "Box Model and Spacing",
                lessons: [
                    "Understanding the Box Model",
                    "Width and Height",
                    "Margin",
                    "Padding",
                    "Borders",
                    "Border Radius",
                    "Box Shadows",
                    "Display Property"
                ]
            },
            {
                title: "Flexbox and Grid",
                lessons: [
                    "Introduction to Flexbox",
                    "Flex Direction",
                    "Justify Content",
                    "Align Items",
                    "Flex Wrap",
                    "Introduction to CSS Grid",
                    "Grid Columns and Rows",
                    "Grid Gap"
                ]
            },
            {
                title: "Responsive Design",
                lessons: [
                    "What is Responsive Design?",
                    "Viewport and Meta Tag",
                    "Media Queries",
                    "Mobile First Design",
                    "Responsive Images",
                    "Responsive Navigation"
                ]
            },
            {
                title: "Transitions and Animations",
                lessons: [
                    "CSS Transitions",
                    "Transform Property",
                    "Hover Effects",
                    "Keyframe Animations",
                    "Animation Duration and Delay"
                ]
            },
            {
                title: "CSS Projects",
                lessons: [
                    "Designing a Profile Card",
                    "Creating a Navigation Bar",
                    "Building a Login Page",
                    "Responsive Landing Page",
                    "Final CSS Project"
                ]
            }
        ]
    },

    {
        id: "javascript",
        icon: "⚡",
        style: "js",
        title: "JavaScript",
        description: "Bring your websites to life with JavaScript.",

        modules: [
            {
                title: "JavaScript Fundamentals",
                lessons: [
                    "What is JavaScript?",
                    "JavaScript in Websites",
                    "Adding JavaScript to HTML",
                    "Console and Developer Tools",
                    "Writing Your First Script"
                ]
            },
            {
                title: "Variables and Data Types",
                lessons: [
                    "What are Variables?",
                    "Let, Const and Var",
                    "Strings",
                    "Numbers",
                    "Booleans",
                    "Undefined and Null",
                    "Type Conversion"
                ]
            },
            {
                title: "Operators and Conditions",
                lessons: [
                    "Arithmetic Operators",
                    "Assignment Operators",
                    "Comparison Operators",
                    "Logical Operators",
                    "If Statements",
                    "If Else Statements",
                    "Switch Statements",
                    "Ternary Operator"
                ]
            },
            {
                title: "Loops and Functions",
                lessons: [
                    "Introduction to Loops",
                    "For Loop",
                    "While Loop",
                    "Do While Loop",
                    "Break and Continue",
                    "Introduction to Functions",
                    "Function Parameters",
                    "Return Values",
                    "Arrow Functions"
                ]
            },
            {
                title: "Arrays and Objects",
                lessons: [
                    "Introduction to Arrays",
                    "Accessing Array Items",
                    "Push and Pop",
                    "Array Methods",
                    "ForEach and Map",
                    "Introduction to Objects",
                    "Object Properties",
                    "Object Methods"
                ]
            },
            {
                title: "DOM Manipulation",
                lessons: [
                    "What is the DOM?",
                    "Selecting HTML Elements",
                    "getElementById",
                    "querySelector",
                    "Changing Text Content",
                    "Changing CSS with JavaScript",
                    "Creating HTML Elements",
                    "Removing Elements"
                ]
            },
            {
                title: "Events and Forms",
                lessons: [
                    "What are Events?",
                    "Click Events",
                    "Input Events",
                    "Submit Events",
                    "Event Listeners",
                    "Prevent Default",
                    "Form Validation"
                ]
            },
            {
                title: "Local Storage and JSON",
                lessons: [
                    "What is Local Storage?",
                    "setItem and getItem",
                    "removeItem and clear",
                    "JSON Introduction",
                    "JSON.stringify",
                    "JSON.parse",
                    "Saving Data in Browser"
                ]
            },
            {
                title: "JavaScript Projects",
                lessons: [
                    "Digital Counter",
                    "To Do List",
                    "Simple Calculator",
                    "Book List Application",
                    "Interactive Quiz",
                    "Final JavaScript Project"
                ]
            }
        ]
    },

    {
        id: "project",
        icon: "🚀",
        style: "project",
        title: "Final Project",
        description: "Build a complete website using your skills.",

        modules: [
            {
                title: "Project Planning",
                lessons: [
                    "Choosing a Project Idea",
                    "Defining Project Goals",
                    "Planning Website Pages",
                    "Creating a Wireframe"
                ]
            },
            {
                title: "HTML Structure",
                lessons: [
                    "Creating Project Folders",
                    "Building the Homepage",
                    "Adding Navigation",
                    "Creating Website Sections",
                    "Adding Forms"
                ]
            },
            {
                title: "CSS Design",
                lessons: [
                    "Choosing a Color Palette",
                    "Designing the Header",
                    "Creating Cards",
                    "Building Responsive Layouts",
                    "Adding Visual Effects"
                ]
            },
            {
                title: "JavaScript Features",
                lessons: [
                    "Connecting JavaScript",
                    "Adding Button Events",
                    "Form Validation",
                    "Saving Data",
                    "Creating Interactive Features"
                ]
            },
            {
                title: "Testing and Presentation",
                lessons: [
                    "Testing Website Pages",
                    "Checking Mobile Layout",
                    "Finding and Fixing Errors",
                    "Improving Accessibility",
                    "Presenting Your Website"
                ]
            }
        ]
    }
];


/* =========================================
   2. PAGE ELEMENTS
========================================= */

const roadmap = document.getElementById("roadmap");
const courseGrid = document.getElementById("courseGrid");

const lessonsArea = document.getElementById("lessonsArea");
const lessonList = document.getElementById("lessonList");
const lessonContent = document.getElementById("lessonContent");

const backButton = document.getElementById("backToCourses");

let activeCourse = null;
let activeLessonId = null;


/* =========================================
   3. HELPER FUNCTIONS
========================================= */

function getTotalLessons(course) {

    return course.modules.reduce(function(total, module) {
        return total + module.lessons.length;
    }, 0);

}

function getProgressKey(course) {

    return "cvProgress_" + course.id;

}

function getCompletedLessons(course) {

    try {

        return JSON.parse(
            localStorage.getItem(getProgressKey(course))
        ) || [];

    } catch (error) {

        return [];

    }

}

function saveCompletedLessons(course, completed) {

    localStorage.setItem(
        getProgressKey(course),
        JSON.stringify(completed)
    );

}


/* =========================================
   4. CREATE ROADMAP
========================================= */

function createRoadmap() {

    roadmap.innerHTML = "";

    courses.forEach(function(course, index) {

        const card = document.createElement("article");
        card.className = "roadmap-card";

        card.innerHTML = `
            <span class="stage-number">
                STAGE ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="stage-icon">${course.icon}</div>

            <h3>${course.title}</h3>

            <span class="stage-status">
                LEARNING STAGE
            </span>
        `;

        roadmap.appendChild(card);

    });

}


/* =========================================
   5. CREATE COURSE CARDS
========================================= */

function createCourseCards() {

    courseGrid.innerHTML = "";

    courses.forEach(function(course) {

        const total = getTotalLessons(course);

        const completed = getCompletedLessons(course).length;

        const card = document.createElement("article");
        card.className = "course-card";

        const image = document.createElement("div");
        image.className = "course-image " + course.style;
        image.textContent = course.icon;

        const info = document.createElement("div");
        info.className = "course-info";

        const level = document.createElement("small");
        level.textContent = "CODEVERSE COURSE";

        const title = document.createElement("h3");
        title.textContent = course.title;

        const description = document.createElement("p");
        description.textContent = course.description;

        const meta = document.createElement("div");
        meta.className = "course-meta";
        meta.textContent =
            course.modules.length + " Modules · " +
            total + " Lessons";

        const button = document.createElement("button");
        button.className = "course-button";

        button.textContent = "Explore Course →";

        button.addEventListener("click", function() {
            showCourse(course.id);
        });

        info.append(
            level,
            title,
            description,
            meta,
            button
        );

        card.append(image, info);

        courseGrid.appendChild(card);

    });

}


/* =========================================
   6. OPEN A COURSE
========================================= */

function showCourse(courseId) {

    activeCourse = courses.find(function(course) {
        return course.id === courseId;
    });

    if (!activeCourse) return;

    activeLessonId = null;

    lessonsArea.hidden = false;

    document.getElementById("selectedCourseTitle").textContent =
        activeCourse.title;

    document.getElementById("selectedCourseDescription").textContent =
        activeCourse.description;

    document.getElementById("lessonCount").textContent =
        getTotalLessons(activeCourse) + " lessons";

    createModuleList();

    updateProgress();

    lessonContent.innerHTML = `
        <div class="empty-lesson">
            <div>📚</div>
            <h2>Welcome to ${activeCourse.title}</h2>
            <p>Choose a lesson from the modules to start learning.</p>
        </div>
    `;

    lessonsArea.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   7. CREATE MODULES AND LESSONS
========================================= */

function createModuleList() {

    lessonList.innerHTML = "";

    const completed = getCompletedLessons(activeCourse);

    activeCourse.modules.forEach(function(module, moduleIndex) {

        const details = document.createElement("details");
        details.className = "lesson-module";

        details.open = moduleIndex === 0;

        const summary = document.createElement("summary");

        summary.textContent =
            "MODULE " +
            String(moduleIndex + 1).padStart(2, "0") +
            " — " +
            module.title +
            " · " +
            module.lessons.length +
            " Lessons";

        details.appendChild(summary);

        module.lessons.forEach(function(lesson, lessonIndex) {

            const lessonId = moduleIndex + "-" + lessonIndex;

            const button = document.createElement("button");

            button.className = "module-lesson";
            button.dataset.lesson = lessonId;

            const number = document.createElement("span");
            number.className = "lesson-number";
            number.textContent = lessonIndex + 1;

            const name = document.createElement("span");
            name.className = "module-lesson-name";
            name.textContent = lesson;

            const check = document.createElement("span");
            check.className = "lesson-done";

            check.textContent =
                completed.includes(lessonId) ? "✓" : "›";

            button.append(number, name, check);

            button.addEventListener("click", function() {

                showLesson(moduleIndex, lessonIndex);

            });

            details.appendChild(button);

        });

        lessonList.appendChild(details);

    });

}


/* =========================================
   8. LESSON CONTENT
========================================= */

function getLessonContent(title) {

    const course = activeCourse.id;

    const data = {

        computer: {
            description:
                "Computer technology helps people process, store and communicate information. In this lesson, you will understand " +
                title + " and learn how it is used in everyday computing.",

            example:
                "Computer system:\n\nInput → Processing → Output → Storage",

            note:
                "Think about where you see this computer technology in everyday life."
        },

        web: {
            description:
                "Web development involves creating and maintaining websites and web applications. This lesson explains " +
                title + " and its role in the process of using or developing websites.",

            example:
                "Web Development:\n\nHTML → Structure\nCSS → Design\nJavaScript → Interaction",

            note:
                "Try to identify this concept on a website you visit."
        },

        html: {
            description:
                "HTML provides the structure of a web page. This lesson focuses on " +
                title + " and explains how it helps organize content in an HTML document.",

            example:
                "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n  <p>My first webpage.</p>\n</body>\n</html>",

            note:
                "Practise writing HTML in a separate file and open it in your browser."
        },

        css: {
            description:
                "CSS controls the visual appearance and layout of web pages. In this lesson, you will explore " +
                title + " and understand how it improves website design.",

            example:
                "body {\n  font-family: Arial;\n  background: #F5F7FC;\n}\n\nh1 {\n  color: #8064D9;\n}",

            note:
                "Change the CSS values and observe how the design changes."
        },

        javascript: {
            description:
                "JavaScript is used to create interactive web applications. This lesson introduces " +
                title + " and shows how it helps a program perform tasks.",

            example:
                "const student = 'CodeVerse';\n\nconsole.log(student);",

            note:
                "Run JavaScript examples in the browser console or in your project."
        },

        project: {
            description:
                "Building a complete website requires planning, coding, testing and improvement. This lesson focuses on " +
                title + " as part of your final project.",

            example:
                "PROJECT WORKFLOW:\n\n1. Plan\n2. Design\n3. Develop\n4. Test\n5. Present",

            note:
                "Apply this lesson to your CodeVerse project."
        }

    };

    return data[course];

}


/* =========================================
   9. SHOW A LESSON
========================================= */

function showLesson(moduleIndex, lessonIndex) {

    const module = activeCourse.modules[moduleIndex];

    const title = module.lessons[lessonIndex];

    const lessonId = moduleIndex + "-" + lessonIndex;

    activeLessonId = lessonId;

    const content = getLessonContent(title);

    document.querySelectorAll(".module-lesson").forEach(function(button) {

        button.classList.toggle(
            "active",
            button.dataset.lesson === lessonId
        );

    });

    lessonContent.innerHTML = "";

    const badge = document.createElement("span");
    badge.className = "lesson-category";

    badge.textContent =
        "MODULE " + (moduleIndex + 1) + " · " + module.title;

    const heading = document.createElement("h2");
    heading.textContent = title;

    const explanation = document.createElement("p");
    explanation.className = "lesson-explanation";
    explanation.textContent = content.description;

    const exampleTitle = document.createElement("h3");
    exampleTitle.textContent = "Practical Example";

    const example = document.createElement("pre");
    example.className = "lesson-example";
    example.textContent = content.example;

    const note = document.createElement("div");
    note.className = "lesson-note";
    note.textContent = content.note;

    const actions = document.createElement("div");
    actions.className = "lesson-actions";

    const completeButton = document.createElement("button");
    completeButton.className = "complete-button";

    function updateCompleteButton() {

        const completed = getCompletedLessons(activeCourse);

        completeButton.textContent =
            completed.includes(lessonId)
                ? "✓ Completed"
                : "Mark as Complete";

    }

    updateCompleteButton();

    completeButton.addEventListener("click", function() {

        const completed = getCompletedLessons(activeCourse);

        if (!completed.includes(lessonId)) {

            completed.push(lessonId);

            saveCompletedLessons(activeCourse, completed);

        }

        updateCompleteButton();

        const currentButton = document.querySelector(
            '.module-lesson[data-lesson="' + lessonId + '"] .lesson-done'
        );

        if (currentButton) {
            currentButton.textContent = "✓";
        }

        updateProgress();

    });

    const nextButton = document.createElement("button");
    nextButton.className = "next-button";
    nextButton.textContent = "Next Lesson →";

    const total = getTotalLessons(activeCourse);

    const currentPosition = getCurrentLessonPosition(
        moduleIndex,
        lessonIndex
    );

    nextButton.disabled = currentPosition >= total - 1;

    nextButton.addEventListener("click", function() {

        goToNextLesson(moduleIndex, lessonIndex);

    });

    actions.append(completeButton, nextButton);

    lessonContent.append(
        badge,
        heading,
        explanation,
        exampleTitle,
        example,
        note,
        actions
    );

    updateProgress();

}


/* =========================================
   10. FIND LESSON POSITION
========================================= */

function getCurrentLessonPosition(moduleIndex, lessonIndex) {

    let position = 0;

    for (let i = 0; i < moduleIndex; i++) {

        position += activeCourse.modules[i].lessons.length;

    }

    position += lessonIndex;

    return position;

}


/* =========================================
   11. NEXT LESSON
========================================= */

function goToNextLesson(moduleIndex, lessonIndex) {

    let nextModule = moduleIndex;

    let nextLesson = lessonIndex + 1;

    if (
        nextLesson >=
        activeCourse.modules[nextModule].lessons.length
    ) {

        nextModule++;

        nextLesson = 0;

    }

    if (!activeCourse.modules[nextModule]) return;

    const moduleElements = lessonList.querySelectorAll("details");

    if (moduleElements[nextModule]) {

        moduleElements[nextModule].open = true;

    }

    showLesson(nextModule, nextLesson);

}


/* =========================================
   12. UPDATE PROGRESS
========================================= */

function updateProgress() {

    if (!activeCourse) return;

    const total = getTotalLessons(activeCourse);

    const completed = getCompletedLessons(activeCourse).length;

    const percent = Math.round((completed / total) * 100);

    document.getElementById("progressText").textContent =
        completed + " / " + total +
        " lessons completed · " + percent + "%";

    document.getElementById("progressBar").style.width =
        percent + "%";

}


/* =========================================
   13. BACK TO COURSES
========================================= */

backButton.addEventListener("click", function() {

    lessonsArea.hidden = true;

    activeCourse = null;

    activeLessonId = null;

    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   14. INITIALIZE LEARNING PAGE
========================================= */

createRoadmap();

createCourseCards();