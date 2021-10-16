import { errorResponse } from "./response/error.ts";
import { defaultResponse} from "./response/default.ts";
import { parchoResponse } from "./response/parcho.ts";

export function handleRequest(request: Request): Response {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return defaultResponse();
  }
  if (pathname === "/parcho") {
    return parchoResponse();
  }
  else return errorResponse(404, "Not Found");
}
