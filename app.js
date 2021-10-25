/**
 * 0. folder 만들어 줌 : 파일이 있다는 것을 읽어야함
 * 0-1.
 * 1. 파일 읽어서 경로 새로 넣어줌 : rename
 * 2. 이전 파일 삭제
 */
const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(__filename);

const dir = 'test';

////////////////////////////////////////
// 폴더 만들기 : 비동기로 만들어서 그런지 조건이 안 먹힌다...

// fs.mkdir(path.join(__dirname, 'test/video'), (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });
// fs.mkdir(path.join(__dirname, 'test/captured'), (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });
// fs.mkdir(path.join(__dirname, 'test/duplicated'), (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });
//////////////////////////////////////////
// 어떤 파일이 있는지 확인
// 파일 확인 후 전송

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
//////////////////////////////
// copy

// fs.copyFile('./file.txt', './file2.txt', (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });

// readStream 을 이용한 copy : 아직 구현 안됨.

// function copy(oldPath, newPath) {
// var readStream = fs.createReadStream(oldPath);
// var writeStream = fs.createWriteStream(newPath);

// readStream.on('error', callback);
// writeStream.on('error', callback);

//   readStream.on('close', function () {
//     fs.unlink(oldPath, callback);
//   });

//   readStream.pipe(writeStream);
// }

// function videoFileMove(files) {
// }
// function capturedFileMove() {}
// function duplicatedFileMove() {}
// function move(oldPath, newPath) {}

//////////////////////////////////////////
// 파일 서칭

// 전체 파일 : string
// fs.readdir(dir, (err, files) => {
//   if (err) console.log(err);
//   else {
//     console.log('\nCurrent directory filenames:');
//     files.forEach((file) => {
//       console.log(file);
//     });
//   }
// });

// 전체 파일 : Object
// fs.readdir(dir, { withFileTypes: true }, (err, files) => {
//   console.log('\nCurrent directory files:');
//   if (err) console.log(err);
//   else {
//     files.forEach((file) => {
//       console.log(file);
//     });
//   }
// });
