var underline = document.querySelectorAll('.container header nav ul  div.underline');

 function underline (divElement) {
	divElement.style.width = 'inherit';
}
var overlay = document.getElementById('overlay');
var space = document.getElementById('space');
var price = document.getElementById('price');
var utility = document.getElementById('utility');

function seeSpace() {
	overlay.style.display = 'block';
	space.style.display = 'block';
	body.style.overflow = 'hidden';
}

function closeModal() {
	overlay.style.display = 'none';
	space.style.display = 'none';
	price.style.display = 'none';
	utility.style.display = 'none';
	body.style.overflow = 'auto';
}

function seePrice() {
	utility.style.display = 'none';
	overlay.style.display = 'block';
	price.style.display = 'block';
	body.style.overflow = 'hidden';
}
function seeUtility() {
	price.style.display = 'none';
	utility.style.display = 'block';
	overlay.style.display = 'block';
	body.style.overflow = 'hidden';
}
// window.onkeypress = function(evt) {
// 	if (evt.keycode == 27) {
// 		evt.preventDefault();
// 		alert('hello');
// 		closeModal();
// 	}
// }

// var $icons = $('.widgets');
// var $window = $(window);
// $window.on('scroll', checkView);
	
function showMap(showInMap, map, height) {
	var showInMap = document.getElementById(showInMap);
	var map = document.getElementById(map);
	if (map.style.display == 'none') {
		showInMap.innerHTML = 'Hide Map';
		map.style.display = 'block';
		map.style.height = height;
		var num = new google.maps.LatLng(50.270908, 19.039993);
		var mapOptions = {
		center : num,
		zoom : 16,
		mapTypeId : google.maps.MapTypeId.ROADMAP
			// SATELLITE, ROADMAP
	}
	var myMap = new google.maps.Map(map,mapOptions);
	var marker = new google.maps.Marker({
		 	position : num,
		 	icon:'images/pin-normal.png',
		 	label : "Katowice City",
		 	map : myMap

		 })
	   google.maps.event.addListener( 'click', (function(marker) {
        return function() {
          infowindow.setContent('<h3>katowice City</h3>');
          infowindow.open(map, marker);
        }
      })(marker, i));
    
}else{
		showInMap.innerHTML = 'Show in map';
		map.style.display = 'none';
	}
}
var flatsCont = document.querySelectorAll('.container .flats-sec aside .flats-cont');
var reorder = document.getElementById('reorder');
var tile = document.getElementById('tile');

	if (reorder) {
		reorder.onclick = function () {
		for (var i = 0; i < flatsCont.length; i++) {
			flatsCont[i].classList.add('tile')
		}
		var flatsContTile = document.querySelectorAll('.container .flats-sec aside .flats-cont.tile');
		for (var i = 0; i < flatsContTile.length; i++) {
			flatsContTile[i].style.minHeight = '150px';
			flatsContTile[i].style.marginBottom = '0px';
			flatsContTile[i].style.paddingBottom = '10px';
		}
	}
}

	if (tile) {
		tile.onclick = function () {
		for (var i = 0; i < flatsCont.length; i++) {
			flatsCont[i].classList.remove('tile')
			flatsCont[i].style.minHeight = '650px';
		}
	}
}

// the below variable checks if any if the btns is open or closed
// if its value is 1 then a btn is open if 0 then no btn is open
var foundAnOpenPopup = 0;
function filterValue(currentElement, valueCont, valueA, valueB, valueC, btnA, btnB, btnC) {
	var overlay2 = document.getElementById('overlay2');
	var valueA = document.getElementById(valueA).style.display = 'none';
	var valueB = document.getElementById(valueB).style.display = 'none';
	var valueC = document.getElementById(valueC).style.display = 'none';
	var btnaA = document.getElementById(btnA).style.backgroundColor = 'transparent';
	var btnaB = document.getElementById(btnB).style.backgroundColor = 'transparent';
	var btnaC = document.getElementById(btnC).style.backgroundColor = 'transparent';
	var btnAa = document.getElementById(btnA).style.color = '#2A2D37';
	var btnBb = document.getElementById(btnB).style.color = '#2A2D37';
	var btnCc = document.getElementById(btnC).style.color = '#2A2D37';
	var valueContainer = document.getElementById(valueCont);
	var flatContainer = document.getElementById('flatContainer');
	var flatContainerHeight = flatContainer.offsetHeight;
	flatContainerHeight = flatContainerHeight + 'px';
 	currentElement.style.backgroundColor = '#22252D';
	currentElement.style.color = '#eee';
	overlay2.style.height = 'flatContainerHeight';
	overlay2.style.display = 'block';
	valueContainer.style.display = 'block';
	foundAnOpenPopup = 1;
}

function closePopup(overlay2, valueCont, currentbtn) {
	document.getElementById(overlay2).style.display = 'none';
	document.getElementById(valueCont).style.display = 'none';
	document.getElementById(currentbtn).style.color = '#2D303F';
	document.getElementById(currentbtn).style.backgroundColor = '#fff';
	foundAnOpenPopup = 0;
}
function checkInputValue(currentElement, minValue, maxValue, minmax) {
	var minValue = minValue;
	var maxValue = maxValue;
	var minmax = document.getElementById(minmax);
	var currentValue = currentElement.value;
	currentValue = parseInt(currentValue);
	// || 
	if (currentValue < minValue ) {
		currentElement.value = minValue;
		minmax.innerHTML = minValue;
	}else if(currentValue == minValue){
			currentElement.value = minValue;
			minmax.innerHTML = minValue;
	}else if(currentValue < maxValue ) {
			currentElement.value = currentValue;
			minmax.innerHTML = currentValue;
	}else if(currentValue == maxValue){
			currentElement.value = maxValue;
			minmax.innerHTML = maxValue;
	}else if(currentValue > maxValue){
			currentElement.value = maxValue;
			minmax.innerHTML = maxValue;
	}
	else{'error'} 
}

function defaultNos(minnoId, maxnoId, minno, maxno, minValue, maxValue) {
	var minno = document.getElementById(minnoId).innerHTML = minno;
	var maxno = document.getElementById(maxnoId).innerHTML = maxno;
	var minValue = document.getElementById(minValue).value = minno;
	var maxValue = document.getElementById(maxValue).value = maxno;
}
function uncheckInput() {
		$('#checkbox2').prop('checked', false);
		$('#checkbox3').prop('checked', false);
	}

var checked = 0;
function transformScale(currentElement, id) {
	var currentCheckbox = document.getElementById(id);
	currentCheckbox.classList.add('scale');
	setTimeout(function removeclass() {
		var currentCheckbox1 = document.getElementById('checkbox2');
		var currentCheckbox2 = document.getElementById('checkbox3');
		currentCheckbox1.classList.remove('scale');
		currentCheckbox2.classList.remove('scale');
	}, 1000)
	// currentCheckbox = document.getElementById(id).checked = true;
	// if (checked = 0) {
	// 	currentCheckbox.classList.add('scale');
	// 	checked = 1;
	// 	function uncheck() {
	// 		currentCheckbox = document.getElementById(id).checked = false;
	// 		console.log('hey');
	// 	}
	// }else{
	// 	checked = 0;
	// 	function check() {
	// 	currentCheckbox = document.getElementById(id).checked = true;
	// 	console.log('hi');
	// 	}
	// }
}

function closeCookieModal() {
	document.getElementById('accept-cookie').style.display = 'none';
}