const {fetchAllDataFromDDB} = require("./ddbHandler");
const {triggerForexDotComDataPumpLambda} = require("./lambdaHandler");

exports.handler = async (event) => {
    const {getFilteredData} = require("./dataHandler");
    console.log(`Event: ${JSON.stringify(event)}`);
    let {symbol, numberQuotes, endTime, tIncrement, minutesInterval} = event?.queryStringParameters;

    try {
        await triggerForexDotComDataPumpLambda([symbol]);
        const DDBBarData = await fetchAllDataFromDDB(symbol, endTime);
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "isBase64Encoded": false,
            "body": JSON.stringify(getFilteredData(DDBBarData, minutesInterval, numberQuotes,tIncrement))
        };
    } catch (e) {
        console.log(e);
        throw e;
    }
};