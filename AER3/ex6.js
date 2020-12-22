const fs = require('fs');
fs.appendFile("text.txt", 'Frase nova!    ',function(err){
if(err) throw err;
console.log('Frase Escrita!')
});
fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});