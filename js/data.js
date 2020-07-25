"use strict";

(function () {
    let picturesContainer = document.querySelector('.pictures');

    let photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture__link');

    window.load(function (photos) {

        let photo = [];

        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let commentFlag = false;

        for (let i = 0; i < 25; i++) {

            photo[i] =
                {
                    url: photos[i].url,
                    likes: photos[i].likes,
                    comments: photos[i].comments[0].message,
                    description: photos[i].description,
                    src: "img/avatar-" + getRandomInRange(1, 6) + ".svg"
            };

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
    });
})();