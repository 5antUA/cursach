let currentIndex = 0;
const slides = document.querySelectorAll(".game-slide");
const slider = document.querySelector(".game-slider");
const dotsContainer = document.querySelector(".slider-dots");

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    // Оновлення активної крапки
    document.querySelectorAll(".slider-dots span").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

// Ініціалізація крапок
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});

document.querySelector(".slider-btn.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

document.querySelector(".slider-btn.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

updateSlider();
