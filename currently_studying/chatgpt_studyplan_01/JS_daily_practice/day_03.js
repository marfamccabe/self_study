// Challenge: Day-Motivational Greeting
// Goal: Upgrade your greet function so it includes a motivational quote or phrase that changes based on the day of the week

const dailyVerse = {
    mon: 'Your promise revives me; it comforts me in all my troubles (Psalm 119:50)',
    tues: 'The faithful love of the Lord never ends! His mercies never cease (Lamentations 3:22)',
    wed: 'Faith shows the reality of what we hope for; it is the evidence of things we cannot see (Hebrews 11:1)',
    thurs: 'In this world you will have trouble. But take heart! I have overcome the world (John 16:33)',
    fri: 'Your word is a lamp to guide my feet and a light for my path (Psalm 119:105)',
    sat: 'For God has not given us a spirit of fear and timidity, but of power, love, and self-discipline (2 Timothy 1:7)',
    sun: 'No power in the sky above or in the earth below - indeed, nothing in all creation will ever be able to seperate us from the love of God that is revealed in Christ Jesus our Lord (Romans 8:39)'
};

// TODO: create an array to store & loop over object

function greet(name = 'partner'){
    const d = new Date();
    let time = d.getHours(); 

    if (time >= 11) {
        return `Good morning, ${name}!`
    } else if (time >= 17) {
        return `Good afternoon, ${name}`
    } else {
        return `Good evening, ${name}`
    }
};

console.log(greet());