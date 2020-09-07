"use strict";

(function () {
    const FILE_TYPES = ["gif", "jpg", "jpeg", "png"];
    let fileChooser = document.querySelector(".img-upload__input");
    let uploadedPhoto = document.querySelector(".img-upload__preview img");
    let effectsPreview = document.querySelectorAll(".effects__preview");
    let effectsPreviewSingle = document.querySelector(".effects__preview");

    console.log(effectsPreview);

    fileChooser.addEventListener ("change", function () {
        let file = fileChooser.files[0];
        let fileName = file.name.toLowerCase();

        let matches = FILE_TYPES.some(function (it) {
            return fileName.endsWith(it);
        })

        if (matches) {
            let reader = new FileReader();

            reader.addEventListener("load", function () {
                uploadedPhoto.src = reader.result;

                effectsPreview.forEach(function (item, i, arr) {
                    item.style.backgroundImage = "url(" + reader.result + ")";
                });
            });

            reader.readAsDataURL(file);
        }
    })

})();