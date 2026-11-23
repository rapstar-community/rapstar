(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const rain = document.createElement('div');
  rain.setAttribute('aria-hidden', 'true');
  Object.assign(rain.style, {
    position: 'fixed',
    inset: '0',
    zIndex: '2147483647',
    overflow: 'hidden',
    pointerEvents: 'none'
  });
  document.body.append(rain);

  const createStar = () => {
    const star = document.createElement('img');
    star.src = '/img/estrela.png';
    star.alt = '';
    star.draggable = false;

    const size = 24 + Math.random() * 32;
    const duration = 5 + Math.random() * 4;
    const drift = -100 + Math.random() * 200;

    Object.assign(star.style, {
      position: 'absolute',
      top: '-60px',
      left: `${Math.random() * 100}vw`,
      width: `${size}px`,
      height: 'auto',
      objectFit: 'contain',
      opacity: `${0.55 + Math.random() * 0.45}`,
      transform: `rotate(${Math.random() * 360}deg)`
    });

    star.animate([
      { transform: `translate(0, 0) rotate(${Math.random() * 360}deg)`, opacity: star.style.opacity },
      { transform: `translate(${drift}px, calc(100vh + 100px)) rotate(${Math.random() * 720 + 360}deg)`, opacity: '0.2' }
    ], {
      duration: duration * 1000,
      easing: 'linear',
      fill: 'forwards'
    }).finished.finally(() => star.remove());

    rain.append(star);
  };

  const startBurst = () => {
    if (document.hidden) return;
    const count = 10 + Math.floor(Math.random() * 16);
    for (let index = 0; index < count; index += 1) {
      window.setTimeout(createStar, index * (180 + Math.random() * 220));
    }
  };

  const scheduleNext = () => {
    const delay = 30000 + Math.floor(Math.random() * 60000);
    window.setTimeout(() => {
      startBurst();
      scheduleNext();
    }, delay);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.setTimeout(startBurst, 4000), { once: true });
  } else {
    window.setTimeout(startBurst, 4000);
  }
  scheduleNext();
})();
