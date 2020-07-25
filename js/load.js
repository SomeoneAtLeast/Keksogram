"use strict";

(function () {

    let URL = "https://javascript.pages.academy/kekstagram/data";

    window.load = function (onSuccess, onError) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = "json";

        xhr.addEventListener('load', function() {
            if (xhr.status == 200) {
                onSuccess(xhr.response);
            } else if (xhr.status == 400 || xhr.status == 404 || xhr.status == 500) {
                alert("Фотографии не загрузились");
            };
        })
        
        xhr.open("GET", URL);
        xhr.send();
    };
})();