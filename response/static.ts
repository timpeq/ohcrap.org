import { errorResponse } from "./error.ts";
import { serveFile, log } from "../deps.ts";

type StaticResponseOptions = { prefix?:string }

export async function staticResponse(request: Request, options?:StaticResponseOptions) {
  const { pathname } = new URL(request.url);
  return await serveFile(request, `.${options?.prefix ? options.prefix : ""}${pathname}`)
  .catch((error: Error) => {
    if (error.name === "URIError") {
      log.error(`Not Found "${options?.prefix ? options.prefix : ""}${pathname}" ${error.name} - ${error.message}`);
      return errorResponse(404, "Not Found");
    }
    else {
      log.error(`Returning file "${options?.prefix ? options.prefix : ""}${pathname}" ${error.name} - ${error.message}`);
      return errorResponse(500, "Unknown Error");
    }
  });
}
