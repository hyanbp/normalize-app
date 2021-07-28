import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export function order(arr: Array<string>): void {
  for (let j = 0; j < arr.length - 1; j++) {
    let temp = "";
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[j] > arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
