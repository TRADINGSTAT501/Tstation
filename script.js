window.onload = function() {
  var timer = 10;
  var el = document.getElementById('countdown') || document.getElementById('timer');
  function update() {
    if (el) {
      var min = Math.floor(timer / 60);
      var sec = timer % 60;
      el.textContent = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
    }
    if (timer === 0) {
      window.location.href = 'https://t.me/+P3mZY047CPplZjg1';
    } else {
      timer--;
      setTimeout(update, 1000);
    }
  }
  update();
}