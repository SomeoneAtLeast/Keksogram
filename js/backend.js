"use strict";

(function () {

    const URL = 'https://js.dump.academy/kekstagram';

    window.upload = function (data, onSuccess) {
        let xhr = new XMLHttpRequest;
        xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            onSuccess(xhr.response);
        });

        xhr.open('POST', URL);
        xhr.send(data);
    };
})();