
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1
});
const bounds = [[0, 0], [1000, 1000]];
L.imageOverlay('daddy.png', bounds).addTo(map);
map.fitBounds(bounds);


const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
});
