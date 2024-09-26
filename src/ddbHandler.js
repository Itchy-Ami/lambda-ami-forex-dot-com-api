const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const {DynamoDBDocumentClient, QueryCommand} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

async function fetchAllDataFromDDB(symbol, endTime) {
    endTime = new Date(endTime)
    const startTime = new Date(endTime); // Create a new date object to modify
    startTime.setDate(endTime.getDate() - 7); // Adjust the date


    const params = {
        TableName:  "ami-forex-dot-com-data",
        KeyConditionExpression: 'symbol = :symbol and #dT BETWEEN :startTime AND :endTime',
        ExpressionAttributeNames:{
            "#dT": "dateTime",
        },
        ExpressionAttributeValues: {
            ':symbol': symbol,
            ':startTime': startTime.toISOString(),
            ':endTime': endTime.toISOString(),
        },
    };
    let items = [];
    let lastEvaluatedKey = null;
    try {
        console.info(`querying data between ${startTime} and ${endTime} for symbol: ${symbol}`);
        do {
            const queryParams = lastEvaluatedKey
                ? {...params, ExclusiveStartKey: lastEvaluatedKey}
                : params;

            const command = new QueryCommand(queryParams);
            const data = await ddbDocClient.send(command);
            console.info(`Items fetched: ${data.Items.length}`);
            if (data.Items) {
                items = items.concat(data.Items);
            }

            lastEvaluatedKey = data.LastEvaluatedKey;

        } while (lastEvaluatedKey);
        console.info(`Total items fetched: ${items.length}`);
        return items;
    } catch (err) {
        console.error(`Unable to query. Error: ${JSON.stringify(err, null, 2)}`);
        throw err;
    }
}

module.exports = {
    fetchAllDataFromDDB: fetchAllDataFromDDB
}