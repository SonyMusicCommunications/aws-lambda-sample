interface Identity
{
  accessKey: string;
  accountId: string;
  apiKey: string;
  apiKeyId: string;
  caller: string;
  cognitoAuthenticationProvider: any;
  cognitoAuthenticationType: any;
  cognitoIdentityId: any;
  cognitoIdentityPoolId: any;
  sourceIp: string;
  user: string,
  userAgent: string;
  userArn: string;
}

interface RequestContext
{
  accountId: string;
  apiId: string,
  extendedRequestId: string;
  httpMethod: string;
  identity: Identity;
  path: string;
  requestId: string;
  resourceId: string;
  resourcePath: string;
  stage: string;
}

export interface LambdaHandlerEvent
{
  body: any;
  headers: {[name: string]: string};
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: any;
  queryStringParameters: any;
  requestContext: RequestContext;
  resource: string;
  stageVariables: any;
}

export interface LambdaHandlerContext
{
  awsRequestId: string;
  callbackWaitsForEmptyEventLoop: boolean;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  invokeid: string;
  logGroupName: string;
  logStreamName: string;
  memoryLimitInMB: number;
}
