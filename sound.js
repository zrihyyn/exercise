document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    const audioSpans = document.querySelectorAll(".audio-span");
    let audio = null;

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        container.style.display = "flex";

        audioSpans.forEach(span => {
            span.addEventListener("mouseenter", function() {
                const audioSrc = span.getAttribute("data-audio");
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
                audio = new Audio(audioSrc);
                audio.play();
            });

            span.addEventListener("mouseleave", function() {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        });
    });
});
