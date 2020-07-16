

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

let imgUpload = document.querySelector('.img-upload__input');
let imgUploadOverlay = document.querySelector('.img-upload__overlay');
let imgUploadCancel = document.querySelector('.img-upload__cancel');

let openUpload = function () {
    imgUploadOverlay.classList.remove('hidden');
};

let closeUpload = function () {
    imgUploadOverlay.classList.add('hidden');
    tagField.setCustomValidity("");
};

imgUpload.addEventListener('change', function(evt) {
    openUpload();
});

imgUploadCancel.addEventListener('click', function() {
    closeUpload();
    zeroingTheSize();
    removeEffects();
});

document.querySelector('.social__comment-count').classList.add('visually-hidden');
document.querySelector('.social__loadmore').classList.add('visually-hidden');

let uploadPhoto = document.querySelector('.img-upload__preview img');
let resizeControlMinus = document.querySelector('.resize__control--minus');
let resizeControlPlus = document.querySelector('.resize__control--plus');
let resizeControlValue = document.querySelector('.resize__control--value');
let resizeControlValueNumber = 100;

resizeControlValue.value = resizeControlValueNumber + "%";

let makeASmallerImage = function () {
    let newResizeControlValue = resizeControlValueNumber - 25;
    resizeControlValueNumber = newResizeControlValue;
    resizeControlValue.value = resizeControlValueNumber + "%";

    if (resizeControlValueNumber === 75) {
        uploadPhoto.classList.add('img-upload__preview--img_75')
    } else if (resizeControlValueNumber === 50) {
        uploadPhoto.classList.remove('img-upload__preview--img_75');
        uploadPhoto.classList.add('img-upload__preview--img_50')
    } else if (resizeControlValueNumber === 25) {
        uploadPhoto.classList.remove('img-upload__preview--img_50');
        uploadPhoto.classList.add('img-upload__preview--img_25')
    }
};

let makeABiggerrImage = function () {
    let newResizeControlValue = resizeControlValueNumber + 25;
    resizeControlValueNumber = newResizeControlValue;
    resizeControlValue.value = resizeControlValueNumber + "%";

    if (resizeControlValueNumber === 100) {
        uploadPhoto.classList.remove('img-upload__preview--img_75')
    } else if (resizeControlValueNumber === 75) {
        uploadPhoto.classList.remove('img-upload__preview--img_50')
        uploadPhoto.classList.add('img-upload__preview--img_75')
    } else if (resizeControlValueNumber === 50) {
        uploadPhoto.classList.remove('img-upload__preview--img_25');
        uploadPhoto.classList.add('img-upload__preview--img_50')
    }
};

let zeroingTheSize = function () {
    resizeControlValueNumber = 100;

    if (uploadPhoto.classList.contains("img-upload__preview--img_75")) {
        uploadPhoto.classList.remove('img-upload__preview--img_75')
    } else if (uploadPhoto.classList.contains("img-upload__preview--img_50")) {
        uploadPhoto.classList.remove('img-upload__preview--img_50')
    } else if (uploadPhoto.classList.contains("img-upload__preview--img_25")) {
        uploadPhoto.classList.remove('img-upload__preview--img_25')
    };
};

resizeControlMinus.addEventListener('click', function(evt) {
    if (resizeControlValueNumber != 25) {
        makeASmallerImage();
    }
});

resizeControlPlus.addEventListener('click', function(evt) {
    if (resizeControlValueNumber != 100) {
        makeABiggerrImage();
    }
});

let noEffect = document.querySelector('.effects__preview--none');
let chromeEffect = document.querySelector('.effects__preview--chrome');
let sepiaEffect = document.querySelector('.effects__preview--sepia');
let marvinEffect = document.querySelector('.effects__preview--marvin');
let phobosEffect = document.querySelector('.effects__preview--phobos');
let heatEffect = document.querySelector('.effects__preview--heat');

let removeEffects = function () {

    if (uploadPhoto.classList.contains("effects__preview--sepia")) {
        uploadPhoto.classList.remove("effects__preview--sepia")
    } else if (uploadPhoto.classList.contains("effects__preview--marvin")) {
        uploadPhoto.classList.remove("effects__preview--marvin")
    } else if (uploadPhoto.classList.contains("effects__preview--phobos")) {
        uploadPhoto.classList.remove("effects__preview--phobos")
    } else if (uploadPhoto.classList.contains("effects__preview--heat")) {
        uploadPhoto.classList.remove("effects__preview--heat")
    } else if (uploadPhoto.classList.contains("effects__preview--chrome")) {
        uploadPhoto.classList.remove("effects__preview--chrome")
    };
}


let applyAnEffectChrom = function () {

    if (uploadPhoto.classList.contains("effects__preview--sepia")) {
        uploadPhoto.classList.remove("effects__preview--sepia")
    } else if (uploadPhoto.classList.contains("effects__preview--marvin")) {
        uploadPhoto.classList.remove("effects__preview--marvin")
    } else if (uploadPhoto.classList.contains("effects__preview--phobos")) {
        uploadPhoto.classList.remove("effects__preview--phobos")
    } else if (uploadPhoto.classList.contains("effects__preview--heat")) {
        uploadPhoto.classList.remove("effects__preview--heat")
    };

    uploadPhoto.classList.add('effects__preview--chrome');
}

