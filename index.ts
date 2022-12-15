#! /usr/bin/env node
import { readDirectory, readConfigFile, validateConfigObject } from './util/file-util';
import type { RandomsConfig } from './types/util-types';

const config = readConfigFile () as RandomsConfig;
validateConfigObject (config);
const fileMatchRegex = new RegExp (config.include);

// TODOS:
// - create output directory if it doesn't exist
// - create output file if it doesn't exist
// - import all files in output file

readDirectory (config.target, (file)=>{
    if (fileMatchRegex.test (file.fileName))
    {
        // valid file
        console.log (file.filePath);
    }
})





