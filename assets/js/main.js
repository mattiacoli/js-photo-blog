// get element node
const photoBlogUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const containerRowEl = document.querySelector('.container .row')
const overlayEl = document.getElementById('overlay')
const closeButton = document.getElementById('close')
const selectedImg = document.querySelector('.select-img')
const headerEl =document.querySelector('header')
const mainEl= document.querySelector('main')




fetch(photoBlogUrlEndpoint)
  .then(res => res.json())
  .then(photos => {

    console.log(photos);

    displayPolarid(photos)

    // select image from dom node
    const imageEl = document.querySelectorAll('.img-fluid')
    console.log(imageEl);

    // for each image add markup in overlay
    imageEl.forEach((image) => {
      console.log(image);

      // display overlay element when each image are clicked
      image.addEventListener('click', () => {
        overlayEl.classList.remove('d-none')
        headerEl.classList.add('blured')
        mainEl.classList.add('blured')
        // reset html
        selectedImg.innerHTML = ' '
        // insert image in html node
        selectedImg.insertAdjacentHTML('afterbegin', overlayImgMarkup(image))

      })
    })

  }).catch(error => {
    console.error(error)
  });

// close overlay when button clicked
closeButton.addEventListener('click', () => {
  overlayEl.classList.add('d-none')
  headerEl.classList.remove('blured')
  mainEl.classList.remove('blured')
})
