<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Exam Preparation App</title>
    <link rel="stylesheet" href="styles.css">
    // <style>
    //     /* Add your CSS styles here */
    //     body {
    //         font-family: Arial, sans-serif;
    //     }

    //     header {
    //         background-color: #3498db;
    //         color: #fff;
    //         text-align: center;
    //         padding: 20px;
    //     }

    //     nav ul {
    //         list-style: none;
    //         padding: 0;
    //     }

    //     nav ul li {
    //         display: inline;
    //         margin-right: 20px;
    //     }

    //     nav a {
    //         text-decoration: none;
    //         color: #fff;
    //     }

    //     section {
    //         margin: 20px;
    //     }

    //     fieldset {
    //         border: 1px solid #ddd;
    //         padding: 10px;
    //         border-radius: 5px;
    //         margin-bottom: 20px;
    //     }

    //     legend {
    //         font-weight: bold;
    //     }

    //     .selection-container {
    //         display: flex;
    //         flex-direction: column;
    //     }

    //     label, select {
    //         margin: 5px 0;
    //     }

    //     button {
    //         background-color: #3498db;
    //         color: #fff;
    //         border: none;
    //         padding: 10px 20px;
    //         cursor: pointer;
    //     }

    //     button:hover {
    //         background-color: #2980b9;
    //     }

    //     #syllabus-content {
    //         margin-top: 20px;
    //     }

    //     footer {
    //         background-color: #333;
    //         color: #fff;
    //         text-align: center;
    //         padding: 10px;
    //     }
    // </style>
</head>
<body>
    <header>
        <h1>Welcome to the Student Exam Preparation App</h1>
        <nav>
            <ul>
                <li><a href="#syllabus">Syllabus & Study Materials</a></li>
                <!-- Add other navigation links here -->
            </ul>
        </nav>
    </header>

    <section id="syllabus">
        <h2>Syllabus & Study Materials</h2>
        <div class="selection-container">
            <fieldset>
                <legend>Select Degree Level and Branch:</legend>
                <div class="degree-selection">
                    <label for="degree">Select Degree Level:</label>
                    <select id="degree">
                        <option value="bachelor">Bachelor</option>
                        <option value="diploma">Diploma</option>
                        <option value="masters">Masters</option>
                    </select>
                </div>
                <div class="branch-selection">
                    <label for "branch">Select Branch:</label>
                    <select id="branch">
                        <option value="engineering">Engineering</option>
                        <option value="medical">Medical</option>
                        <option value="arts">Arts</option>
                        <option value="science">Science</option>
                        <option value="pharmacy">Pharmacy</option>
                    </select>
                </div>
            </fieldset>
            <button id="fetchButton">Get Syllabus & Study Materials</button>
        </div>
        <div id="syllabus-content"></div>
    </section>

    <!-- Hidden link to another page for "Bachelor" and "Engineering" -->
    <a id="bachelorEngineeringLink" href="bachelor_engineering.html" style="display: none;"></a>

    <footer>
        <p>&copy; 2023 Student Exam Preparation App</p>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const fetchButton = document.getElementById("fetchButton");
            fetchButton.addEventListener("click", fetchSyllabusAndMaterials);
        });

        function fetchSyllabusAndMaterials() {
            const selectedDegree = document.getElementById("degree").value;
            const selectedBranch = document.getElementById("branch").value;

            if (selectedDegree === "bachelor" && selectedBranch === "engineering") {
                const link = document.getElementById("bachelorEngineeringLink");
                window.location.href = link.href;
            } else {
                const fetchedData = mockFetchData(selectedDegree, selectedBranch);
                const syllabusContent = document.getElementById("syllabus-content");
                syllabusContent.innerHTML = fetchedData;
            }
        }

        function mockFetchData(degree, branch) {
            return "Mock data for " + degree + " in " + branch;
        }
    </script>
</body>
</html>
