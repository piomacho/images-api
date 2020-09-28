"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Server_1 = tslib_1.__importDefault(require("./Server"));
const port = (process.env.PORT || 5050);
Server_1.default.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
//# sourceMappingURL=index.js.map