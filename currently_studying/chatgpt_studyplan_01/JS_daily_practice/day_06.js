// Challenge: The Grocery Tally
// Goal: Calculate an array of prices (0 representing an item that was returned & refunded) and tally both the total amount spent, as well as how many items were refunded, and the average cost of non-refunded items using a loop (NO array methods!)
// Bonus: Round monetary values to two decimal places

const groceries = [
    0,
    13.75,
    8.25,
    0,
    4.50,
    0,
    10.99,
    2.75,
    0
];

function getTotal(array) {
    let total = 0;
    let refunds = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0){
            refunds += 1;
        } else {
            total += array[i];
        }
    }

    return `Total spent: ${total}, Refunded items: ${refunds}`;
};

console.log(getTotal(groceries));