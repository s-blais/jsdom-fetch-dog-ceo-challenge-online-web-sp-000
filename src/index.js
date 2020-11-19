console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  // loadBreedOptions();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(response => response.json())
  //.then(json => console.log(json))
  .then(json => addImages(json))
}

function addImages(json) {
  const putThemHere = document.getElementById("dog-image-container")
  // debugger
  json.message.forEach(img => putThemHere.innerHTML += (`<img src='${img}'>`))
}