export interface ApiGateWayResponse
{
  body: string;
  headers: string | {[name: string]: string | string[]};
  isBase64Encoded: boolean;
  statusCode: number;
}
