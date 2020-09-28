"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const pixl_xml_1 = tslib_1.__importDefault(require("pixl-xml"));
const fs_1 = tslib_1.__importDefault(require("fs"));
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
            yield fs_1.default.readdir('./src/images', (err, files) => {
                files && files.forEach(file => {
                    if (file === imageName) {
                        return res.status(200).sendFile(imageName, { root: './src/images' });
                    }
                });
                return false;
            });
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