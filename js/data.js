"use strict";

(function () {
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

    let commentFlag = false;

    for (let i = 0; i < 25; i++) {

        let randomPhoto = Math.floor(Math.random() * photoAddress.length);

        photo[i] =
            {
                url: photoAddress[randomPhoto],
                likes: getRandomInRange(15, 200),
                comments: comments[getRandomInRange(0, 5)],
                description: description[getRandomInRange(0, 5)],
                src: "img/avatar-" + getRandomInRange(1, 6) + ".svg"
        };

        photoAddress.splice(randomPhoto, 1);

        let bigPicture = document.querySelector('.big-picture');

        let createsComments = function() {
            for (let i = 0; i < getRandomInRange(1, 6); i++) {
                let numberOfComments =  getRandomInRange(1, 3);
            
                let commentTemplate = document.querySelector('#comment')
                .content
                .querySelector('.social__comment');
            
                let commentElement = commentTemplate.cloneNode(true);
                commentElement.querySelector('.social__picture').src = "img/avatar-" + getRandomInRange(1, 6) + ".svg";
                commentElement.querySelector('.social__text').textContent = photo[i].comments;
                document.querySelector('.social__comments').appendChild(commentElement);
            
            
                bigPicture.querySelector('.comments-count').textContent = numberOfComments;
                bigPicture.querySelector('.social__comment-number').textContent = numberOfComments;
            };    
        };

        let сlickOnPreview = function() {
        
            bigPicture.classList.remove('hidden');
        
            bigPicture.querySelector('.social__header .social__picture').src = photo[i].src;
            bigPicture.querySelector('.big-picture__img img').src = photo[i].url;
            bigPicture.querySelector('.likes-count').textContent = photo[i].likes;
            bigPicture.querySelector('.social__caption').textContent = photo[i].description;

        };

        let сlickOnBigPictureClose = function() {

            bigPicture.classList.add('hidden');

        };

        let BigPictureClose = document.querySelector('.big-picture__cancel');

        let photoElement = photoTemplate.cloneNode(true);
        photoElement.addEventListener("click", function(evt) {
            сlickOnPreview();
            if (!commentFlag) {
                createsComments();

                commentFlag = true;
            }
        });
        BigPictureClose.addEventListener("click", function(evt) {
            сlickOnBigPictureClose();
        });
        photo
        photoElement.querySelector('.picture__img').src = photo[i].url;
        photoElement.querySelector('.picture__stat--likes').textContent = photo[i].likes;
        photoElement.querySelector('.picture__stat--comments').textContent = "1";
        picturesContainer.appendChild(photoElement);
    };
})();