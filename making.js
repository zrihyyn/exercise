document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('paragraph');
    const words = paragraph.textContent.split(' ');
    const pElements = document.querySelectorAll('.container p');

    // 초기 설정: #paragraph 숨기기
    paragraph.style.border = 'none';
    paragraph.innerHTML = '';

    let wordIndex = 0;
    let interval;

    const revealWord = () => {
        if (wordIndex < words.length) {
            paragraph.innerHTML += words[wordIndex] + ' ';
            wordIndex++;
        } else {
            clearInterval(interval);
        }
    };

    pElements.forEach(p => {
        p.addEventListener('click', () => {
            // 첫 클릭 시 #paragraph의 테두리 생성
            if (wordIndex === 0) {
                paragraph.style.border = 'solid 1.5px rgb(197, 0, 0)';
            }

            // 이미 interval이 있다면 새로 시작하지 않음
            if (!interval) {
                interval = setInterval(revealWord, 450);
            }
        });
    });
});