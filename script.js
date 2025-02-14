function createKawaiiHeart() {
    const hearts = ['\u2764', '\u2661', '\u2665', '\u2765', '\u2766', '\u2744', '\u2668'];
    const heart = document.createElement('div');
    heart.style.color = 'red';
    heart.style.fontSize = '48px';
    heart.className = 'kawaii-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.animationDelay = Math.random() * 4 + 's';
    
    heart.addEventListener('click', () => {
        heart.style.transform = 'scale(2) rotate(45deg)';
        createSparkles(heart.offsetLeft, heart.offsetTop);
        setTimeout(() => heart.remove(), 500);
    });
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 30 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.bottom = '-50px';
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 4000);
}

setInterval(createKawaiiHeart, 500);
setInterval(createBubble, 300);

document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.8) {
        createSparkles(e.pageX, e.pageY);
    }
});