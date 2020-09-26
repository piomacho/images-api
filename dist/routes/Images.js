"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const common_1 = require("src/common/common");
const pixl_xml_1 = tslib_1.__importDefault(require("pixl-xml"));
const router = express_1.Router();
router.post('/send-image', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files) {
            res.send("File was not found");
            return;
        }
        const file = req.files.file;
        const stringContent = file.data.toString('utf8');
        const jsonParsedResult = pixl_xml_1.default.parse(stringContent);
        const imageName = jsonParsedResult.GroundOverlay.name;
        try {
            const fileDoExists = yield common_1.findIfFileExistsInFolder(imageName, '../images');
            console.log("fileDp ", fileDoExists);
        }
        catch (err) {
            return res.status(404).json({
                error: err.message,
            });
        }
    }
    catch (err) {
        return res.status(404).json({
            error: err.message,
        });
    }
}));
exports.default = router;
//# sourceMappingURL=Images.js.map