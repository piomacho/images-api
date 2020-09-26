import fs from 'fs';
import path from 'path';



export const findIfFileExistsInFolder = async (fileName: string, pathRel: string) => {
    try {
      const  a = fs.readdir(path.join(__dirname, pathRel),
         (err: NodeJS.ErrnoException | null, files: Array<string>) => {
            files.forEach(file => {
                console.log("file ", file, " dest ", fileName, " HMMM ", file === fileName);
              if(file === fileName) {
                return true;
              }
            })
            return false;
        })
        console.log("A ",a);

    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }


// export const findIfFileExistsInFolder = async (fileName: string, pathRel: string) => {
//     await fs.promises.readdir(path.join(__dirname, pathRel), (err: NodeJS.ErrnoException | null, files: Array<string>) => {
//         files.forEach(file => {
//             console.log("file ", file, " dest ", fileName, " HMMM ", file === fileName);
//           if(file === fileName) {
//             return true;
//           }
//         });
//     });
//     return false;
// }