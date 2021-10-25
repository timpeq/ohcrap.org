import { log } from "./deps.ts";
import { errorResponse } from "./response/error.ts";
import { defaultResponse } from "./response/default.ts";
import { staticResponse } from "./response/static.ts";

export async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  log.info(`Request from ${request.headers.get('x-forwarded-for')} for ${pathname}`);

  if (pathname === "/") {
    return defaultResponse();
  }
  if (pathname === "/parcho") {
    return defaultResponse();
  }
  if (pathname.startsWith("/static")){
    return await staticResponse(request);
  }  
  return errorResponse(404, "Not Found")
}
