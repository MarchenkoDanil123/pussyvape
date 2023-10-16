document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const firstWindow = document.querySelector(".firstwindow");
    const warning = document.querySelector(".warning");
    const allContent = document.querySelector(".all_content");
    const intro = document.getElementById("intro");

    // Проверяем, есть ли в локальном хранилище метка о том, что анимацию уже показали
    const animationShown = localStorage.getItem("animationShown");

    if (animationShown) {
        // Если анимацию уже показали, скрываем ее
        intro.style.display = "none";
        allContent.style.display = "block"; // Отображаем контент
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
                allContent.style.display = "block";
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
