// get element node
const photoBlogUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const containerRowEl = document.querySelector('.container .row')

//
fetch(photoBlogUrlEndpoint)
  .then(res => res.json())
  .then(photos => {

    console.log(photos);

    displayPolarid(photos)

  }).catch(error => {
    console.error(error)
});
