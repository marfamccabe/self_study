// Challenge: Day-Specific Greetings
// Goal: Expand your greeting function so it not only greets the user based on time of day, but also adds a short day-specific message - like wishing them a happy Monday or a relaxing weekend.

function greet(name = 'partner'){
    const d = new Date;
    let time = d.getHours();

    function message() {
        let day = d.getDay();

        if (day === 1) {
            return `Have a great week!`
        } else if (day >= 2 && day <= 4) {
            return `Keep on chugging!`
        } else {
            return `Time for some rest and relaxation!`
        }
    }

    if (time <= 11) {
        return `Good morning, ${name}. ${message()}`
    } else if (time <= 17) {
        return `Good afternoon, ${name}. ${message()}`
    } else {
        return `Good evening, ${name}. ${message()}`
    }
}

console.log(greet());