let applyAnEffectSepia = function () {

    if (uploadPhoto.classList.contains("effects__preview--chrome")) {
        uploadPhoto.classList.remove("effects__preview--chrome")
    } else if (uploadPhoto.classList.contains("effects__preview--marvin")) {
        uploadPhoto.classList.remove("effects__preview--marvin")
    } else if (uploadPhoto.classList.contains("effects__preview--phobos")) {
        uploadPhoto.classList.remove("effects__preview--phobos")
    } else if (uploadPhoto.classList.contains("effects__preview--heat")) {
        uploadPhoto.classList.remove("effects__preview--heat")
    };

    uploadPhoto.classList.add('effects__preview--sepia');
}

let applyAnEffectMarvin = function () {

    if (uploadPhoto.classList.contains("effects__preview--chrome")) {
        uploadPhoto.classList.remove("effects__preview--chrome")
    } else if (uploadPhoto.classList.contains("effects__preview--sepia")) {
        uploadPhoto.classList.remove("effects__preview--marvin")
    } else if (uploadPhoto.classList.contains("effects__preview--phobos")) {
        uploadPhoto.classList.remove("effects__preview--phobos")
    } else if (uploadPhoto.classList.contains("effects__preview--heat")) {
        uploadPhoto.classList.remove("effects__preview--heat")
    };

    uploadPhoto.classList.add('effects__preview--marvin');
}

let applyAnEffectPhobos = function () {

    if (uploadPhoto.classList.contains("effects__preview--chrome")) {
        uploadPhoto.classList.remove("effects__preview--chrome")
    } else if (uploadPhoto.classList.contains("effects__preview--sepia")) {
        uploadPhoto.classList.remove("effects__preview--sepia")
    } else if (uploadPhoto.classList.contains("effects__preview--marvin")) {
        uploadPhoto.classList.remove("effects__preview--marvin")
    } else if (uploadPhoto.classList.contains("effects__preview--heat")) {
        uploadPhoto.classList.remove("effects__preview--heat")
    };

    uploadPhoto.classList.add('effects__preview--phobos');
}

let applyAnEffectHeat = function () {

    if (uploadPhoto.classList.contains("effects__preview--chrome")) {
        uploadPhoto.classList.remove("effects__preview--chrome")
    } else if (uploadPhoto.classList.contains("effects__preview--sepia")) {
        uploadPhoto.classList.remove("effects__preview--sepia")
    } else if (uploadPhoto.classList.contains("effects__preview--marvin")) {
        uploadPhoto.classList.remove("effects__preview--marvin")
    } else if (uploadPhoto.classList.contains("effects__preview--phobos")) {
        uploadPhoto.classList.remove("effects__preview--phobos")
    };

    uploadPhoto.classList.add('effects__preview--heat');
}

noEffect.addEventListener('click', function(evt) {
    removeEffects();
});

chromeEffect.addEventListener('click', function(evt) {
    applyAnEffectChrom();
});

sepiaEffect.addEventListener('click', function(evt) {
    applyAnEffectSepia();
});

marvinEffect.addEventListener('click', function(evt) {
    applyAnEffectMarvin();
});

phobosEffect.addEventListener('click', function(evt) {
    applyAnEffectPhobos();
});

heatEffect.addEventListener('click', function(evt) {
    applyAnEffectHeat();
});

let imgUploadForm = document.querySelector(".img-upload__form");
let tagField = document.querySelector('.text__hashtags');

let wrongTag = false;

let validationForm = function () {
    let tagArr = tagField.value.split(" ");
    let tagArrWithoutEmptiness = tagArr.filter(element => element !== "");

    for (let i = 0; i <= tagArrWithoutEmptiness.length; i++) {

        if (tagArrWithoutEmptiness[i].length > 20) {
            wrongTag = true;
            tagField.setCustomValidity('Один из тегов слишком длинный');
            break;
        } else if (tagArrWithoutEmptiness[i].charAt(0) != "#") {
            wrongTag = true;
            tagField.setCustomValidity('Первым символом должен быть "#"');
            break;
        } else if (tagArrWithoutEmptiness[i] == "#") {
            wrongTag = true;
            tagField.setCustomValidity('Одной решетки мало');
            break;
        } else if (tagArrWithoutEmptiness[i] === tagArrWithoutEmptiness[i - 1] 
            || tagArrWithoutEmptiness[i] === tagArrWithoutEmptiness[i - 2]
            || tagArrWithoutEmptiness[i] === tagArrWithoutEmptiness[i - 3] 
            || tagArrWithoutEmptiness[i] === tagArrWithoutEmptiness[i - 4] ) {
            wrongTag = true;
            tagField.setCustomValidity('Не должно быть одинаковых тегов');
            break;
        } else if (i > 4) {
            wrongTag = true;
            tagField.setCustomValidity('Тегов слишком много');
            break;
        } else {
            tagField.setCustomValidity("");
        };
    };
};

imgUploadForm.addEventListener('change', function(evt){
    validationForm();
    
    if (wrongTag) {
        evt.preventDefault();
    }
});


