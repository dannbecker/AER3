// Cria-se o objeto
let ts = Date.now();
let date_obj = new Date(ts);

// Pega os valores de data
let date = date_obj.getDate();
let month = date_obj.getMonth() + 1;
let year = date_obj.getFullYear();

//Pega os valores de horário
let hours = date_obj.getHours();
let minutes = date_obj.getMinutes();
let seconds = date_obj.getSeconds();

//Imprime na tela a data e horário
console.log("Data: " + date + "-" + month + "-" + year);
console.log("Horário: " + hours + ":" + minutes + ":" + seconds);