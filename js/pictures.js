'use strict'

let picturesContainer = document.querySelector('.pictures');

let photoTemplate = document.querySelector('#picture')
.content
.querySelector('.picture__link');

let photoAddress = [];

for (let i = 0; i < 25; i++) {
    photoAddress[i] = ['photos/' + i + '.jpg'];
}

let comments = ['Ну это бан', 'Четко', 'Я бы вдул', 'Первый нах', 'А кто это?', 'Я морж'];
let description = ['Мой пиздюк', 'А что вы делаеце под моим фото?', 'Тупо отдыхаем', 'Это ребята прекрасные', 'Миниатюрная дама', 'Балдеж'];

console.log(photoAddress);

let photo = [];

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for (let i = 0; i < 25; i++) {

    let randomPhoto = Math.floor(Math.random() * photoAddress.length);

    photo[i] =
        {
            url: photoAddress[randomPhoto],
            likes: getRandomInRange(15, 200),
            comments: comments[getRandomInRange(0, 5)],
            description: description[getRandomInRange(0, 5)]
    };

    photoAddress.splice(randomPhoto, 1);

    let photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo[i].url;
    photoElement.querySelector('.picture__stat--likes').textContent = photo[i].likes;
    photoElement.querySelector('.picture__stat--comments').textContent = "1";
    picturesContainer.appendChild(photoElement);
};

let bigPicture = document.querySelector('.big-picture');

bigPicture.classList.remove('hidden');

bigPicture.querySelector('.big-picture__img img').src = photo[0].url;
bigPicture.querySelector('.likes-count').textContent = photo[0].likes;
bigPicture.querySelector('.comments-count').textContent = "1";
bigPicture.querySelector('.social__picture').src = "img/avatar-" + getRandomInRange(1, 6) + ".svg";
bigPicture.querySelector('.social__text').textContent = photo[0].comments;
bigPicture.querySelector('.social__caption').textContent = photo[0].description;


document.querySelector('.social__comment-count').classList.add('visually-hidden');
document.querySelector('.social__loadmore').classList.add('visually-hidden');