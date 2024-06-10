document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.item');
    
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            var paragraph = item.querySelector('p');
            if (paragraph) {
                if (paragraph.style.display === 'none') {
                    paragraph.style.display = 'block'; // 보이게 함
                } else {
                    paragraph.style.display = 'none'; // 숨김
                }
            }
        });
    });

    // 초기에 모든 p 요소를 감추도록 설정
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function (paragraph) {
        paragraph.style.display = 'none';
    });
});
