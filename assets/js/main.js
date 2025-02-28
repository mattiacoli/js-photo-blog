// get element node

const photoBlogUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const containerRowEl = document.querySelector('.container .row')

fetch(photoBlogUrlEndpoint)
  .then(res => res.json())
  .then(photos => {

    console.log(photos);

    photos.forEach(photo => {
      console.log(photo);

      const markup = `
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

      containerRowEl.insertAdjacentHTML('beforeend', markup)


    });

  }) .catch(error => {
    console.error(error)
  });
