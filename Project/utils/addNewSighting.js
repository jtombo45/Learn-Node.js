import { getData } from './getData.js'
import fs from 'node:fs/promises'
import path from 'node:path'
import { sortObjectKeysRecursively } from './sortObjectKeysRecursively.js'

export async function addNewSighting(newSighting) {

  try {
/*
    1. Get the existing data (remember, this will already be a JS array)
    2. Push the new sighting to it (we parsed it to a JS object in the last scrim)
    3. Write data to the file.
    4. Add the new sighting and check out the 'read' page.
    5. Throw an error (in the catch block) if any of 1-3 above fail.
    
    To write data:
    Import fs/promises
    Use the writeFile method with the following:
      - the relative path to the file 
      - The data (what should we do to this data first?)
      - The encoding 'utf8'
    
    Bonus: figure out how to prettify the JSON!
*/
    newSighting.uuid = crypto.randomUUID()
    console.log(typeof newSighting)
    console.log('New sighting:', newSighting)
    const data = await getData()
    data.push(newSighting)
    const dataPath = path.join('data', 'data.json')
    // await fs.writeFile(dataPath, JSON.stringify(await sortObjectKeysRecursively(data), null, 2), 'utf-8')
    await fs.writeFile(dataPath, JSON.stringify(await data, null, 2), 'utf-8')
    
  } catch (err) {
    throw new Error('Error adding new sighting: ' + err.message)
  }

}
