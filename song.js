document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.querySelector(".container audio");
  
  audioElement.addEventListener("play", function() {
    setTimeout(function() {
      const paragraphs = document.querySelectorAll(".container p");

      // 랜덤한 색상을 생성하는 함수
      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // 순차적으로 opacity를 증가시키는 함수
      function fadeInSequentially(paragraphs, index) {
        if (index >= paragraphs.length) return; // 모든 단락이 처리되었으면 종료

        paragraphs[index].style.backgroundColor = getRandomColor(); // 랜덤한 색상 지정
        paragraphs[index].style.opacity = 0; // 처음에는 투명도를 0으로 설정

        // 투명도를 1로 변화시키는 애니메이션
        let opacity = 0;
        const intervalId = setInterval(function () {
          opacity += 0.1;
          paragraphs[index].style.opacity = opacity;
          if (opacity >= 1) {
            clearInterval(intervalId); // 애니메이션 종료
            fadeInSequentially(paragraphs, index + 1); // 다음 단락에 대해 재귀적으로 호출
          }
        }, 80); // 0.1초마다 투명도를 조절하여 부드러운 페이드 인 효과 구현
      }

      // 오디오 재생 후 2초 뒤에 순차적으로 페이드 인 효과 적용
      fadeInSequentially(paragraphs, 0);
    }, 8000); // 2초 뒤에 실행
  });
});
