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