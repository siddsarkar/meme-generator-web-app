function addTopText() {
	if (document.getElementById('top-text').value === '') {
		document.getElementById('top').innerHTML = 'Type Something';
	} else {
		document.getElementById('top').innerHTML = document.getElementById('top-text').value;
	}
}
function addBotText() {
	if (document.getElementById('bottom-text').value === '') {
		document.getElementById('bottom').innerHTML = 'Type Something';
	} else {
		document.getElementById('bottom').innerHTML = document.getElementById('bottom-text').value;
	}
}

var node = document.getElementById('my-node');
var btn = document.getElementById('foo');
btn.onclick = function() {
	domtoimage.toBlob(document.getElementById('my-node')).then(function(blob) {
		window.saveAs(blob, 'my-meme.png');
	});
};

var imageadd = document.getElementById('add-image');

imageadd.addEventListener(
	'click',
	async () => {
		var res = await fetch('https://api.imgflip.com/get_memes');
		var data = await res.json();
		// console.log(data.data.memes[].url);
		$('#my-node-img').attr('src', data.data.memes[Math.floor(Math.random() * 100)].url);
	},
	true
);

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.readAsDataURL(input.files[0]);
		reader.onload = function(e) {
			$('#my-node-img').attr('src', e.target.result);
		};
	}
}
