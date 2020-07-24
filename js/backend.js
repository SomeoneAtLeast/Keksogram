"use strict";

(function () {

    const URL = 'https://javascript.pages.academy/kekstagram';

    window.upload = function (data, onSuccess) {
        let xhr = new XMLHttpRequest;
        xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            onSuccess(xhr.response);

            if (xhr.status == 200) {
                alert("Ушло");
            } else if (xhr.status == 400) {
                alert("Что-то пошло не так");
            };
        });

        xhr.open('POST', URL);
        xhr.send(data);
    };
})();