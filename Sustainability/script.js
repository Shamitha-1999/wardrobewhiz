document.getElementById('facts-btn').onclick = function() {
    document.getElementById('sustainability-points').style.display = 'none';
    document.getElementById('facts').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
}

document.getElementById('quiz-btn').onclick = function() {
    document.getElementById('sustainability-points').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('facts').style.display = 'none';
}

// Show sustainability points by default
document.getElementById('sustainability-points').style.display = 'block';
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the specified section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
  }
  const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const resultsDiv = document.getElementById("results");

const answers = [
  "C", // Correct answer for question 1
  // Correct answer for question 2
  // ... other correct answers ...
];

submitBtn.addEventListener("click", () => {
  let score = 0;
  const inputs = quiz.querySelectorAll("input[type='radio']");

  inputs.forEach((input, index) => {
    if (input.checked && input.value === answers[index]) {
      score++;
    }
  });

  resultsDiv.querySelector("#score").textContent = score;
  resultsDiv.style.display = "block";

  // Display correct answers and explanations here
  inputs.forEach((input, index) => {
    const li = input.closest("li");
    const p = document.createElement("p");
    p.textContent = `Correct answer: ${answers[index]}`;
    li.appendChild(p);
  });
});