document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const firstWindow = document.querySelector(".firstwindow");
    const warning = document.querySelector(".warning");
    const all_content = document.querySelector(".all_content");


    yesButton.addEventListener("click", function () {
        firstWindow.style.opacity = 0;

        // Проигрывание анимации перед скрытием
        firstWindow.style.animation = "animate2 2s forwards"; 

        setTimeout(() => {
            firstWindow.style.display = "none";
        }, 500);
        setTimeout(() => {
        all_content.style.display = "block";
        }, 800);
    });



    noButton.addEventListener("click", function () {
        firstWindow.style.animation = "animate2 2s forwards"; 

        setTimeout(() => {
            firstWindow.style.display = "none";
        }, 500);

        setTimeout(() => {
            warning.style.display = "block";
        }, 700);
    });
})