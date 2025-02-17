navigator.keyboard.lock();
document.onkeydown = function (e) {
return false;
}

document.onclick=function openPopup() {
   var popup= document.getElementById("popup-main");
    popup.style.display = "flex";
    document.getElementById('backgroundMusic').play()
    if (popup.requestFullscreen) {
        popup.requestFullscreen();
    } else if (popup.webkitRequestFullscreen) { 
        popup.webkitRequestFullscreen();
    } else if (popup.msRequestFullscreen) { 
        popup.msRequestFullscreen();
    }
 }
 window.onload = function() {
   addEventListener('DOMContentLoaded', function() {
    document.documentElement.webkitRequestFullscreen();
        var popup = document.getElementById("popup-main");
        popup.style.display = "flex";
        document.getElementById('backgroundMusic').play();
        
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    });
}
