const handler = require('../src/app').handler;


handler({
        "resource": "/ForexCom/GetCurrencyPairData",
        "path": "/ForexCom/GetCurrencyPairData",
        "httpMethod": "GET",
        "headers": {
            "minutesInterval": "10",
            "symbol": "AUD/USD",
            "tIncrement": "0.005",
            "endTime": "24/09/2024T00:00:00Z",
            "numberQuotes": " 400"
        },
        "multiValueHeaders": {
            "minutesInterval": [
                "10"
            ],
            "symbol": [
                "AUD/USD"
            ],
            "tIncrement": [
                "0.005"
            ],
            "endTime": [
                "24/09/2024T00:00:000Z"
            ],
            "numberQuotes": [
                " 400"
            ]
        },
        "queryStringParameters": null,
        "multiValueQueryStringParameters": null,
        "pathParameters": null,
        "stageVariables": null,
        "requestContext": {
            "resourceId": "y6u9xy",
            "resourcePath": "/ForexCom/GetCurrencyPairData",
            "httpMethod": "GET",
            "extendedRequestId": "enxwkFcfTXUFn2w=",
            "requestTime": "24/Sep/2024:17:54:24 +0000",
            "path": "/ForexCom/GetCurrencyPairData",
            "accountId": "010438495263",
            "protocol": "HTTP/1.1",
            "stage": "test-invoke-stage",
            "domainPrefix": "testPrefix",
            "requestTimeEpoch": 1727200464146,
            "requestId": "54cac228-cd46-456c-b070-27bdc9744f72",
            "identity": {
                "cognitoIdentityPoolId": null,
                "cognitoIdentityId": null,
                "apiKey": "test-invoke-api-key",
                "principalOrgId": null,
                "cognitoAuthenticationType": null,
                "userArn": "arn:aws:iam::010438495263:root",
                "apiKeyId": "test-invoke-api-key-id",
                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                "accountId": "010438495263",
                "caller": "010438495263",
                "sourceIp": "test-invoke-source-ip",
                "accessKey": "ASIAQE3ROZQPWY4IEDJM",
                "cognitoAuthenticationProvider": null,
                "user": "010438495263"
            },
            "domainName": "testPrefix.testDomainName",
            "apiId": "cuousxae6l"
        },
        "body": null,
        "isBase64Encoded": false
    }
)
    .then(r => console.log(r))
    .catch(e => console.error(e));