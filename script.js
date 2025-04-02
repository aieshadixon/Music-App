//Music Player functionalities:

//1. A function to play a song
    //play song when play button is clicked or song from playlist is clicked
    //Check if a song is already playing
    //If not, start playing the current song
    //Display name of the song and artist accordingly

//2. A function to pause a song
    //When pause the is clicked, the song should be paused
    //If the song is currently playing, pause it

//3. Function to play the previous song
    //Find the index of the current song
    //From that index, find the index of the previous song and play it

//4. Function to play the next song
    //Find the index of the current song
    //From that index, find the index of the next song and play it

//5. Adjust volume 
    //Allow volume to increase or decrease depending on where the user toggles the slider

//6. Function to play a song from the list when clicked 
    
//7. Function to change background colour when a new song plays
    //Depending on the song genre, select the corresponding colour
    //Apply the background colour to the page

//8. Function to display song  duration and progress
    //Show duration of the song 
    //Show the progress of the song whilst playing
    //Allow song's progress to be adjusted by the user by sliding/clicking on the bar

//API Implementation:

//Use an API to retrieve music data from a server
    //Itunes or Spotify
    //Pull data for multiple songs  


const cover_art = document.querySelector('.cover-art');
const song_name = document.querySelector('.song-name');
const artist_name = document.querySelector('.artist-name');

const play_pause_btn = document.querySelector('.play-pause');
const previous_btn = document.querySelector('.previous-button');
const next_btn = document.querySelector('next-button');

const volume_slider = document.querySelector('.volume-slider');
const duration_slider = document.querySelector('.duration-slider');

//Global values
let currentSongIndex = 0;
let isPlaying = false;
let songs = [];


//API Call