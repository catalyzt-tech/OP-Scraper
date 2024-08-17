import { MODULE_OPTIONS } from "./const";
import { parseArgs } from "./utils/utils";
import 'dotenv/config'

async function main() {

  const args = process.argv.slice(2);
  
  const parsedArgs = parseArgs(args);
  
  const name = parsedArgs["module"] || "";
  
  if (name && MODULE_OPTIONS[name]) {
    // call function
    MODULE_OPTIONS[name](); 
    
  } else {
    console.error("Module not in options\nBelow are the options available");
    
    Object.keys(MODULE_OPTIONS).forEach(key => {
      console.log("- ", key)
    })
  }

}

main()
