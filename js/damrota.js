var showGallaryBtn = document.getElementById('showGallaryBtn');
var showGallaryphotos = document.getElementById('showGallaryphotos');
showGallaryBtn.onclick = function(){
	showGallaryphotos.style.display = 'block';
	firstSlide();
}
var closeBtn = document.getElementById('closeBtn');
closeBtn.onclick = function(){
	showGallaryphotos.style.display = 'none';
}

var slides = document.querySelectorAll('.showGallaryphotos img');
var currentSlide = 0;
	slides.onload = firstSlide();


 	 function firstSlide() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'photoslide');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].setAttribute('class', 'photoslide show');

}


var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

if (prevBtn) {
	prevBtn.onclick = function(){
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'photoslide');
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].setAttribute('class', 'photoslide show prev');
  }
}
if (nextBtn) {
	nextBtn.onclick = function() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'photoslide');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].setAttribute('class', 'photoslide show next');

  }
}

