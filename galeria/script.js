const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
  const imgSrc = image.getAttribute('src');
  const imgSrcHover = image.getAttribute('data-hover');
  
  const newImg = new Image();
  newImg.src = imgSrcHover;
  
  image.addEventListener('mouseover', () => {
    image.setAttribute('src', imgSrcHover);
  });
  
  image.addEventListener('mouseout', () => {
    image.setAttribute('src', imgSrc);
  });
});




