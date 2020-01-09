import fs from 'fs';
import path from 'path';

export const getFilesOfType = (dir, filelist, fileExtension = '') => {
  const cwd = process.cwd();
  const POSTS_DIR = path.join(cwd, dir);

  const files = fs.readdirSync(POSTS_DIR);
  filelist = filelist || [];
  files
    .filter(file =>
      fileExtension ? path.extname(file) === fileExtension : true,
    )
    .forEach(function(file) {
      if (fs.statSync(POSTS_DIR + file).isDirectory()) {
        filelist = getFilesOfType(dir + file + '/', filelist, fileExtension);
      } else {
        filelist.push(dir + file);
      }
    });
  return filelist
    .map(path => {
      try {
        const content = fs.readFileSync(cwd + path, 'utf8');
        return { path, content };
      } catch (err) {
        console.warn(err);
        return null;
      }
    })
    .filter(fileContent => !!fileContent);
};
