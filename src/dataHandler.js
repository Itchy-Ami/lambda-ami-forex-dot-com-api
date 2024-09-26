function getFilteredData(DDBBarData, minuteInterval, numberQuotes, tIncrement) {
    let data = [];

    // Sort DDBBarData by dateTime DESC
    const sortedDDBBarData = DDBBarData.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

    // Convert minuteInterval to milliseconds for easier comparison
    const intervalInMilliseconds = minuteInterval * 60 * 1000;

    // Filter DDBBarData by minuteInterval
    const lastDateTime = new Date(sortedDDBBarData[0].dateTime).getTime();
    let lastTIncrementValue = tIncrement * numberQuotes;
    data.push({...sortedDDBBarData[0], tIncrement: lastTIncrementValue});

    for (let i = 1; i < sortedDDBBarData.length && data.length < numberQuotes; i++) {
        let currentDateTime = new Date(sortedDDBBarData[i].dateTime).getTime();

        // Check the time difference is equal to minuteInterval
        if ((lastDateTime - currentDateTime) % intervalInMilliseconds === 0) {
            lastTIncrementValue = parseFloat((lastTIncrementValue - tIncrement).toFixed(4));
            data.unshift({...sortedDDBBarData[i], tIncrement: lastTIncrementValue});
        }
    }
    console.log(`length of data: ${data.length}`);
    console.log(data);
    return data;
}

module.exports = {
    getFilteredData: getFilteredData
}