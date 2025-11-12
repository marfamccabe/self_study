// Challenge: Playlist Organizer 2.0
// Goal: Clean up & organize an array of song titles (remove duplicates, trim extra space, sort in order of song title length, return cleaned-up playlist as a new array, return message stating number of duplicates removed)
// Bonus: If two songs are the same length, sort alphabetically as a tiebreaker


const songs = [
    "  Thunderstruck  ",
    "Bohemian Rhapsody",
    "Hey Jude",
    "Hey Jude",
    "  Yesterday",
    "Imagine "
];

function getNewArray(array) {
    const trimmedArr = array.map(e => e.trim()); // trims whitespace
    const sortedArr = trimmedArr.toSorted((a, b) => a.length - b.length); // sort by length
    const newArr = [... new Set(sortedArr)]; // removes duplicates

    const result = array.length - newArr.length;

    return `${newArr.join(', ')} (${result} duplicate song(s) removed)`;
}

console.log(getNewArray(songs));