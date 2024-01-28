    // Function to hide the loader and display the Home Screen
    function loadHomeScreen() {
        document.getElementById('loader-container').style.display = 'none';
        document.getElementById('home-screen').style.display = 'block';
        
      }
      

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('play')
audio.paused ? audio.play() : audio.play()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()

}


