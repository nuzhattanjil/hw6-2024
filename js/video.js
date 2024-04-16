var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = Math.round(video.volume * 100) + "%";
});
/*
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.getElementById("#play").addEventListener("click", function() {
    video.play();
    var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = video.volume * 100 + "%";
});*/

/*document.getElementById("#pause").addEventListener("click", function() {
    video.pause();
});*/
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause(); // Pause the video
});

document.querySelector("#slower").onclick = function() {
    var currentSpeed = video.playbackRate;
    var newSpeed = currentSpeed * 0.9;
    video.playbackRate = newSpeed;
    console.log("Slow Down", newSpeed);
};
document.querySelector("#faster").onclick = function() {
    var currentSpeed = video.playbackRate;
    var newSpeed = currentSpeed / 0.9;
    video.playbackRate = newSpeed;
    console.log("Speed Up", newSpeed);
};

document.querySelector("#skip").onclick = function() {
    var currentTime = video.currentTime;
    var newTime = currentTime + 10;
    if (newTime > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = newTime;
    }
    console.log("Skip Ahead", video.currentTime);
};