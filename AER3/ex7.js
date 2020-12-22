const fs = require('fs');

const path = './text.txt';
const folder = './AER3/';

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }

  //file removed
  console.log("Arquivo removido!");
})

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});