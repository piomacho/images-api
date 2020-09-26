"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _server_1 = tslib_1.__importDefault(require("@server"));
const port = Number(5050);
_server_1.default.listen(port, () => {
    console.info('Express server started on port: ' + port);
});
//# sourceMappingURL=index.js.map