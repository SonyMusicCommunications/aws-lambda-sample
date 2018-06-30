import { LambdaHandlerEvent, LambdaHandlerContext } from "./app/shared/lambda/lambda-handler";
import { ApiGateWayResponse } from "./app/shared/api-gateway/api-gateway-response";


exports.handler = async (event: LambdaHandlerEvent, context: LambdaHandlerContext, callback: any = Function.prototype): Promise<void> =>
{
  const responseBody = {
    title: `Hello Lambda (${new Date()})`,
  };

  const response: ApiGateWayResponse = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(responseBody),
    isBase64Encoded: false,
  };

  callback(null, response);
}
