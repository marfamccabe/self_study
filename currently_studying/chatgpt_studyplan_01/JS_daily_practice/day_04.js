// Challenge: The Playlist Organizer
// Goal: Clean up & organize an array of song titles (remove duplicates, trim extra space, sort alphabetically, return cleaned-up playlist as a new array, return message stating number of duplicates removed)

const songs = [
    "  Wonderwall  ",
    "Bohemian Rhapsody",
    "Hotel California",
    "Bohemian Rhapsody",
    "  Stairway to Heaven",
    "Hotel California "
];

const forrestFrank = [
    " Paradise ",
    "No Longer Bound ",
    "Celebration",
    "Live Your Life",
    " Celebration",
    " Nothing Else",
    "Paradise",
    "Live Your Life  "
];


function getNewArray(arr){

const trimmedArr = arr.map(e => e.trim());
const arrInOrder = trimmedArr.toSorted();
const newArr = [...new Set(arrInOrder)];

const result = arr.length - newArr.length;

return `${newArr.join(', ')} (${result} duplicate(s) removed)`
};


console.log(getNewArray(forrestFrank));