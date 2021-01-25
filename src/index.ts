
import { CLIView } from './detail/views/cli.view';
import { RestView } from './detail/views/rest.view';


enum optionsEnum{
    CLI="cli",
    REST="rest-ui",
    HELP="help"
};
let argsCLI = process.argv.slice(2);
let typeProcess = argsCLI[0]; 
let fileName = argsCLI[1];
console.log(`
        ******************************
           ***    ****  **   **  ****
          ** **   *     ** * **  **
        ***  ***  ****  **   **  ****
        ******************************
`);
console.log("Option selected:",typeProcess);
let cliView = CLIView();                                 
switch (typeProcess) {
    case optionsEnum.CLI:
            console.log("********** ACME CLI *********");
            if(fileName==null || fileName == undefined){
                console.error("Filename not found, You should use 'npm start help' please.");
                break;
            } 
            
            cliView(fileName);

        break;
    case optionsEnum.REST:
            console.log("********** ACME REST API *********");
            RestView();            
        break;
    case optionsEnum.HELP:
            console.log(`
                ********** ACME - HELP*********
                
                npm start cli <filename.ext>.......cli use case
                npm start rest-ui..................api rest and ui
                npm start..........................default api rest, same "npm start rest-ui"
                npm help ..........................help for command for ACME                               

            `);
        break;
    default:
        console.log("********** ACME REST API *********");
            RestView();
        break;
} 


         

