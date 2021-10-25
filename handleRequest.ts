import { log, ConnInfo } from "./deps.ts";
import { errorResponse } from "./response/error.ts";
import { defaultResponse } from "./response/default.ts";
import { staticResponse } from "./response/static.ts";

export async function handleRequest(request: Request, connInfo:ConnInfo): Promise<Response> {
  const { pathname } = new URL(request.url);

  log.info(`[${connInfo.remoteAddr}] ${request.method} - ${pathname}`);

  log.info({...request.headers.values()});

  if (pathname === "/") {
    return defaultResponse();
  }
  if (pathname === "/parcho") {
    return defaultResponse();
  }
  if (pathname.startsWith("/static")){
    return await staticResponse(request);
  }

  log.error(`Request not found`);
  return errorResponse(404, "Not Found")
}
