const sliders = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

sliders.addEventListener('mousedown', (e) => {
    isDown = true;
    sliders.classList.add('active');
    startX = e.pageX - sliders.offsetLeft;
    scrollLeft = sliders.scrollLeft;
});

sliders.addEventListener('mouseleave', () => {
    isDown = false
    sliders.classList.remove('active');
});

sliders.addEventListener('mouseup', () => {
    isDown = false
    sliders.classList.remove('active');
});

sliders.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX -sliders.offsetLeft;
    const walk = (x - startX) * 5;
    sliders.scrollLeft = scrollLeft - walk;
});