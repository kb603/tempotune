document.addEventListener("DOMContentLoaded", function () {
  const temperatureDisplay = document.getElementById("temperatureDisplay");
  let currentTemperature = 78;

  // Display initial temperature
  temperatureDisplay.textContent = currentTemperature + "°F";

  // Increase temperature button
  document
    .getElementById("increaseTemp")
    .addEventListener("click", function () {
      currentTemperature++;
      temperatureDisplay.textContent = currentTemperature + "°F";
    });

  // Decrease temperature button
  document
    .getElementById("decreaseTemp")
    .addEventListener("click", function () {
      currentTemperature--;
      temperatureDisplay.textContent = currentTemperature + "°F";
    });

  // Music section functionality
  const songDisplay = document.getElementById("songDisplay");
  const playPauseButton = document.getElementById("playPauseButton");
  const stopButton = document.getElementById("stopButton");
  const nextButton = document.getElementById("nextButton");

  let isPlaying = false;
  let songNames = [
    "The Duck Song",
    "Banana Phone",
    "The Hamster Dance",
    "Peanut Butter Jelly Time",
    "The Crazy Frog Song",
    "I'm a Gummy Bear",
  ];
  let currentSongIndex = -1; // Initialize with -1 to indicate no song is playing initially

  // Function to play a random funny song
  function playRandomSong() {
    currentSongIndex = Math.floor(Math.random() * songNames.length);
    songDisplay.textContent = songNames[currentSongIndex];
    isPlaying = true;
    playPauseButton.textContent = "Pause";
  }

  // Function to pause the currently playing song
  function pauseSong() {
    isPlaying = false;
    playPauseButton.textContent = "Play";
  }

  // Function to stop the currently playing song
  function stopSong() {
    isPlaying = false;
    songDisplay.textContent = "";
    playPauseButton.textContent = "Play";
  }

  // Function to play or pause the song
  function togglePlayPause() {
    if (isPlaying) {
      pauseSong();
    } else {
      playRandomSong();
    }
  }

  // Function to play the next song
  function playNextSong() {
    stopSong();
    playRandomSong();
  }

  // Event listeners for music buttons
  playPauseButton.addEventListener("click", togglePlayPause);
  stopButton.addEventListener("click", stopSong);
  nextButton.addEventListener("click", playNextSong);
});
