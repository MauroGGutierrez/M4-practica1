var fs = require("fs");

const pwd = () => {
  process.stdout.write(process.cwd());
};

const date = () => {
  process.stdout.write(Date());
};

const ls = () => {
  fs.readdir(".", (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      process.stdout.write(file.toString() + "\n"); //"\n" significa un salto de linea
    });
    process.stdout.write("prompt > ");
  });
};


module.exports = {
  pwd,
  date,
  ls,
};
