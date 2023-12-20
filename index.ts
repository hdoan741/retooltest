import { RetoolRPC } from "retoolrpc";

// none of this matters, its just to make sure that typescript
// does not optimize away the import
const rpc = new RetoolRPC({
  apiToken: "your-api-token-here", // Replace this token with your API token
  host: "http://localhost:3000/", // Replace this host with your host
  resourceId: "resource-id", // Replace this resource ID with your ID
  environmentName: "production", // Replace this environment name with your name (defaults to production)
  pollingIntervalMs: 1000, // The polling interval for the RPC
  version: "0.0.1", // An optional version number for functions schemas
  logLevel: "info", // Change to 'debug' for verbose logging or use own logger implementation by passing a logger param
});
