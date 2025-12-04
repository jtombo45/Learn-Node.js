import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData(baseDir) {

    /*
    Challenge:
    1. getData() should: 
        - read the json in json.data as a string 
        - parse it to JS 
        - return the parsed data. 

    If there’s an error, it should return an empty array (think, why are we doing this?).

    hint.md for help
    */
   // We use JSON array to allow for better data handling later on
    try{
        const dataPath = path.join(baseDir, 'data', 'data.json')
        const jsonData = await fs.readFile(dataPath, 'utf-8')
        return JSON.parse(jsonData)
    }
    catch(err){
        console.error('Error reading or parsing data.json:', err)
        return []   
    }

}