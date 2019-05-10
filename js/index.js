var slides = document.querySelectorAll('.container .ourClients .client');
var currentSlide = 0;
	slides.onload = firstSlide();


 	 function firstSlide() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'client');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].setAttribute('class', 'client show');
}


var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

if (prevBtn) {
	prevBtn.onclick = function(){
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'client');
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	slides[currentSlide].setAttribute('class', 'client show prev');
  }
}
if (nextBtn) {
	nextBtn.onclick = function() {
	slides[currentSlide] = slides[currentSlide].setAttribute('class', 'client');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].setAttribute('class', 'client show next');

  }
}

