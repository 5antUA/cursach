document.querySelectorAll(".slide-cover img").forEach((img) => {
    img.addEventListener("click", () => {
        const isFullscreen = img.classList.contains("screenshot-fullscreen");
        if (isFullscreen) {
            // Закриваємо: повертаємо картинку назад у .slide-cover
            img.classList.remove("screenshot-fullscreen");
            document.body.style.overflow = "";

            // Знаходимо батька (slide-cover) з атрибутом data-placeholder
            const placeholder = document.querySelector(
                `[data-placeholder="${img.dataset.id}"]`
            );
            if (placeholder) {
                placeholder.appendChild(img);
            }
        } else {
            // Відкриваємо: додаємо fullscreen і переносимо картинку у body
            img.classList.add("screenshot-fullscreen");
            document.body.appendChild(img);
            document.body.style.overflow = "hidden";
        }
    });
});
