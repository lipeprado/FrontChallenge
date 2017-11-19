import zlib from 'zlib';
import fs from 'fs';

function compressFile(filename) {
  const compress = zlib.createGzip();
  const input = fs.createReadStream(`dist/${filename}`);
  const output = fs.createWriteStream(`dist_gzip/${filename}`);

  input.pipe(compress).pipe(output);
}


fs.readdir('dist', (e, files) => { /* eslint-disable-line no-console */
  if (e) {
    return console.error(e); // eslint-disable-line no-console
  }
  return files.forEach(compressFile);
});

