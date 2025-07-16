class iOSApp {
    constructor() {
        this.currentCard = 0;
        this.totalCards = 2;
        this.cards = document.querySelectorAll('.card');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateCards();
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }
    
    setupEventListeners() {
        // Arrow button click
        this.nextBtn.addEventListener('click', () => {
            this.nextCard();
            this.hapticFeedback();
        });
        
        // Touch/swipe gestures
        this.setupTouchGestures();
        
        // Prevent context menu on long press
        document.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    setupTouchGestures() {
        const container = document.querySelector('.card-container');
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let isDragging = false;
        
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
        }, { passive: true });
        
        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const deltaX = currentX - startX;
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            
            // Only handle horizontal swipes
            if (deltaY < 50) {
                e.preventDefault();
            }
        }, { passive: false });
        
        container.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const deltaX = currentX - startX;
            const threshold = 50;
            
            if (Math.abs(deltaX) > threshold) {
                if (deltaX < 0) {
                    // Swipe left - next card
                    this.nextCard();
                } else {
                    // Swipe right - previous card
                    this.prevCard();
                }
                this.hapticFeedback();
            }
            
            isDragging = false;
        }, { passive: true });
    }
    
    nextCard() {
        this.currentCard = (this.currentCard + 1) % this.totalCards;
        this.updateCards();
    }
    
    prevCard() {
        this.currentCard = (this.currentCard - 1 + this.totalCards) % this.totalCards;
        this.updateCards();
    }
    
    updateCards() {
        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next');
            
            if (index === this.currentCard) {
                card.classList.add('active');
            } else if (index === (this.currentCard - 1 + this.totalCards) % this.totalCards) {
                card.classList.add('prev');
            } else if (index === (this.currentCard + 1) % this.totalCards) {
                card.classList.add('next');
            }
        });
    }
    
    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: false
        });
        document.querySelector('.time').textContent = timeString;
    }
    
    hapticFeedback() {
        // iOS haptic feedback simulation
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new iOSApp();
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});