// Challenge: The Playlist Organizer
// Goal: Clean up & organize an array of song titles (remove duplicates, trim extra space, sort alphabetically, return cleaned-up playlist as a new array)

const songs = [
    "  Wonderwall  ",
    "Bohemian Rhapsody",
    "Hotel California",
    "Bohemian Rhapsody",
    "  Stairway to Heaven",
    "Hotel California "
];

const trimmedSongs = songs.map(e => e.trim());

const songsInOrder = trimmedSongs.toSorted();

console.log(songsInOrder)