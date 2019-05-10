var body = document.body;
var html = document.documentElement;
var subMenu = document.getElementById('sub-menu');
var header = document.getElementById('header');
var links = document.querySelectorAll('.container header .mainMenu .link');
var indexHeader = document.querySelector('.container header#header.indexHeader');
var logoPad = document.querySelector('.container header .logo');
var path = document.querySelector('.container header .logo svg path#p1');
var svg = document.querySelector('.container header .logo svg');

window.onscroll = function () {
	var pageUrl = window.location.href;
	var currPageUrl = pageUrl.split('/');
	for (var i = 0; i < currPageUrl.length; i++) {
		var pageNames = currPageUrl[i];
		var indexPage = pageNames.indexOf('index.html');
		var whyUspage = pageNames.indexOf('why-us.html');
		var teamPage = pageNames.indexOf('team.html');
		var damrota41Page = pageNames.indexOf('damrota41.html');
		// console.log(whyUspage);
		if (indexPage === 0 ) {
			animateFa(); 
		}
		if (whyUspage === 0 ) {
			animateFaWhyUs(); 
		}
		if (teamPage === 0 ) {
			animateTeamDesc(); 
		}
		if (damrota41Page === 0 ) {
			fixedAsideBox(); 
		}
	}
	scrollHeader();
}

function fixedgrid() {
	var photoSliderInner = document.getElementById('photoSliderInner').offsetHeight;
var photoSlider = document.getElementById('photoSlider').offsetHeight;
var gallary = document.getElementById('gallary-spec').offsetHeight;
var amenities = document.getElementById('amenities').offsetHeight;
var neigbourhood = document.getElementById('neigbourhood').offsetHeight;
var minHeight = photoSlider + photoSliderInner;
var maxHeight = photoSlider + photoSliderInner + gallary + amenities + neigbourhood;

if (photoSlider) {
	if (body.scrollTop > minHeight  && html.scrollTop < maxHeight) {
	var intrestedInHome = document.getElementById('intrestedInHome').style.position = 'fixed';
	alert('hello');
}else{
	var intrestedInHome = document.getElementById('intrestedInHome').style.position = 'static';
}
}

}

function scrollHeader() {
	if (body.scrollTop > 200  || html.scrollTop > 200) {
	subMenu.style.display = 'none';
	header.className = 'scroll';
	for (var i = 0; i < links.length; i++) {
		links[i].style.color = '#2D303F';
	}
	if (svg) {
		svg.style.padding = '5px 0 25px 0px ';
	}
	if (logoPad) {
		logoPad.style.padding = '0';
	}
	if (path) {
		path.style.fill = '#4b4f66';
	}
	if (indexHeader) {
		indexHeader.style.backgroundColor =  'rgba(255, 255, 255, 0.8)';
	}
}else{
	subMenu.style.display = 'block';
	header.className = 'indexHeader';
	for (var i = 0; i < links.length; i++) {
		links[i].style.color = '#2D303F';
	}
	if (svg) {
		svg.style.padding = '0';
	}
	if (logoPad) {
		logoPad.style.padding = '17px 0 0 30px ';
	}
	if (path) {
		path.style.fill = '#fff';
	}
	if (indexHeader) {
		indexHeader.style.backgroundColor = 'transparent';
	}
  }

}

function animateFa() {
	var slider = document.getElementById('slider').offsetHeight;
 	var flatsSection = document.getElementById('flats-section').offsetHeight;
	var whyUsHeader = document.getElementById('whyUsHeader').offsetHeight;
	var whyUs = document.getElementById('whyUs').offsetHeight;
	var minHeight = slider + flatsSection + whyUsHeader;
	var maxHeight = slider + flatsSection + whyUs;
 	if (body.scrollTop > minHeight - 200 || html.scrollTop > minHeight - 200 ) {
	var whyUsFaFa = document.querySelectorAll('.container #whyUs .TestednTrusted .widget div');
	// what 'let' does is that it declares 'i' for each iteration not the loop
	for (let i = 0; i < whyUsFaFa.length; i++) {

		setTimeout(function delayanimated() {
				whyUsFaFa[i].style.visibility = 'visible';
				whyUsFaFa[i].className = 'animated zoomIn';
		}, i * 300);
	}
  }
}

