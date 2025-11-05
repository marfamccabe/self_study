// Challenge: Day-Motivational Greeting
// Goal: Upgrade your greet function so it includes a motivational quote or phrase that changes based on the day of the week

const dailyVerse = {
    Monday: 'Your promise revives me; it comforts me in all my troubles (Psalm 119:50)',
    Tuesday: 'The faithful love of the Lord never ends! His mercies never cease (Lamentations 3:22)',
    Wednesday: 'Faith shows the reality of what we hope for; it is the evidence of things we cannot see (Hebrews 11:1)',
    Thursday: 'In this world you will have trouble. But take heart! I have overcome the world (John 16:33)',
    Friday: 'Your word is a lamp to guide my feet and a light for my path (Psalm 119:105)',
    Saturday: 'For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline (2 Timothy 1:7)',
    Sunday: 'No power in the sky above or in the earth below - indeed, nothing in all creation will ever be able to seperate us from the love of God that is revealed in Christ Jesus our Lord (Romans 8:39)'
};

function getDailyVerse() {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const t = new Date();
    let today = dayNames[t.getDay()];

    return `${today}'s verse: ${dailyVerse[today]}`;
}

function greet(name = 'partner'){
    const d = new Date();
    let time = d.getHours();

    if (time <= 11) {
        return `Good morning, ${name}! ${getDailyVerse()}`
    } else if (time <= 17) {
        return `Good afternoon, ${name}! ${getDailyVerse()}`
    } else {
        return `Good evening, ${name}! ${getDailyVerse()}`
    }
};

console.log(greet('Marissa'));