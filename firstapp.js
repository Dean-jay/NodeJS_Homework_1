const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(__filename);

const dir = 'test';
////////////////////////////////////////
// 폴더 만들기
fs.mkdir(path.join(__dirname, 'test/video'), (err) => {
  if (err) {
    return console.error(err);
  }
});
fs.mkdir(path.join(__dirname, 'test/captured'), (err) => {
  if (err) {
    return console.error(err);
  }
});
fs.mkdir(path.join(__dirname, 'test/duplicated'), (err) => {
  if (err) {
    return console.error(err);
  }
});

//////////////////////////////////////////
// 어떤 파일이 있는지 확인
fs.readdir(dir, (err, files) => {
  if (err) console.log(err);
  else {
    console.log('Filenames with the .txt extension:');
    files.forEach((file) => {
      if (path.extname(file) == '.mov' || path.extname(file) == '.mp4') {
        console.log(file);
        //video move
        fs.copyFile('./test/' + file, './test/video/' + file, (err) => {
          if (err) {
            return console.error(err);
          }
        });
        //old video delete
        fs.rm('./test/' + file, (err) => {
          if (err) {
            return console.error(err);
          }
        });
      } else if (path.extname(file) == '.png' || path.extname(file) == '.aae') {
        // captured move
        fs.copyFile('./test/' + file, './test/captured/' + file, (err) => {
          if (err) {
            return console.error(err);
          }
        });
        //old video delete
        fs.rm('./test/' + file, (err) => {
          if (err) {
            return console.error(err);
          }
        });
      } else if (path.extname(file) == '.jpg' && file.includes('_E')) {
        // duplicated move
        fs.copyFile('./test/' + file, './test/duplicated/' + file, (err) => {
          if (err) {
            return console.error(err);
          }
        });
        //duplicated delete
        fs.rm('./test/' + file, (err) => {
          if (err) {
            return console.error(err);
          }
        });
      }
    });
  }
});
