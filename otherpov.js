document.addEventListener('DOMContentLoaded', function () {
    const elements = [...document.querySelectorAll('.nextcontainer p'), document.querySelector('#again')];
    let currentIndex = 0;

    // 초기화: 첫 번째 요소만 보이도록 설정
    elements[currentIndex].style.display = 'block';

    document.addEventListener('click', function () {
        if (currentIndex < elements.length - 1) {
            currentIndex++;
            elements[currentIndex].style.display = 'block';
            elements[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

