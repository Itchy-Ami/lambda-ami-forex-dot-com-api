const {InvokeCommand, LambdaClient } = require("@aws-sdk/client-lambda");

const lambdaClient = new LambdaClient({
    maxAttempts: 3,
});

async function triggerForexDotComDataPumpLambda(symbols){
    const params = {
        FunctionName: "lambda-ami-forex-dot-com-fetch-data",
        Payload: JSON.stringify({symbols: symbols}),
    };
    try {
        console.info(`Invoking lambda ${params.FunctionName} with payload ${params.Payload}`);
        await lambdaClient.send(new InvokeCommand(params));
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    triggerForexDotComDataPumpLambda: triggerForexDotComDataPumpLambda
}