import { LambdaHandlerEvent, LambdaHandlerContext } from '../app/shared/lambda/lambda-handler';
import { ApiGateWayResponse } from '../app/shared/api-gateway/api-gateway-response';
import { environment } from '../environments/environment';
import * as AWS from 'aws-sdk';


exports.handler = (event: LambdaHandlerEvent, context: LambdaHandlerContext, callback: any = Function.prototype): void =>
{
  const dynamo = new AWS.DynamoDB({
    region: environment.aws.region,
  });

  const params: AWS.DynamoDB.QueryInput = {
    TableName: 'Hoge',
    KeyConditionExpression: 'fuga = :fugafuga',
    ExpressionAttributeValues: {
      ':fugafuga': {
        'S': 'ThisIsKey',
      },
    }
  };

  const response: ApiGateWayResponse = {
    statusCode: 200,
    headers: {},
    body: '', 
    isBase64Encoded: false,
  };

  dynamo.query(params, (err: AWS.AWSError, data: AWS.DynamoDB.QueryOutput) => {
    if (err !== null) {
      response.statusCode = err.statusCode;
      response.body = JSON.stringify(err);
    } else {
      response.body = JSON.stringify(data);
    }
    callback(null, response);
  });
}
