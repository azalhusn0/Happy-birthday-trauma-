// Functions for page navigation
function answerYes() {
    document.getElementById('initialPage').classList.add('hidden');
    document.getElementById('birthdayMessage').classList.remove('hidden');
}

function nextPage() {
    document.getElementById('birthdayMessage').classList.add('hidden');
    document.getElementById('morePage').classList.remove('hidden');
}

function showMore() {
    document.getElementById('morePage').classList.add('hidden');
    document.getElementById('finalPage').classList.remove('hidden');

    // Create hearts and poppers effect
    let heart = document.createElement('div');
    heart.classList.add('hearts');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    // Add other animations (confetti, cakes, etc.) using similar techniques.
}

function thankYouPage() {
    document.getElementById('finalPage').classList.add('hidden');
    document.getElementById('thankYouPage').classList.remove('hidden');
}

// Show the initial page when the website loads
window.onload = function() {
    document.getElementById('initialPage').classList.remove('hidden');
};