var birbs = [];
var random = 0;

for(let i = 0; i < 20; i++){
	birbs[i] = `birb${i+1}.png`;
}

for(let i = 0; i < birbs.length; i++){
	let rand = Math.floor(Math.random() * (birbs.length - 0))
	let x = birbs[rand];
	birbs[rand] = birbs[i];
	birbs[i] = x;
}

var birb = 0;

function next(){
	document.getElementById("birb").src = birbs[birb];
	document.getElementById("download").href = birbs[birb];
	if(birb+1 >= birbs.length){
		birb = 0;
	} else{
		birb++;
	}
}

window.onload = function(){
	var image = document.getElementById("birb");
	var download = document.getElementById("download");
	image.src = birbs[birb];
	download.href = birbs[birb];
	birb++;
};