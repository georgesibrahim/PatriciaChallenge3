// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd700', '#ff8e53', '#a8e6cf'];
    const shapes = ['circle', 'square'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = 3 + Math.random() * 3;
        const size = 5 + Math.random() * 10;
        const delay = Math.random() * 3;

        confetti.style.left = left + '%';
        confetti.style.backgroundColor = color;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.animationDuration = animationDuration + 's';
        confetti.style.animationDelay = delay + 's';

        if (shapes[Math.floor(Math.random() * shapes.length)] === 'circle') {
            confetti.style.borderRadius = '50%';
        }

        confettiContainer.appendChild(confetti);
    }
}

// Launch confetti on page load
window.addEventListener('load', () => {
    createConfetti();

    // Repeat confetti every 5 seconds
    setInterval(() => {
        const confettiContainer = document.getElementById('confetti');
        confettiContainer.innerHTML = '';
        createConfetti();
    }, 5000);
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.stat-card, .fun-stat, .gallery-item');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Certificate Modal Functions
function showCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Confetti burst when certificate opens
    burstConfetti();
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificate();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificate();
    }
});

// Confetti burst effect
function burstConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd700', '#ff8e53', '#a8e6cf'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const startLeft = 50;
        const endLeft = startLeft + (Math.random() - 0.5) * 100;
        const animationDuration = 2 + Math.random() * 2;
        const size = 8 + Math.random() * 12;

        confetti.style.left = startLeft + '%';
        confetti.style.backgroundColor = color;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.animationDuration = animationDuration + 's';

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// Download Certificate as Image
function downloadCertificate() {
    // Using html2canvas library approach
    // Since we can't add external libraries easily, we'll use a simpler print-based approach
    alert('To download the certificate:\n\n1. Click the "Print Certificate" button\n2. In the print dialog, select "Save as PDF" or "Print to PDF"\n3. Save the file to your computer\n\nThis will give you a high-quality PDF of the certificate!');
}

// Print Certificate
function printCertificate() {
    window.print();
}

// Add dynamic stats counter animation
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Animate stat cards on scroll
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            // Add extra celebratory effects
            entry.target.style.animation = 'bounce 1s ease';

            setTimeout(() => {
                entry.target.style.animation = '';
            }, 1000);
        }
    });
}, { threshold: 0.5 });

window.addEventListener('load', () => {
    document.querySelectorAll('.stat-card').forEach(card => {
        statObserver.observe(card);
    });
});

// Easter egg: Click the trophy for extra celebration
document.addEventListener('DOMContentLoaded', () => {
    const trophy = document.querySelector('.trophy-icon');
    if (trophy) {
        trophy.addEventListener('click', () => {
            burstConfetti();
            trophy.style.animation = 'none';
            setTimeout(() => {
                trophy.style.animation = 'bounce 2s infinite';
            }, 10);

            // Play a celebration sound effect (if you add one)
            console.log('🎉 CELEBRATION MODE ACTIVATED! 🎉');
        });
    }

    // Make the runner emoji interactive
    const runner = document.querySelector('.runner-emoji');
    if (runner) {
        runner.addEventListener('click', () => {
            runner.style.animation = 'none';
            setTimeout(() => {
                runner.style.animation = 'run 0.3s 3';
            }, 10);
        });
    }
});

// Add a fun fact tooltip system
const funFacts = [
    "Patricia's pace would beat most people in a zombie apocalypse! 🧟",
    "At this speed, Patricia could outrun a charging elephant... probably! 🐘",
    "This run burned enough calories for 2.4 donuts. Worth it! 🍩",
    "Patricia covered 3000 meters. That's 30 football fields! ⚽",
    "Legend has it, the road is still recovering from this epic run! 🛣️"
];

// Random fun fact on page load
window.addEventListener('load', () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    console.log(`Fun Fact: ${randomFact}`);
});

// Add sparkle effect to badge on hover
document.addEventListener('DOMContentLoaded', () => {
    const badge = document.querySelector('.badge-outer');
    if (badge) {
        badge.addEventListener('mouseenter', () => {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = '✨';
                    sparkle.style.position = 'absolute';
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.top = Math.random() * 100 + '%';
                    sparkle.style.fontSize = '30px';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.animation = 'sparkle 1s ease-out forwards';
                    badge.style.position = 'relative';
                    badge.appendChild(sparkle);

                    setTimeout(() => sparkle.remove(), 1000);
                }, i * 100);
            }
        });
    }
});

// Add achievement sound effect simulation
function celebrationEffect() {
    const effects = ['🎊', '🎉', '🎈', '🎁', '⭐', '✨', '🏆', '🥇'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];

    const effectEl = document.createElement('div');
    effectEl.textContent = randomEffect;
    effectEl.style.position = 'fixed';
    effectEl.style.left = '50%';
    effectEl.style.top = '50%';
    effectEl.style.fontSize = '100px';
    effectEl.style.zIndex = '10001';
    effectEl.style.pointerEvents = 'none';
    effectEl.style.animation = 'pulse 1s ease-out forwards';

    document.body.appendChild(effectEl);

    setTimeout(() => effectEl.remove(), 1000);
}

// Trigger celebration on stat card hover
document.addEventListener('DOMContentLoaded', () => {
    const highlightCard = document.querySelector('.stat-card.highlight');
    if (highlightCard) {
        highlightCard.addEventListener('click', () => {
            celebrationEffect();
            burstConfetti();
        });
    }
});

console.log('%c🏆 PATRICIA IS A LEGEND! 🏆', 'font-size: 30px; color: #ffd700; font-weight: bold; text-shadow: 2px 2px 4px #ff6b6b;');
console.log('%cCongratulations on completing Challenge #3! Keep crushing it! 💪', 'font-size: 16px; color: #667eea;');