window.onload = function () {
	var pageUrl = window.location.href;
	var currPageUrl = pageUrl.split('/');
	for (var i = 0; i < currPageUrl.length; i++) {
		var pageNames = currPageUrl[i];
		var whyUspage = pageNames.indexOf('why-us.html');
		if (whyUspage === 0 ) {
			// remove the comment on the below function call if you know prefer to call the function onload instead of onscroll
			// animateFaWhyUs(); 
		}
	}
}
 
 function animateFaWhyUs() {
	var whyUsFa = document.querySelectorAll('.container #whyUs2 .widgets aside.icon');
	// what 'let' does is that it declares 'i' for each iteration not the loop
	for (let i = 0; i < whyUsFa.length; i++) {
		setTimeout(function delayanimateFaWhyUs() {

				whyUsFa[i].style.visibility = 'visible';
				whyUsFa[i].className = 'icon faCont';
		}, i * 400);
	}
}


function animateTeamDesc() {
	var whyUs2Height = document.getElementById('ourTeam').offsetHeight;
 	var classTeamHeight = document.getElementById('Team').offsetHeight;
 	var ourTeamH1 = document.getElementById('ourTeamH1').offsetHeight;
 	var img = document.getElementById('img').offsetHeight;
	var whyUsFa = document.querySelectorAll('.container #whyUs2 .widgets aside.icon');
	// alert(whyUs2Height - (classTeamHeight* 2) - img -ourTeamH1 -200/);
	
	var teamAside1 = document.querySelectorAll('.container #ourTeam .team aside.firstRow');
	var teamAside2 = document.querySelectorAll('.container #ourTeam .team aside.secondRow');
	var teamAside3 = document.querySelectorAll('.container #ourTeam .team aside.thirdRow');
	var teamDivDesc = document.querySelector('.container .ourTeam .team-hiring div.team_item_desc');
	
	if (body.scrollTop > (whyUs2Height - (classTeamHeight* 2) - img - 200) || html.scrollTop > (whyUs2Height - (classTeamHeight* 2) - img - 200)) {
		// what 'let' does is that it declares 'i' for each iteration not the loop
	for (let i = 0; i < teamAside1.length; i++) {
		setTimeout(function animateTeam() {

				teamAside1[i].style.visibility = 'visible';
				teamAside1[i].className = 'teamAnimated';
		}, i * 500);
	}
	}

	if (body.scrollTop > (whyUs2Height - classTeamHeight - img - 200) || html.scrollTop > (whyUs2Height - classTeamHeight - img - 200)) {
		// what 'let' does is that it declares 'i' for each iteration not the loop
	for (let i = 0; i < teamAside2.length; i++) {
		setTimeout(function animateTeam() {

				teamAside2[i].style.visibility = 'visible';
				teamAside2[i].className = 'teamAnimated';
		}, i * 500);
	}
	}

	if (body.scrollTop > (whyUs2Height  - img - 200) || html.scrollTop > (whyUs2Height  - img - 200)) {
		// what 'let' does is that it declares 'i' for each iteration not the loop
	for (let i = 0; i < teamAside3.length; i++) {
		setTimeout(function animateTeam() {

				teamAside3[i].style.visibility = 'visible';
				teamAside3[i].className = 'teamAnimated';
				// 
		}, i * 1000);
	}
	teamDivDesc.style.visibility = 'visible';
	teamDivDesc.classList.add('teamAnimated');
	}
	
}

function fixedAsideBox() {
var photoSliderInner = document.getElementById('photoSliderInner').offsetHeight;
var photoSlider = document.getElementById('photoSlider').offsetHeight; 
var gallary = document.getElementById('gallary-spec').offsetHeight;
var amenities = document.getElementById('amenities').offsetHeight;
var showGallaryphotos = document.getElementById('showGallaryphotos').offsetHeight;
var neigbourhood = document.getElementById('neigbourhood').offsetHeight;
var minHeight = photoSlider + photoSliderInner + showGallaryphotos - 50;
var maxHeight = photoSlider + photoSliderInner +showGallaryphotos + gallary + amenities + neigbourhood - 50;
var intrestedInHome = document.getElementById('intrestedInHome');
 	if ((html.scrollTop > minHeight && html.scrollTop < maxHeight) ) {
	intrestedInHome.style.position = 'fixed';
	intrestedInHome.style.width = '25%';

}else{
	 intrestedInHome.style.position = 'static';
	 intrestedInHome.style.width = '30%';
}

 }
 

