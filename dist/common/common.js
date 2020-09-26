"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIfFileExistsInFolder = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
exports.findIfFileExistsInFolder = (fileName, pathRel) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const a = fs_1.default.readdir(path_1.default.join(__dirname, pathRel), (err, files) => {
            files.forEach(file => {
                console.log("file ", file, " dest ", fileName, " HMMM ", file === fileName);
                if (file === fileName) {
                    return true;
                }
            });
            return false;
        });
        console.log("A ", a);
    }
    catch (err) {
        console.error('Error occured while reading directory!', err);
    }
});
//# sourceMappingURL=common.js.map