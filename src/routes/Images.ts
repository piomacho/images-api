import { Request, Response, Router } from 'express';
import { DOMParser } from 'xmldom';

import path from 'path';
import xml2js from 'xml2js';
import XML from 'pixl-xml';
import fs from 'fs';

const router = Router();

    // "start": "npm run build && node build/index.js"
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


        const stringContent = file.data.toString('utf8');

        const jsonParsedResult  = XML.parse( stringContent );

        //@ts-ignore
        const imageName = jsonParsedResult.GroundOverlay.name;
        try {
            await fs.readdir('./src/images',
            (err: NodeJS.ErrnoException | null, files: Array<string>) => {
               files && files.forEach(file => {
                 if(file === imageName) {
                   return res.status(200).sendFile(imageName, { root: './src/images' });
                 }
               })
               return false;
           })

        } catch (err) {
            return res.status(404).json({
                error: err.message,
            });
        }



    } catch (err) {
        return res.status(404).json({
            error: err.message,
        });
    }
    // return res.status(400).send('Something went wrong');

});




router.post('/send-image-simple', async (req: Request, res: Response) => {
    try {
        const imageName = req.body.imageName;
        try {
            await fs.readdir('./src/images',
            (err: NodeJS.ErrnoException | null, files: Array<string>) => {
               files && files.forEach(file => {
                 if(file === `${imageName}.png`) {
                   return res.status(200).sendFile(`${imageName}.png`, { root: './src/images' });
                 }
               })
               return false;
           })

        } catch (err) {
            return res.status(404).json({
                error: err.message,
            });
        }



    } catch (err) {
        return res.status(404).json({
            error: err.message,
        });
    }
    // return res.status(400).send('Something went wrong');

});

export default router;
