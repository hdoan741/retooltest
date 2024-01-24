// index.ts
var import_retoolrpc = require("retoolrpc");
var rpc = new import_retoolrpc.RetoolRPC({
  apiToken: "your-api-token-here",
  // Replace this token with your API token
  host: "http://localhost:3000/",
  // Replace this host with your host
  resourceId: "resource-id",
  // Replace this resource ID with your ID
  environmentName: "production",
  // Replace this environment name with your name (defaults to production)
  pollingIntervalMs: 1e3,
  // The polling interval for the RPC
  version: "0.0.1",
  // An optional version number for functions schemas
  logLevel: "info"
  // Change to 'debug' for verbose logging or use own logger implementation by passing a logger param
});
//# sourceMappingURL=index.js.map
