import { IFileRepository } from "../../domain/repositories/IFile.repository";
import fs from 'fs';
import path from "path";


export class FileRepository implements IFileRepository{
    read(file: string):string {
       try{
         return fs.readFileSync(path.join(__dirname, `../../../files/${file}`)).toString();
       }catch(e){
          return `Error with file system  or file didnt find=>${e}`
       }
    }
    
}