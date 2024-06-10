document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        document.getElementById('a'),
        document.getElementById('b'),
        document.getElementById('c'),
        document.getElementById('d'),
        document.getElementById('e'),
        document.getElementById('f'),
        document.getElementById('g'),
        document.getElementById('h'),
        document.getElementById('i'),
        document.getElementById('j'),
        document.getElementById('k'),
        document.getElementById('l'),
        document.getElementById('m'),
        document.getElementById('n'),
        document.getElementById('o')
    ];

    function animateElements() {
        let delay = 0;

        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.visibility = 'visible';
                setTimeout(() => {
                    element.style.visibility = 'hidden';
                }, element.id === 'n' ? 1300 : 1000); // #n 요소는 1500ms, 나머지는 1000ms 동안 보이도록 설정
            }, delay);

            delay += 1300; 
        });

        setTimeout(animateElements, delay); // 모든 애니메이션이 끝난 후 다시 호출
    }

    animateElements();
});
