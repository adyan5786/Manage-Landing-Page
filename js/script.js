const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const backdrop = document.getElementById('menu-backdrop');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');

    const isOpen = !nav.classList.contains('hidden');

    if (isOpen) {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
    } else {
        backdrop.classList.add('opacity-0');
        backdrop.classList.remove('opacity-100');
    }
});