let currentIndex = 0;
const totalCards = 3;
let startX = 0;
let currentX = 0;
let isDragging = false;
let startTime = 0;

function updateCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === currentIndex - 1) {
            card.classList.add('prev');
        } else if (index === currentIndex + 1) {
            card.classList.add('next');
        }
    });
    
    // Add haptic feedback for iOS
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

function nextCard() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateCards();
        
        // iOS haptic feedback
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(15);
        }
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
        
        // iOS haptic feedback
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(15);
        }
    }
}

// iOS-optimized touch event handlers
const cardContainer = document.getElementById('iosCardContainer');

// Touch events only (iOS optimized)
cardContainer.addEventListener('touchstart', handleStart, { passive: false });
cardContainer.addEventListener('touchmove', handleMove, { passive: false });
cardContainer.addEventListener('touchend', handleEnd, { passive: false });
cardContainer.addEventListener('touchcancel', handleEnd, { passive: false });

function handleStart(e) {
    isDragging = true;
    startX = e.touches[0].clientX;
    startTime = Date.now();
    
    // Prevent scrolling
    e.preventDefault();
}

function handleMove(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    
    // Visual feedback during drag with iOS-style resistance
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        let translateX = diffX * 0.3;
        
        // Add resistance at boundaries (iOS-style)
        if ((currentIndex === 0 && diffX > 0) || (currentIndex === totalCards - 1 && diffX < 0)) {
            translateX = diffX * 0.1;
        }
        
        translateX = Math.max(-150, Math.min(150, translateX));
        activeCard.style.transform = `scale(1) translateX(${translateX}px)`;
        activeCard.style.transition = 'none';
    }
}

function handleEnd(e) {
    if (!isDragging) return;
    
    isDragging = false;
    const diffX = currentX - startX;
    const diffTime = Date.now() - startTime;
    const velocity = Math.abs(diffX) / diffTime;
    
    // Reset transform with smooth animation
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.style.transform = '';
        activeCard.style.transition = '';
    }
    
    // iOS-style swipe detection (considering velocity and distance)
    const threshold = 50;
    const velocityThreshold = 0.3;
    
    if (Math.abs(diffX) > threshold || velocity > velocityThreshold) {
        if (diffX > 0 && currentIndex > 0) {
            // Swipe right - go to previous card
            prevCard();
        } else if (diffX < 0 && currentIndex < totalCards - 1) {
            // Swipe left - go to next card
            nextCard();
        }
    }
    
    startX = 0;
    currentX = 0;
    startTime = 0;
}

// iOS-style button interactions
document.querySelectorAll('.hotspot-item').forEach(item => {
    item.addEventListener('touchstart', function(e) {
        this.style.transform = 'scale(0.95)';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    item.addEventListener('touchend', function(e) {
        this.style.transform = '';
        this.style.backgroundColor = '';
        
        // Add subtle haptic feedback
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(5);
        }
    });
    
    item.addEventListener('touchcancel', function(e) {
        this.style.transform = '';
        this.style.backgroundColor = '';
    });
});

// iOS-style next button interaction
document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('touchstart', function(e) {
        this.style.transform = 'scale(0.95)';
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    });
    
    button.addEventListener('touchend', function(e) {
        this.style.transform = '';
        this.style.backgroundColor = '';
        this.style.color = '';
    });
    
    button.addEventListener('touchcancel', function(e) {
        this.style.transform = '';
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});

// Prevent default iOS behaviors
document.addEventListener('touchmove', function(e) {
    if (e.target.closest('.card-container')) {
        e.preventDefault();
    }
}, { passive: false });

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        updateCards();
    }, 100);
});

// Initialize with iOS-specific setup
document.addEventListener('DOMContentLoaded', function() {
    // Set viewport height for iOS
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', () => {
        setTimeout(setVH, 100);
    });
    
    // Initialize cards
    updateCards();
    
    // Update time in status bar
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: false 
        });
        document.querySelector('.time').textContent = timeString;
    };
    
    updateTime();
    setInterval(updateTime, 1000);
});