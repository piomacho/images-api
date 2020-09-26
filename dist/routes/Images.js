"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const path_1 = tslib_1.__importDefault(require("path"));
const xml2js_1 = tslib_1.__importDefault(require("xml2js"));
const common_1 = require("src/common/common");
const router = express_1.Router();
const parser = new xml2js_1.default.Parser();
router.post('/send-image', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files) {
            res.send("File was not found");
            return;
        }
        const file = req.files.file;
        if (file) {
            const stringContent = file.data.toString('utf8');
            parser.parseString(stringContent, function (err, result) {
                if (err) {
                    console.error("Error with string parsing ", err);
                    return res.status(400).send('Something went wrong');
                }
                const imageName = result.kml.GroundOverlay[0].name[0];
                const fileDoExists = common_1.findIfFileExistsInFolder(imageName, '../images');
                if (fileDoExists) {
                    return res.status(200).sendFile(imageName, { root: path_1.default.join(__dirname, '../images') });
                }
                return res.status(404).send("Requested bitmap was not found on server.");
            });
        }
        return res.status(400).send('Something went wrong');
    }
    catch (err) {
        return res.status(404).json({
            error: err.message,
        });
    }
}));
exports.default = router;
//# sourceMappingURL=Images.js.map