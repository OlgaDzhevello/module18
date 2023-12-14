
function changePhoto(photoNum) {

    // Ищем нужный контейнер
    const imgBox = document.querySelector('#project-img');

  // Меняем фоновое изображение
    imgBox.style.backgroundImage = "url(./images/project" + photoNum + ".jpg)";

    // Убираем активный класс у всех пунктов меню
    document.querySelectorAll('.project-navigation li').forEach(item => {
        item.classList.remove('item-active');
    });

    // Добавляем активный класс к выбранному пункту меню
    document.querySelector('#proj-item' + photoNum).classList.add('item-active');
}


