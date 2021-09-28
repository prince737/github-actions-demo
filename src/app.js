const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}


try {
    document.getElementById('day').innerText = dayOfTheWeek();
    document.getElementById('time').innerText = `Time: ${Date()}`;
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;