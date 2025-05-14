// Make the heading blink every 700ms
setInterval(() => {
  const h1 = document.querySelector('.blinking');
  h1.style.visibility = h1.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 700);
