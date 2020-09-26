import { Request, Response, Router } from 'express';
import { DOMParser } from 'xmldom';

import path from 'path';
import xml2js from 'xml2js';
import { findIfFileExistsInFolder } from 'src/common/common';

const router = Router();
const parser = new xml2js.Parser();

interface ParsedKMLType {
    kml: {
        GroundOverlay: Array<{
            name: Array<string>;
            color: Array<string>;
            Icon: Record<string, any>;
            LatLonBox: Record<string, any>;
        }>
    }
}

router.post('/send-image', async (req: Request, res: Response) => {
    try {
        if(!req.files)
        {
            res.send("File was not found");
            return;
        }

        const file = req.files.file;
        if(file) {

            const stringContent = file.data.toString('utf8');

            parser.parseString(stringContent, function (err: string, result: ParsedKMLType) {
                if(err) {
                    console.error("Error with string parsing ", err);
                    return res.status(400).send('Something went wrong');
                }
                const imageName = result.kml.GroundOverlay[0].name[0];

                const fileDoExists = findIfFileExistsInFolder(imageName, '../images');

                if(fileDoExists) {
                    return res.status(200).sendFile(imageName, { root: path.join(__dirname, '../images') });
                }
                return res.status(404).send("Requested bitmap was not found on server.");
            });
        }
        return res.status(400).send('Something went wrong');

    } catch (err) {
        return res.status(404).json({
            error: err.message,
        });
    }

});

export default router;
