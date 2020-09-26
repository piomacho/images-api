import fs from 'fs';
import path from 'path';

export const findIfFileExistsInFolder = (fileName: string, pathRel: string) => {
    fs.readdir(path.join(__dirname, pathRel), (err: NodeJS.ErrnoException | null, files: Array<string>) => {
        files.forEach(file => {
          if(file === fileName) {
            return true;
          }
        });
    });
    return false;
}