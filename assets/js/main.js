const track_list = {
    'JMP Studio': [{
            "name": "West Virginia (Diego - Cover)",
            "artist": "JMP",
            "pic": "assets/audio/josus/country-road.png",
            "path": "assets/audio/josus/song1.mp3"
        },
        {
            "name": "Boom Boom! (Vengaboys - Cover)",
            "artist": "JMP & Xema",
            "pic": "assets/audio/josus/boom-boom.jpg",
            "path": "assets/audio/josus/song2.mp3"
        },
        {
            "name": "Dreams (AI - Cover)",
            "artist": "JMP",
            "pic": "assets/audio/josus/ana-belen.jpg",
            "path": "assets/audio/josus/song3.mp3"
        },
        {
            "name": "La vereda de la puerta de atras (La Colega - Cover)",
            "artist": "JMP & La Colega",
            "pic": "assets/audio/josus/la-verea.png",
            "path": "assets/audio/josus/song4.mp3"
        },
    ],
    'JM: Maqueta': [{
            "name": "Intro",
            "artist": "Josue Martin",
            "pic": "assets/audio/maqueta-josu/cover-1.jpeg",
            "path": "assets/audio/maqueta-josu/intro.mp3"
        },
        {
            "name": "Project 2",
            "artist": "Josue Martin",
            "pic": "assets/audio/maqueta-josu/cover-2.jpeg",
            "path": "assets/audio/maqueta-josu/proj2.mp3"
        },
        {
            "name": "Project 2.2",
            "artist": "Josue Martin",
            "pic": "assets/audio/maqueta-josu/cover-3.jpeg",
            "path": "assets/audio/maqueta-josu/proj2-2.mp3"
        },
        {
            "name": "Project 6",
            "artist": "Josue Martin",
            "pic": "assets/audio/maqueta-josu/cover-4.jpeg",
            "path": "assets/audio/maqueta-josu/proj6.mp3"
        },
        {
            "name": "Project 7",
            "artist": "Josue Martin",
            "pic": "assets/audio/maqueta-josu/cover-5.jpeg",
            "path": "assets/audio/maqueta-josu/proj7.mp3"
        },
    ],
    '**ERROR DISPLAY LIST**': [{
            "name": "Track with no audio",
            "artist": "**NO AUDIO**",
            "pic": "assets/imgs/lemon_music.webp",
            "path": "path/to/trackCC1.mp3"
        },
        {
            "name": "Track with no picture",
            "artist": "**NO PICTURE**",
            "pic": "path/to/trackBC2.jpg",
            "path": "assets/audio/josus/song4.mp3"
        },
    ],
};

// Create the variables for the display
// --/Button
let btn_display_name = document.querySelector("#list-name");
// --/Details
let now_playing = document.querySelector("#now-playing-list");
let track_art = document.querySelector("#track-picture img");
let track_name = document.querySelector("#track-name");
let track_artist = document.querySelector("#track-artist");
// --/Buttons
let playpause_btn = document.querySelector("#playpause-track");
let next_btn = document.querySelector("#next-track");
let prev_btn = document.querySelector("#prev-track");
let shuffle_mix = document.querySelector("#shuffle-mix");
let repeat_mix = document.querySelector("#repeat-mix");
// --/Time
let seek_slider = document.querySelector("#seek-slider");
let curr_time = document.querySelector("#current-time");
let total_duration = document.querySelector("#total-duration");
// --/Volume
let volume_slider = document.querySelector("#volume-slider");
let volume_down = document.querySelector("#vol-down");
let volume_up = document.querySelector("#vol-up");

// ### AUDIO CREATION AND PLAYLIST FETCH ###
// Create the AUDIO element for the player
let curr_track = document.createElement('audio');

// Gets the Lists Names
let rep_lists_names = Object.keys(track_list);
let curr_list_selected = rep_lists_names[0];
btn_display_name.textContent = curr_list_selected;

// Create the SELECT element for the player
let selectedList = document.createElement('select');

