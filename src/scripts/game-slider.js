document.querySelectorAll(".game-block").forEach((block) => {
    const sliderContainer = block.querySelector(".game-slider-container");
    const slider = sliderContainer.querySelector(".game-slider");
    const slides = slider.querySelectorAll(".game-slide");
    const dotsContainer = block.querySelector(".slider-dots");
    const btnLeft = sliderContainer.querySelector(".slider-btn.left");
    const btnRight = sliderContainer.querySelector(".slider-btn.right");

    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;

        dotsContainer.querySelectorAll("span").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    dotsContainer.innerHTML = "";

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    btnLeft.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    btnRight.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    updateSlider();
});
