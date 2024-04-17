const track_list = {
    'JMP Studio': [{
            "name": "West Virginia (Diego - Cover)",
            "artist": "JMP",
            "pic": "path/to/trackA1.jpg",
            "path": "assets/audio/josus/song1.mp3"
        },
        {
            "name": "Boom Boom! (Vengaboys - Cover)",
            "artist": "JMP & Xema",
            "pic": "path/to/trackB1.jpg",
            "path": "assets/audio/josus/song2.mp3"
        },
        {
            "name": "Dreams (AI - Cover)",
            "artist": "JMP",
            "pic": "path/to/trackB1.jpg",
            "path": "assets/audio/josus/song3.mp3"
        },
        {
            "name": "La vereda de la puerta de atras (La Colega - Cover)",
            "artist": "JMP & La Colega",
            "pic": "path/to/trackB1.jpg",
            "path": "assets/audio/josus/song4.mp3"
        },
    ],
    'list-B': [{
            "name": "Track B1",
            "artist": "Artist B1",
            "pic": "path/to/trackB1.jpg",
            "path": "path/to/trackB1.mp3"
        },
        {
            "name": "Track B2",
            "artist": "Artist B2",
            "pic": "path/to/trackB2.jpg",
            "path": "path/to/trackB2.mp3"
        },
    ],
    'list-C': [{
            "name": "Track CC1",
            "artist": "Artist CC1",
            "pic": "path/to/trackCC1.jpg",
            "path": "path/to/trackCC1.mp3"
        },
        {
            "name": "Track BC2",
            "artist": "Artist BC2",
            "pic": "path/to/trackBC2.jpg",
            "path": "path/to/trackBC2.mp3"
        },
    ],
};

// Create the variables for the display
// --/Details
let now_playing = document.querySelector("#now-playing-list");
let track_art = document.querySelector("#track-picture");
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

// Create the AUDIO element for the player
let curr_track = document.createElement('audio');

// Gets the Lists Names
let rep_lists_names = Object.keys(track_list);
let curr_list_selected = rep_lists_names[0];

// Create the SELECT element for the player
let selectedList = document.createElement('select');

// Create the OPTION elements for the player
rep_lists_names.forEach(
    /**
     * Creates an OPTION element for the SELECT element in the player.
     * @param {string} name - The name of the list to be added to the SELECT element.
     * @returns {void} - No return value.
     */
    function createOption(name) {
        const option = document.createElement('option'); // Create a new OPTION element
        option.text = name; // Set the text of the OPTION element to the provided name
        selectedList.add(option); // Add the newly created OPTION element to the SELECT element
    });

// Add an event listener to the select element to update the currently selected list
selectedList.addEventListener('change', () => {
    curr_list_selected = selectedList.value;
});

// Globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// --- FUNCTIONALITIES SECTION --- //

// Load a track to Audio-Element
function loadTrack() {
    // --/ Reset SEEK TIMER
    displayResetValues();
    // --/ Load new Track
    curr_track.src = track_list[curr_list_selected][track_index]['path'];
    // --/ Display Track's details
    track_art.textContent = track_list[curr_list_selected][track_index]['pic']
    track_name.textContent = track_list[curr_list_selected][track_index]['name']
    track_artist.textContent = track_list[curr_list_selected][track_index]['artist']

    if (isPlaying) play();
};

// Reset all values to their default
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

// Play Function
/**
 * Plays the current track.
 * @function play
 * @returns {void} - No return value.
 */
function play() {
    curr_track.play();
    isPlaying = true;
    // PAUSE ICON
    playpause_btn.innerHTML = '<i class="bi bi-pause-circle"></i>';
};

// Pause Function
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
};
// (Play -or- Pause) when pushed
/**
 * Plays or pauses the current track when pushed.
 * @function playpauseTrack
 * @returns {void} - No return value.
 */
function playpauseTrack() {
    if (isPlaying) pause();
    else play();
};

// Next Track
function nextTrack() {
    track_index++;
    if (track_index > track_list[curr_list_selected].length - 1) {
        track_index = 0;
    };
    loadTrack();
    displayResetValues();
    console.log("Next Button Pushed\n=>>PATH: ", track_list[curr_list_selected][track_index]['path'])
};

// Previous Track
function prevTrack() {
    track_index--;
    if (track_index < 0) {
        track_index = track_list[curr_list_selected].length - 1;
    }
    loadTrack();
    displayResetValues();
    console.log("Prev Button Pushed\n=>>PATH: ", track_list[curr_list_selected][track_index]['path'])
};

// Seek to a specific position

// Set volume

// Extras
// --/ Shuffle
// --/ Repeat

// --- TEST EXPORT SECTION --- //
// Export to JEST Test
// export default {
//     // INFO SECTION
//     now_playing,
//     track_art,
//     track_name,
//     track_artist,
//     // BUTTONS SECTION
//     playpause_btn,
//     next_btn,
//     prev_btn,
//     shuffle_mix,
//     repeat_mix,
//     // TRACK SLIDER SECTION
//     seek_slider,
//     curr_time,
//     total_duration,
//     // VOLUME SECTION
//     volume_slider,
//     // LIST SECTION
//     track_index,
//     isPlaying,
//     updateTimer,
//     // PLAYER
//     curr_track,
//     //PLAYING LIST
//     track_list
// };