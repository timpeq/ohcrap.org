import { errorResponse } from "./errorResponse.ts";
import { defaultResponse} from "./defaultResponse.ts";

export async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/")) {
    return defaultResponse();
  }
  else return errorResponse(404, "Not Found");
}