// Create the OPTION elements for the player
rep_lists_names.forEach((name) => {
    const option = document.createElement('option'); // Create a new OPTION element
    option.text = name; // Set the text of the OPTION element to the provided name
    selectedList.add(option); // Add the newly created OPTION element to the SELECT element
});

// Integrate the Select menu in the list section
lemonList = document.getElementById('lemon-lists');
selectedList.classList.add('col-6')
selectedList.ariaLabel = 'Select Playlist';
selectedList.id = 'lemon-selection';
lemonList.appendChild(selectedList);
// ### END OF AUDIO CREATION AND PLAYLIST FETCH ###


// Globally used values
let track_index = -1;
let isPlaying = false;
let shuffleOn = false;
let repeatOn = false;
let repeatSameOn = false;
curr_track.volume = volume_slider.value / 100;

// TIME FETCHING
const time = (new Date()).getHours();
if (time >= 19 || time <= 5) document.body.style.backgroundImage = "url('/CodeInstitute-proj02/assets/imgs/bg-night-min.webp')";
else document.body.style.backgroundImage = "url('/CodeInstitute-proj02/assets/imgs/skybg-min.webp')";


// EVENTS LISTENERS //
// Add an event listener to the select element to update the currently selected list
selectedList.addEventListener('change', () => {
    curr_list_selected = selectedList.value;
    track_index = 0;
    btn_display_name.textContent = curr_list_selected;
    document.getElementById('exit-btn').click();

    if (isPlaying) {
        playpauseTrack();
    }

    loadTrack();
});

/**
 * Sets the volume up for the currently playing track.
 * @function setVolume
 * @returns {void} - No return value.
 * @description This function sets the volume of the audio track to the value of the volume slider.
 */
volume_up.addEventListener('click', () => {
    if (curr_track.volume >= 0.50) curr_track.volume = 0.55;
    else curr_track.volume = (Math.floor(volume_slider.value) + 10) / 100;
    volume_slider.value = curr_track.volume * 100;
});

/**
 * Sets the volume down for the currently playing track.
 * @function setVolume
 * @returns {void} - No return value.
 * @description This function sets the volume of the audio track to the value of the volume slider.
 */
volume_down.addEventListener('click', () => {
    if (curr_track.volume <= 0.09) curr_track.volume = 0;
    else curr_track.volume = (Math.floor(volume_slider.value) - 10) / 100;
    volume_slider.value = curr_track.volume * 100;
});

//! ####################################
seek_slider.addEventListener('input', () => {
    clearInterval(updateSeekBarPosition);
});

seek_slider.addEventListener('mouseup', () => {
    setInterval(updateSeekBarPosition, 1000);
});
//! ####################################

/**
 * Event listener for when an error occurs while loading a track's URL.
 * @returns {void} - No return value
 */
curr_track.addEventListener('error', () => {
    alert('Error loading track');
});

// total_duration.addEventListener('change', () => {
//     if (total_duration.textContent === 'NaN:NaN') total_duration.textContent = 'LOADING';
// });

/**
 * Event listener for when an error occurs while loading a track's picture.
 * @returns {void} - No return value
 */
track_art.addEventListener('error', () => {
    track_art.src = 'assets/imgs/logo-img.webp';
    alert('Error loading image for track');
});

/**
 * Changes the repeat state of the currently selected list.
 * @function repeatMix
 * @returns {void} - No return value
 * @description If the repeat is already on, it will be turned off and the color of the repeat icon will revert to its default color. If the repeat is off, it will be turned on and the color of the repeat icon will change to turquoise.
 */
curr_track.addEventListener('ended', () => {
    if (repeatSameOn) repeatActualSong();
    else {
        if (track_index === track_list[curr_list_selected].length - 1 && repeatOn) {
            displayResetValues();
            track_index = 0;
            playpauseTrack()
            loadTrack(track_index);
            playpauseTrack();
        } else if (track_index === track_list[curr_list_selected].length - 1) {
            displayResetValues();
            track_index = 0;
            playpauseTrack()
            loadTrack(track_index);
        } else {
            nextTrack();
        };
    };
});

