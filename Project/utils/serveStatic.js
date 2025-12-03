import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(__dirname, res) {
   /*
   Challenge 1: 

   - Store index.html as a buffer in a const ‘content’. 
   - As this is an async process, do this inside a try/catch block.
   - For now, just log the error in the catch block.
   - You will need to change something to do with the function declaration. What is it?

   */
   /*
   Challenge 3:

   - Import sendResponse() and use it to serve index.html. 
   Pass in all of the information sendResponse() is expecting.
   serveStatic() will need another param. What is it?

   Make any changes necessary in server.js and delete any unneeded code.

   */
   try{
      const filePath = path.join(__dirname, 'public', 'index.html')
      const content = await fs.readFile(filePath)
      sendResponse(res, 200, 'text/html', content)
   }
   catch(err){
      console.error(err)
      sendResponse(res, 500, 'text/plain', 'Internal Server Error')
   }

}
