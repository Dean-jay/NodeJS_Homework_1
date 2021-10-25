const path = require('path');
const os = require('os');
const fs = require('fs');

console.log(process.argv);
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Pictures', folder);
console.log(workingDir);
if (!folder || !fs.existsSync(workingDir)) {
  console.error('Please enter folder name in Pictures');
  return;
}

console.log(workingDir);

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises.readdir(workingDir).then(processFiles).catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    } else {
      console.log(file);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match; // true or false
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }
  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
  // return true;
}

function move(file, targetDir) {
  // fs.rename(workingDir + '/' + file, targetDir + '/' + file, (error) => {
  //   console.error;
  // });
  // promises를 사용하면 장점이 무엇일까?
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPass = path.join(workingDir, file);
  const newPass = path.join(targetDir, file);
  fs.promises.rename(oldPass, newPass).catch(console.error);
}
