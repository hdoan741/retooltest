# RPC import not found

install using npm, yarn or pnpm 

Try to run with `npm test` or `yarn test` or `pnpm test`

I get the following error

```
file:///Users/andreitaylor/data/testRetool/dist/index.js:2
import { RetoolRPC } from "retoolrpc";
         ^^^^^^^^^
SyntaxError: Named export 'RetoolRPC' not found. The requested module 'retoolrpc' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'retoolrpc';
const { RetoolRPC } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:132:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:214:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)

Node.js v20.10.0
```