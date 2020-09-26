"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIfFileExistsInFolder = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
exports.findIfFileExistsInFolder = (fileName, pathRel) => {
    fs_1.default.readdir(path_1.default.join(__dirname, pathRel), (err, files) => {
        files.forEach(file => {
            if (file === fileName) {
                return true;
            }
        });
    });
    return false;
};
//# sourceMappingURL=common.js.map