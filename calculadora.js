function insert(btn) {
	let botao = document.getElementById('screen').innerHTML;
	document.getElementById('screen').innerHTML = botao + btn;
}

function clean() {
	document.getElementById('screen').innerHTML = '';
}

function back() {
	let screen = document.getElementById('screen').innerHTML;
	document.getElementById('screen').innerHTML = screen.substring(0, screen.length -1);
}

function calcular() {
	let screen = document.getElementById('screen').innerHTML;
	if(screen) {
		document.getElementById('screen').innerHTML = eval(screen);
	} else {
	document.getElementById('screen').innerHTML = 'empty'
	}
}