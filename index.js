import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: 'URL',
      message: 'Enter the link : '
    },
  ])
  .then(answers => {
    const url = answers.URL;
    const qr_image = qr.image(url, { type: "png" });
    qr_image.pipe(fs.createWriteStream("qr_code.png"));
  });