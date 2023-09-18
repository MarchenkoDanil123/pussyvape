document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const firstWindow = document.querySelector(".firstwindow");
    const warning = document.querySelector(".warning");
    const all_content = document.querySelector(".all_content");
    const intro = document.getElementById("intro"); // Получаем элемент анимации

    // Проверяем, есть ли в локальном хранилище метка о том, что анимацию уже показали
    const animationShown = localStorage.getItem("animationShown");

    if (animationShown) {
        // Если анимацию уже показали, скрываем ее
        intro.style.display = "none";
        all_content.style.display = "block"; // Отображаем контент
    } else {
        // Если анимацию еще не показывали
        yesButton.addEventListener("click", function () {
            firstWindow.style.opacity = 0;
            // Проигрываем анимацию перед скрытием
            firstWindow.style.animation = "animate2 2s forwards";
            setTimeout(() => {
                firstWindow.style.display = "none";
            }, 500);
            setTimeout(() => {
                all_content.style.display = "block";
            }, 800);

            // Сохраняем метку о том, что анимацию уже показали
            localStorage.setItem("animationShown", "true");
        });

        noButton.addEventListener("click", function () {
            firstWindow.style.animation = "animate2 2s forwards";
            setTimeout(() => {
                firstWindow.style.display = "none";
            }, 500);

            setTimeout(() => {
                warning.style.display = "block";
            }, 700);

            // Сохраняем метку о том, что анимацию уже показали
            localStorage.setItem("animationShown", "true");
        });
    }
});


// бургер

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    });
});
