var answerSeen = 0;
function angleUp(id, angleIcon){
	var answer = document.getElementById(id);

	if (id == '.faq ul.docs-cont p') {
			var docs = document.querySelectorAll(id);
			var firstdocs = document.querySelector(id);
		
	if (firstdocs.style.display = 'none') {
		for (var i = 0; i < docs.length; i++) {
		docs[i].style.display = 'block';
	 	docs[i].style.width = 'auto';
	  }
	  return
	}else{
		for (var i = 0; i < docs.length; i++) {
			console.log('hi');
			docs[i].style.display = 'none';

	  }
		
	}
}
		if (answer.style.display == 'none' && id.length <= 5) {

		
	var paragraphs = document.querySelectorAll('.faq ul p');
	if (paragraphs) {
		for (var i = 0; i < paragraphs.length; i++) {
			paragraphs[i].style.display = 'none';
		}
	}
	
	answer.style.display = 'block';
	answer.style.height = 'auto';
	var angleIcon = document.getElementById(angleIcon);
	angleIcon.setAttribute('class', ' fa fa-angle-down onclick');
}
else{
	answer.style.display = 'none';
	angleIcon.setAttribute('class', ' fa fa-angle-down onmouseout');
}
}
function angleRight(angleIcon) {
	var angleIcon = document.getElementById(angleIcon);
	angleIcon.setAttribute('class', ' fa fa-angle-down onmouseover');
}

function angleDown(angleIcon) {
	var angleIcon = document.getElementById(angleIcon);
	angleIcon.setAttribute('class', ' fa fa-angle-down onmouseout');
}

function closeCookieModal() {
	document.getElementById('accept-cookie').style.display = 'none';
}