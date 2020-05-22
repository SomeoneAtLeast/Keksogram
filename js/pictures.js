'use strict'

let photoTemplate = document.querySelector('#picture-template')
.content
.querySelector('.picture');

let photoAddress = [];

for (let i = 0; i < 25; i++) {
    photoAddress[i] = ['photos/' + i + '.jpg'];
}

let comments = ['Ну это бан', 'Четко', 'Я бы вдул', 'Первый нах', 'А кто это?', 'Я морж'];
let description = ['Мой пиздюк', 'А что вы делаеце под моим фото?', 'Тупо отдыхаем', 'Это ребята прекрасные', 'Миниатюрная дама', 'Балдеж'];

console.log(photoAddress);

let photo = [];

for (let i = 0; i < 5; i++) {

    let randomPhoto = Math.floor(Math.random() * photoAddress.length);

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    photo[i] =
        {
            url: photoAddress[randomPhoto],
            likes: getRandomInRange(15, 200),
            comments: comments[getRandomInRange(0, 5)],
            description: description[getRandomInRange(0, 5)]
    };

    photoAddress.splice(randomPhoto, 1);

    let photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('img').src = photo[i].url;
    photoElement.querySelector('.picture-likes').textContent = photo[i].likes;
    photoElement.querySelector('.picture-comments').textContent = "1";
    photoTemplate.appendChild(photoElement);
};

console.log(photo);