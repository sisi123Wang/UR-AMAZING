const feedbackMessages = [
    "Great job reflecting on the positive moments of your day!",
    "Your positive mindset is inspiring!",
    "Keep up the good work, and continue to focus on the good in each day!",
    "Hey there! You're doing amazing. Keep focusing on these positive moments!",
    "Awesome job today! It's great to see you appreciating the good things in life.",
    "You're a star! 🌟 Keep shining and recognizing the beauty in each day.",
    "High five, my friend! 🙌 You're finding joy in the little things, and that's what matters.",
    "Wow, you're on a roll! Keep up the positive vibes and cherish these moments.",
    "You're spreading positivity just by being you. Keep it up!",
    "I'm so proud of you for focusing on the positives. You're making a difference in your own life!",
    "Your positivity is contagious! Keep sharing your good vibes with the world.",
    "You're doing a fantastic job at finding the silver lining. Keep going!",
    "Keep smiling, my friend! Your positive outlook is truly inspiring."
];

document.getElementById('good-things-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * feedbackMessages.length);
    const feedbackMessage = feedbackMessages[randomIndex];
    const feedbackElement = document.getElementById('positive-feedback');
    feedbackElement.textContent = feedbackMessage;

    // Reset the animation
    feedbackElement.style.animation = 'none';
    setTimeout(() => {
        feedbackElement.style.animation = '';
    }, 10); // Short timeout to trigger reflow and restart the animation

    // Trigger the firework effect
    createFirework();

    // Randomly apply either the 'feedback-green' or 'feedback-pink' class
    const colorClass = Math.random() < 0.5 ? 'feedback-green' : 'feedback-pink';
    feedbackElement.className = colorClass;
});
const colorClass = Math.random() < 0.5 ? 'feedback-green' : 'feedback-pink';
feedbackElement.className = colorClass;

function createFirework() {
    const container = document.getElementById('fireworks-container');
    const colors = ['#FFC0CB', '#4CAF50', '#FFD700', '#FF4500', '#00BFFF']; // Petal colors

    for (let i = 0; i < 10; i++) { // Number of flowers
        const flower = document.createElement('div');
        flower.style.position = 'absolute';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';

        // Create petals
        for (let j = 0; j < 5; j++) {
            const petal = document.createElement('div');
            petal.classList.add('flower-petal');
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            petal.style.transform = `translate(-50%, -50%) rotate(${72 * j}deg)`; // Rotate each petal around the center
            flower.appendChild(petal);
        }

        // Create flower center
        const center = document.createElement('div');
        center.classList.add('flower-center');
        flower.appendChild(center);

        container.appendChild(flower);
    }
}
document.getElementById('good-things-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your existing code for handling form submission and feedback

    // Trigger the flower firework effect
    createFirework();
});



