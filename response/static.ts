import { errorResponse } from "./error.ts";
import { serveFile } from "../deps.ts";

export async function staticResponse(request: Request) {
  const { pathname } = new URL(request.url);
  return await serveFile(request, `.${pathname}`)
  .catch((error: Error) => {
    if (error.name === "NotFound") return errorResponse(404, "Not Found");
    else {
      console.error(`Error returning file "${pathname}""`, error.name);
      return errorResponse(500, "Unknown Error");
    }
  });
}
