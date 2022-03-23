const seouls = document.querySelectorAll('.seouls');
const showImage = document.querySelector('.change');

seouls.forEach((el, index) => {
  el.addEventListener('click', function (event) {
    showImage.setAttribute('src', `./images/inSeoul${index + 1}.png`);
    console.log('제발');
  });
});
