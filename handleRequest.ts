import { errorResponse } from "./errorResponse.ts";
import { defaultResponse} from "./defaultResponse.ts";

export function handleRequest(request: Request): Response {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return defaultResponse();
  }
  else return errorResponse(404, "Not Found");
}
