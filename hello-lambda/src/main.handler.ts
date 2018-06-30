import { LambdaHandlerEvent, LambdaHandlerContext } from "./app/shared/lambda/lambda-handler";
import { ApiGateWayResponse } from "./app/shared/api-gateway/api-gateway-response";


exports.handler = async (event: LambdaHandlerEvent, context: LambdaHandlerContext, callback: any = Function.prototype): Promise<void> =>
{
  const responseBody = Object.assign({}, event);
  Object.assign(responseBody, context);

  const response: ApiGateWayResponse = {
    statusCode: 200,
    headers: {'Context-Type': 'application/json'},
    body: JSON.stringify(responseBody),
    isBase64Encoded: false,
  };

  callback(null, response);
}
