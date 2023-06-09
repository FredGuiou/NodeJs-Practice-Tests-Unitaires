"use strict";

const { opendir, stat } = require("fs").promises;
const { extname, join } = require("path");

async function* fetchFiles(directoryLocation) {
  const dirents = await opendir(directoryLocation);

  for await (const dirent of dirents) {
    const fullDirentPath = join(directoryLocation, dirent.name);

    if (dirent.isDirectory()) {
      yield* fetchFiles(fullDirentPath);
    }
    else {
      yield fullDirentPath;
    }
  }
}

async function getFilesExtensions(dir) {
  const rootStat = await stat(dir);
  if (!rootStat.isDirectory()) {
    throw new Error("dir must be a directory!");
  }

  const extensions = new Set();
  for await (const path of fetchFiles(dir)) {
    extensions.add(extname(path));
  }

  return extensions;
}

module.exports = getFilesExtensions;
