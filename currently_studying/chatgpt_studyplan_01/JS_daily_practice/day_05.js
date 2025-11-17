// Challenge: Playlist Organizer 2.0
// Goal: Clean up & organize an array of song titles (remove duplicates, trim extra space, sort in order of song title length, return cleaned-up playlist as a new array, return message stating number of duplicates removed)
// Bonus: If two songs are the same length, sort alphabetically as a tiebreaker


const songs = [
    "  Thunderstruck  ",
    "Bohemian Rhapsody",
    "Hey Jude",
    "Hey Jude",
    "  Yesterday",
    "Take Five",
    "Imagine "
];


function getNewArray(array) {
    const trimmedArr = array.map(e => e.trim());
    const sortedArr = trimmedArr.toSorted((a,b) => {
        const lengthDiff = a.length - b.length;

        if (lengthDiff !== 0) {
            return lengthDiff;
        } else {
            return a.localeCompare(b);
        }
    });

    const newArr = [... new Set(sortedArr)];

    const result = array.length - newArr.length;

    return `${newArr.join(', ')} (${result} duplicate song(s) removed)`;
}

console.log(getNewArray(songs));