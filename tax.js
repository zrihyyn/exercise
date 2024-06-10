document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const taxSpans = document.querySelectorAll('#tax');

    header.addEventListener('click', function() {
        // Highlight tax spans
        taxSpans.forEach(function(span) {
            span.classList.toggle('highlighted');
        });

        // Create and drop p elements
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('p');
            p.id = 'box';
            p.textContent = '세금납부자';
            p.classList.add('drop');
            document.body.appendChild(p);

            // Randomize left position and delay for drop effect
            const leftPosition = 40 + Math.random() * 20; // 40% to 60%
            p.style.left = `${leftPosition}%`;
            p.style.animationDelay = `${i * 0.1}s`;

            // Remove the element after the animation is complete
            p.addEventListener('animationend', function() {
                p.remove();
            });
        }
    });
});

