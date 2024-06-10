document.addEventListener('DOMContentLoaded', () => {
    const factCheckbox = document.getElementById('fact');
    const mumbleCheckbox = document.getElementById('mumble');
    const realSpans = document.querySelectorAll('#real');
    const mindSpans = document.querySelectorAll('#mind');

    function updateStyles() {
        if (factCheckbox.checked && !mumbleCheckbox.checked) {
            realSpans.forEach(span => {
                span.style.opacity = '1';
                span.style.filter = 'none';
            });
            mindSpans.forEach(span => {
                span.style.opacity = '0.2';
                span.style.filter = 'blur(2px)';
            });
        } else if (!factCheckbox.checked && mumbleCheckbox.checked) {
            realSpans.forEach(span => {
                span.style.opacity = '0.2';
                span.style.filter = 'blur(2px)';
            });
            mindSpans.forEach(span => {
                span.style.opacity = '1';
                span.style.filter = 'none';
            });
        } else if (!factCheckbox.checked && !mumbleCheckbox.checked) {
            realSpans.forEach(span => {
                span.style.opacity = '0.2';
                span.style.filter = 'blur(2px)';
            });
            mindSpans.forEach(span => {
                span.style.opacity = '0.2';
                span.style.filter = 'blur(2px)';
            });
        } else {
            realSpans.forEach(span => {
                span.style.opacity = '1';
                span.style.filter = 'none';
            });
            mindSpans.forEach(span => {
                span.style.opacity = '1';
                span.style.filter = 'none';
            });
        }
    }

    factCheckbox.addEventListener('change', updateStyles);
    mumbleCheckbox.addEventListener('change', updateStyles);

    updateStyles();  // Initialize styles on page load
});
