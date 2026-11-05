/**
 * CYBERNETIC MATRIX CANVAS ENGINE (CLIENT-SIDE GPU 60 FPS)
 * Specification: ARTIFICIAL CRAFT // ZERO SERVER RENDER FEE // DETERMINISTIC RENDER
 */

(function () {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Resize listener
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  // Mouse telemetry tracking
  const mouse = { x: -1000, y: -1000, active: false };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Node configuration
  const NODE_COUNT = Math.min(65, Math.floor((width * height) / 18000));
  const nodes = [];

  function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() > 0.8 ? 2 : 1,
        alpha: Math.random() * 0.4 + 0.1,
        type: Math.random() > 0.7 ? 'cross' : 'dot'
      });
    }
  }

  initNodes();

  // FPS Counter tracking
  let lastTime = performance.now();
  let frameCount = 0;
  let currentFps = 60;
  const fpsElements = document.querySelectorAll('.dynamic-fps');

  function render(time) {
    frameCount++;
    if (time - lastTime >= 1000) {
      currentFps = Math.round((frameCount * 1000) / (time - lastTime));
      frameCount = 0;
      lastTime = time;
      fpsElements.forEach((el) => {
        el.textContent = `${currentFps} FPS`;
      });
    }

    ctx.clearRect(0, 0, width, height);

    // Subtle 48px Cybernetic Grid
    ctx.strokeStyle = 'rgba(31, 31, 46, 0.15)';
    ctx.lineWidth = 1;
    const gridSize = 48;
    const startX = 0;
    const startY = 0;

    ctx.beginPath();
    for (let x = startX; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = startY; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Node updates & line connections
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      else if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      else if (p.y > height) p.y = 0;

      // Draw node marker
      if (p.type === 'cross') {
        ctx.strokeStyle = `rgba(0, 229, 255, ${p.alpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x - 3, p.y);
        ctx.lineTo(p.x + 3, p.y);
        ctx.moveTo(p.x, p.y - 3);
        ctx.lineTo(p.x, p.y + 3);
        ctx.stroke();
      } else {
        ctx.fillStyle = `rgba(83, 34, 255, ${p.alpha * 0.9})`;
        ctx.fillRect(p.x - 1, p.y - 1, 2, 2);
      }

      // Proximity connection to other nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const p2 = nodes[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const strength = (1 - dist / 120) * 0.18;
          ctx.strokeStyle = `rgba(0, 229, 255, ${strength})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Mouse interactive tether
      if (mouse.active) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 140) {
          const mstrength = (1 - mdist / 140) * 0.35;
          ctx.strokeStyle = `rgba(0, 229, 255, ${mstrength})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();
