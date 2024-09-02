import randomFile from '../assets/random_file' with { type: "file" };
import { embeddedFiles } from "bun";

import fs from "fs";
import fsPromises from "fs/promises";

(async function() {
  console.log(embeddedFiles);
  console.log(randomFile);


  console.log("Synchronous read:")
  console.log(fs.readFileSync(randomFile, "utf8"));

  console.log("Asynchronous read:")
  await new Promise(resolve=> {
    fs.readFile(randomFile, "utf8", (err, data)=> {
      console.log(data);
      console.error(err);
      resolve();
    })
  })

  console.log("Asynchronous read with promises:")
  await fsPromises.readFile(randomFile, "utf8");

})()

