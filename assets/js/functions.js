/**
 * Generates the HTML markup for a polaroid using photo data.
 * 
 * @param {Object} photo - Object containing the photo information.
 * @param {string} photo.url - URL of the image to display.
 * @param {string} photo.date - Date associated with the photo.
 * @param {string} photo.title - Title of the photo.
 * @returns {string} HTML markup of the polaroid as a string.
 */
function polaroidMarkup(photo) {
  return `
  <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
    <figure>
      <div class="pin">
        <img src="./assets/img/pin.svg" alt="">
      </div>
      <img src=${photo.url} alt=''  class="img-fluid"/>
      <figcaption>
        <div class="date">${photo.date}</div>
        <div class="title">${photo.title}</div>
      </figcaption>
    </figure>          
  </div>
`
}


/**
 * Displays polaroid elements by generating and inserting their HTML markup into the  dom element
 * 
 * @param {Object[]} arr - Array of photo objects.
 * @returns {void}
 */
function displayPolarid(arr) {
  arr.forEach((photo) => {

    const markup = polaroidMarkup(photo)

    containerRowEl.insertAdjacentHTML('beforeend', markup)


  })
}