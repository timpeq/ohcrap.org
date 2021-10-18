import { errorResponse } from "./response/error.ts";
import { defaultResponse } from "./response/default.ts";
import { parchoResponse } from "./response/parcho.ts";
import { serveFile } from "./deps.ts";

export async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  if (pathname === "/") {
    return defaultResponse();
  }
  if (pathname === "/parcho") {
    return parchoResponse();
  }
  if (pathname.startsWith("/static")){
    return await serveFile(request, `./${pathname}`)
    .catch(()=>{
      return errorResponse(404, "Not Found");
    })
  }
  else {
    return errorResponse(404, "Not Found")
  }
}
