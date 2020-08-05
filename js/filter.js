(function () {
    let imgFilters = document.querySelector(".img-filters");

    imgFilters.classList.remove("img-filters--inactive");

    let imgFiltersPopular = document.querySelector("#filter-popular");
    let imgFiltersNew = document.querySelector("#filter-new");
    let imgFiltersDiscussed = document.querySelector("#filter-discussed");

    let MakeActive = function () {
        if (imgFiltersPopular === document.activeElement) {
            imgFiltersPopular.classList.add("img-filters__button--active");
            imgFiltersNew.classList.remove("img-filters__button--active");
            imgFiltersDiscussed.classList.remove("img-filters__button--active");
        } else if (imgFiltersNew === document.activeElement) {
            imgFiltersPopular.classList.remove("img-filters__button--active");
            imgFiltersNew.classList.add("img-filters__button--active");
            imgFiltersDiscussed.classList.remove("img-filters__button--active");
        } else if (imgFiltersDiscussed === document.activeElement) {
            imgFiltersPopular.classList.remove("img-filters__button--active");
            imgFiltersNew.classList.remove("img-filters__button--active");
            imgFiltersDiscussed.classList.add("img-filters__button--active");
        }
    };

    imgFiltersPopular.addEventListener("click", function () {
        MakeActive();

        while (document.querySelector(".picture__link")) {
            document.querySelector(".picture__link").remove()
        };

        photosHubCopy = photosHub.slice();
        window.loadPhotos();
    });

    imgFiltersNew.addEventListener("click", function () {
        MakeActive();

        while (document.querySelector(".picture__link")) {
            document.querySelector(".picture__link").remove()
        };

        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        photosHubCopy = photosHub.slice();
        for (let i = 0; i < getRandomInRange(8, 14); i++) {
            photosHubCopy.splice(getRandomInRange(1, 3), 1);
        };
        
        window.loadPhotos();
    });

    imgFiltersDiscussed.addEventListener("click", function () {
        MakeActive();

        while (document.querySelector(".picture__link")) {
            document.querySelector(".picture__link").remove()
        };
        photosHubCopy = photosHub.slice();
        photosHubCopy.sort(( a, b ) => a.comments.length - b.comments.length);
        window.loadPhotos();
    });
})();

