window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
});

// Atur efek awal
document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(50px)';
    sec.style.transition = 'all 0.6s ease-out';
});
