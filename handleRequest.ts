import { log, ConnInfo, serveFile } from "./deps.ts";
import { errorResponse } from "./response/error.ts";
import { defaultResponse } from "./response/default.ts";
import { staticResponse } from "./response/static.ts";

export async function handleRequest(request: Request, connInfo:ConnInfo): Promise<Response> {
  const { pathname } = new URL(request.url);

  if (connInfo.remoteAddr.transport !== 'tcp') throw Error("The server is TCP only!")
  log.info(`[${connInfo.remoteAddr.hostname}] - ${request.method} ${pathname}`)

  if (pathname === "/") {
    return defaultResponse();
  }
  if (pathname === "/parcho") {
    return defaultResponse();
  }
  if (pathname === "/favicon.ico") {
    return await staticResponse(request, {prefix:"/static"});
  }
  if (pathname.startsWith("/static")){
    return await staticResponse(request);
  }

  log.error(`[${connInfo.remoteAddr.hostname}] - ${request.method} ${pathname} NOT FOUND`);
  return errorResponse(404, "Not Found")
}
