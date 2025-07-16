let currentIndex = 0;
const totalCards = 3;
let startX = 0;
let currentX = 0;
let isDragging = false;

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
}

function nextCard() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateCards();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
    }
}

// Touch/Mouse event handlers for swipe gestures
const cardContainer = document.getElementById('cardContainer');

// Mouse events
cardContainer.addEventListener('mousedown', handleStart);
cardContainer.addEventListener('mousemove', handleMove);
cardContainer.addEventListener('mouseup', handleEnd);
cardContainer.addEventListener('mouseleave', handleEnd);

// Touch events
cardContainer.addEventListener('touchstart', handleStart);
cardContainer.addEventListener('touchmove', handleMove);
cardContainer.addEventListener('touchend', handleEnd);

function handleStart(e) {
    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    cardContainer.style.cursor = 'grabbing';
}

function handleMove(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diffX = currentX - startX;
    
    // Visual feedback during drag
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        const translateX = Math.max(-100, Math.min(100, diffX * 0.3));
        activeCard.style.transform = `scale(1) translateX(${translateX}px)`;
    }
}

function handleEnd(e) {
    if (!isDragging) return;
    
    isDragging = false;
    cardContainer.style.cursor = 'grab';
    
    const diffX = currentX - startX;
    const threshold = 50;
    
    // Reset transform
    const activeCard = document.querySelector('.card.active');
    if (activeCard) {
        activeCard.style.transform = '';
    }
    
    // Determine swipe direction
    if (Math.abs(diffX) > threshold) {
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
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevCard();
    } else if (e.key === 'ArrowRight') {
        nextCard();
    }
});

// Initialize
updateCards();