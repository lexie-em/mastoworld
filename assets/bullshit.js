var basePop = 7594270360;
var then = 1546300800;

function comatose(num) {
	return num.toString()
		.split('')
		.reverse()
		.join('')
		.split(/(...)/)
		.filter(Boolean)
		.join(',')
		.split('')
		.reverse()
		.join('');
	// https://www.youtube.com/watch?v=QRKQEb9GnFE
};

function population() {
	var now = (new Date()).getTime() / 1000;
	return Math.floor(basePop * Math.pow(1.01, (now - then) / 86400 / 365.2425));
};

function statuses() {
	var now = (new Date()).getTime() / 1000;
	return now * 100000 + Math.floor(Math.random() * 100000);
};

function doLiveUpdateLol() {
	document.querySelector('#pop').innerText = comatose(population());
	document.querySelector('#stat').innerText = comatose(statuses());
};

function doLiveUpdatesLol() {
	doLiveUpdateLol();
	window.setInterval(doLiveUpdateLol, 1000);
};

window.addEventListener('DOMContentLoaded', doLiveUpdatesLol);
