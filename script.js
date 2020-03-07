function addTexts() {
    document.getElementById("top").innerHTML = document.getElementById("top-text").value;
    document.getElementById("bottom").innerHTML = document.getElementById("bottom-text").value;
}

var node = document.getElementById('my-node');
var btn = document.getElementById('foo');

btn.onclick = function () {
    domtoimage.toBlob(document.getElementById('my-node'))
        .then(function (blob) {
            window.saveAs(blob, 'my-meme.png');
        });
}

var imageadd = document.getElementById("add-image");

imageadd.onclick = function () {
    document.getElementById("my-node-img").src = './memes/mama.png';
}