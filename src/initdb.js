import'./db.js'
import * as db from './db.js';



const client = await db.connectToDatabase();
const entry = {test:1}

db.addEntry("testCollection", entry);