// --- FUNCTIONALITIES SECTION --- //

/**
 * Loads a track to the audio element.
 * @function loadTrack
 * @returns {void} - No return value.
 */
function loadTrack() {
    // --/ Reset SEEK TIMER
    displayResetValues();
    // --/ Load new Track
    curr_track.src = track_list[curr_list_selected][track_index]['path'];
    // --/ Display Track's details
    track_art.src = track_list[curr_list_selected][track_index]['pic'];
    // --/ Display and checks lenght for TRACK_NAME
    track_name.textContent = track_list[curr_list_selected][track_index]['name']
    if (track_name.textContent.length < 22) track_name.classList.remove('mtext');
    else track_name.classList.add('mtext');
    // --/ Display and checks lenght for TRACK_ARTIST
    track_artist.textContent = track_list[curr_list_selected][track_index]['artist'];
    if (track_artist.textContent.length < 22) track_artist.classList.remove('mtext');
    else track_artist.classList.add('mtext');
    // --/ If the ISPLAYING is true continues playing
    if (isPlaying) play();
};

/**
 * Resets all values to their default.
 * @function displayResetValues
 * @returns {void} - No return value.
 */
function displayResetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
};

/**
 * Plays the current track.
 * @function play
 * @returns {void} - No return value.
 */
function play() {
    curr_track.play();
    isPlaying = true;
    setInterval(updateSeekBarPosition, 1000);
    // PAUSE ICON
    playpause_btn.innerHTML = '<i class="bi bi-pause-circle"></i>';
    playpause_btn.getElementsByTagName('i')[0].style.color = 'turquoise';
};

/**
 * Pauses the current track.
 * @function pause
 * @returns {void} - No return value.
 */
function pause() {
    curr_track.pause();
    isPlaying = false;
    // PLAY ICON
    playpause_btn.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
    playpause_btn.getElementsByTagName('i')[0].style.color = '';
};

/**
 * Plays or pauses the current track when pushed.
 * @function playpauseTrack
 * @returns {void} - No return value.
 */
function playpauseTrack() {
    if (isPlaying) pause();
    else play();
};

/**
 * Next Track
 * @function nextTrack
 * @returns {void} - No return value
 * @description Increments the track index and loads the next track. If the index goes beyond the last track of the current list, it resets to the first track.
 */
function nextTrack() {
    track_index++;
    if (shuffleOn) randomizeNextSong();
    else if (track_index > track_list[curr_list_selected].length - 1) {
        track_index = 0;
    };
    loadTrack();
    displayResetValues();
};

/**
 * Previous Track
 * @function prevTrack
 * @returns {void} - No return value
 * @description This function decrements the track index and loads the previous track. If the index goes below 0, it resets to the last track of the current list.
 */
function prevTrack() {
    track_index--;
    if (track_index < 0) {
        track_index = track_list[curr_list_selected].length - 1;
    };
    loadTrack();
    displayResetValues();
};

/**
 *  Randomize next Song
 * @function randomizeNextSong
 * @description Shuffles the order of the songs in the currently selected list and loads the first song.
 */
function randomizeNextSong() {

    track_index = Math.floor(Math.random() * track_list[curr_list_selected].length);
    loadTrack();
    displayResetValues();
};

/**
 * Changes the shuffle state of the currently selected list.
 * @function shuffleMix
 * @description If the shuffle is already on, it will be turned off and the color of the shuffle icon will revert to its default color. If the shuffle is off, it will be turned on and the color of the shuffle icon will change to turquoise.
 * @returns {void} - No return value
 */
function shuffleMix() {
    if (shuffleOn) {
        shuffleOn = false;
        shuffle_mix.getElementsByTagName('i')[0].style.color = '';
    } else {
        shuffleOn = true;
        shuffle_mix.getElementsByTagName('i')[0].style.color = 'turquoise';
    }
};

