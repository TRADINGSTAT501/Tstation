// Ultra-fast 10-second countdown and auto-redirect - No buffering
window.onload = function() {
    var timeLeft = 10;
    var countdownEl = document.getElementById('countdown') || document.getElementById('timer');
    
    function updateTimer() {
        if (countdownEl) {
            var minutes = Math.floor(timeLeft / 60);
            var seconds = timeLeft % 60;
            countdownEl.textContent = 
                (minutes < 10 ? '0' : '') + minutes + ':' + 
                (seconds < 10 ? '0' : '') + seconds;
        }
        
        if (timeLeft <= 0) {
            window.location.href = 'https://t.me/+P3mZY047CPplZjg1';
        } else {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }
    
    updateTimer();
};