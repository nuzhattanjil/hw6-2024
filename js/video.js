var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.getElementById("#play").addEventListener("click", function() {
    video.play();
    var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = video.volume * 100 + "%";
});
