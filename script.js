// Ultra-fast, lightweight script
(function() {
    'use strict';
    
    var timeLeft = 10;
    var countdownEl = null;
    var timer = null;
    
    // Optimized countdown function
    function updateCountdown() {
        if (!countdownEl) {
            countdownEl = document.getElementById('countdown');
            if (!countdownEl) return;
        }
        
        var h = Math.floor(timeLeft / 3600);
        var m = Math.floor((timeLeft % 3600) / 60);
        var s = timeLeft % 60;
        
        countdownEl.textContent = 
            (h < 10 ? '0' + h : h) + ':' + 
            (m < 10 ? '0' + m : m) + ':' + 
            (s < 10 ? '0' + s : s);
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            window.location.href = 'https://t.me/+P3mZY047CPplZjg1';
        } else {
            timeLeft--;
        }
    }
    
    // Initialize immediately
    function init() {
        updateCountdown();
        timer = setInterval(updateCountdown, 1000);
        
        // Add fast click handlers
        var buttons = document.querySelectorAll('.btn, .btn-ghost');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, {passive: true});
            
            buttons[i].addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            }, {passive: true});
        }
    }
    
    // Start as soon as DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Prefetch Telegram link
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'https://t.me/+P3mZY047CPplZjg1';
    document.head.appendChild(link);
    
})();