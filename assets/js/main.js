// get element node
const photoBlogUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const containerRowEl = document.querySelector('.container .row')
const overlayEl = document.getElementById('overlay')
const closeButton = document.getElementById('close')
const selectedImg = document.querySelector('.select-img')




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

      const markup = `
        <div class="select-img mb-3">
          <img src=${image.src} alt='${image.alt}' />
        </div>`

      // display overlay element when each image are clicked
      image.addEventListener('click', () => {
        overlayEl.classList.remove('d-none')
        // reset html
        selectedImg.innerHTML = ' '
        // insert image in html node
        selectedImg.insertAdjacentHTML('afterbegin', markup)

      })
    })

  }).catch(error => {
    console.error(error)
  });

// close overlay when button clicked
closeButton.addEventListener('click', () => {
  overlayEl.classList.add('d-none')
})

