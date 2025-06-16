function castSpell() {
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 800);
  }

  console.log('✨ Lumos spell cast!');
}
