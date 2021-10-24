import { log, listenAndServe } from "./deps.ts";
import { handleRequest } from "./handleRequest.ts";

log.info("Server starting")

listenAndServe(":8000", (request: Request)=>{
  return handleRequest(request);
});