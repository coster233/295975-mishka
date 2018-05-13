var modalwindow = document.querySelector(".modal");
var modalclose = document.querySelector(".modal__button");
var catalogLink = document.querySelectorAll(".catalog__svg-link");
var buttonopen = document.querySelector(".goods-week__order");


if(buttonopen) {
buttonopen.addEventListener("click", function (evt) {
evt.preventDefault();
modalwindow.classList.add("modal--opened");
});
}

if(catalogLink) {
for (var j = 0; j < catalogLink.length; j++) {
catalogLink[j].addEventListener("click", function (evt) {
evt.preventDefault();
modalwindow.classList.add("modal--opened");
})
}
}

modalclose.addEventListener("click", function (evt) {
evt.preventDefault();
modalwindow.classList.remove("modal--opened");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (modalwindow.classList.contains("modal--opened")) {
modalwindow.classList.remove("modal--opened");
}
}
});
