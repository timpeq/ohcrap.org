import { log, listenAndServe } from "./deps.ts";
import { handleRequest } from "./handleRequest.ts";

log.info("Server starting")

listenAndServe(":8000", (request, connInfo)=>{
  return handleRequest(request, connInfo);
})
.catch((error:Error)=>{
  log.error(`Caught error on listenAndServe`, error);
});