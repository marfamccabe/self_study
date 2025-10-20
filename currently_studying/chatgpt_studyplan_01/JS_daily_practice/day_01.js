// Challenge: Create a greeting function
// Goal: Write a function that takes a person’s name as a parameter and returns a friendly greeting.
function greet(name) {
    return 'Hello, ' + name + '!';
};

// Challenge: Personalized greetings
// Goal: Expand your greeting function so it can greet people differently depending on the time of day
function greet(name, time) {
    if (time <= 11) {
        return `Good morning, ${name}!`;
    } else if (time < 18) {
        return `Good afternoon, ${name}!`;
    } else {
        return `Good evening, ${name}.`;
    }
};

// Challenge: Smart greeting function
// Goal: Make your greet function automatically determine the time of day (no manual input for time needed)
function greet(name = 'partner') {
    const d = new Date();
    let time = d.getHours();

    if (time <= 11) {
        return `Good morning ${name}.`;
    } else if (time <= 17) {
        return `Good afternoon, ${name}.`;
    } else {
        return `Good evening, ${name}`;
    }
};
