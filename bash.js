// console.log(Object.keys(process));

//------------------------------------------------------------

// //TAREA 2:
// // Output un prompt
// process.stdout.write("prompt > ");
// // El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on("data", function (data) {
//   var cmd = data.toString().trim(); // remueve la nueva línea
//   process.stdout.write("You typed: " + cmd);
//   process.stdout.write("\nprompt > ");
// })

//------------------------------------------------------------

const commands = require("./commands/index.js");

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", (data) => {
  const command = data.toString().split(" ")[0];
  const cmd =  command === "echo"
      ? "echo"
      : command === "curl"
      ? "curl"
      : data.toString().trim();
  const param = data.toString().slice(5);
  switch (cmd) {
    case "date":
    case "pwd":
    case "ls":
    case "echo":
    case "curl":
      commands[cmd](param);
      break;
    default:
      process.stdout.write("\nprompt > ");
      break;
  }
});
