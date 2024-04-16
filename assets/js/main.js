// Create the variables for the display

// Details
let now_playing = document.querySelector("#now-playing-list");
let track_art = document.querySelector("#track-picture");
let track_name = document.querySelector("#track-name");
let track_artist = document.querySelector("#track-artist");
// Buttons
let playpause_btn = document.querySelector("#playpause-track");
let next_btn = document.querySelector("#next-track");
let prev_btn = document.querySelector("#prev-track");
let shuffle_mix = document.querySelector("#shuffle-mix");
let repeat_mix = document.querySelector("#repeat-mix");
// Time
let seek_slider = document.querySelector("#seek-slider");
let curr_time = document.querySelector("#current-time");
let total_duration = document.querySelector("#total-duration");
// Volume
let volume_slider = document.querySelector("#volume-slider");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define Standard Empty Object
//? Maybe this should not be necessary?
let track_list = [{
    name: "No Track Selected",
    artist: "No Track Selected",
    image: "assets/imgs/pic01.jpg",
    path: "No Track Selected"
}, ];

console.log(track_list);

// --- FUNCTIONALITIES SECTION --- //

// Locate the files in the specified directory

// Folder to search:
const audioFolder = '../../audio'

// Create a new object (FS and PATH required)

// Load a track to Audio-Element
// --/ Reset SEEK TIMER
// --/ Load new Track
// --/ Display Track's details

// Reset all values to their default

// Play Function
// Pause Function
// (Play -or- Pause) when pushed

// Next Track

// Previous Track

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