const fs = require('fs');

fs.readFile("ex4.txt", "utf-8", (err, data) => {
  console.log("Arquivo esta sendo lido!")
  console.log("Conteúdo do arquivo:")	
  console.log(data);
});