/**
 * Resets the current track to the beginning.
 * @function repeatActualSong
 * @returns {void} - No return value
 */
function repeatActualSong() {
    loadTrack();
};

/**
 * Changes the repeat state of the currently selected list.
 * @function repeatMix
 * @description If the repeat is already on, it will be turned off and the color of the repeat icon will revert to its default color. If the repeat is off, it will be turned on and the color of the repeat icon will change to turquoise.
 * @returns {void} - No return value
 */
function repeatMix() {
    if (!repeatOn && repeatSameOn) {
        repeatOn = false;
        repeatSameOn = false;
        repeat_mix.getElementsByTagName('i')[0].classList = "bi bi-repeat side-button";
        repeat_mix.getElementsByTagName('i')[0].style.color = '';
    } else if (repeatOn && !repeatSameOn) {
        repeatOn = false;
        repeatSameOn = true;
        repeat_mix.getElementsByTagName('i')[0].classList = "bi bi-repeat-1 side-button";
        repeat_mix.getElementsByTagName('i')[0].style.color = 'turquoise';
    } else {
        repeatOn = true;
        repeatSameOn = false;
        repeat_mix.getElementsByTagName('i')[0].classList = "bi bi-repeat side-button";
        repeat_mix.getElementsByTagName('i')[0].style.color = 'turquoise';
    };
};

/**
 * Update Track's Times
 * @function convertTime
 * @returns {void} - No return value.
 * @description Updates the current time and total duration of the audio track.
 */
function convertTime() {
    total_duration.textContent = "00:00";

    let hhT, mmT, ssT;

    // Calculate the current time in hours, minutes, and seconds.
    hhT = Math.floor(curr_track.currentTime / 3600);
    mmT = Math.floor((curr_track.currentTime - hhT * 3600) / 60);
    ssT = Math.floor(curr_track.currentTime - hhT * 3600 - mmT * 60);

    // Format the current time as a string with leading zeros if necessary.
    if (hhT === 0) hhT = "";
    else if (hhT < 10) hhT = "0" + hhT + ":";
    if (mmT < 10) mmT = "0" + mmT;
    if (ssT < 10) ssT = "0" + ssT;

    // Update the display of the current time.
    curr_time.textContent = hhT + mmT + ":" + ssT;

    // Calculate the total duration of the audio track in hours, minutes, and seconds.
    let hhD, mmD, ssD;
    hhD = Math.floor(curr_track.duration / 3600);
    mmD = Math.floor((curr_track.duration - hhD * 3600) / 60);
    ssD = Math.floor(curr_track.duration - hhD * 3600 - mmD * 60);

    // Format the total duration as a string with leading zeros if necessary.
    if (hhD === 0) hhD = "";
    else if (hhD < 10) hhD = "0" + hhD + ":";
    if (mmD < 10) mmD = "0" + mmD;
    if (ssD < 10) ssD = "0" + ssD;

    // Update the display of the total duration.
    total_duration.textContent = hhD + mmD + ":" + ssD;
};

/**
 * Seeks to a specific position in the currently playing track.
 * @function seekTo
 * @returns {void} - No return value
 */
function updateSeekBarPosition() {
    seek_slider.value = curr_track.currentTime / (curr_track.duration / 100)
};

/**
 * Seeks to a specific position in the currently playing track.
 * @function seekTo
 * @returns {void} - No return value
 * @description This function sets the current time of the audio track to the value of the seek slider.
 */
function seekTo() {
    curr_track.currentTime = seek_slider.value * (curr_track.duration / 100);
};

/**
 * Sets the volume of the currently playing track.
 * @function setVolume
 * @returns {void} - No return value.
 */
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
};

// INITIALIZE PROGRAM
// --/ starts the list
nextTrack();

// --/ Updates the current time and total duration of the audio track.
setInterval(convertTime, 1000);