import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        name: "URL",
        message: "Enter the URL:",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    try {
    var qr_png = qr.image(url, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    console.log("Your QR is Ready!");
    } catch (error) {
        console.error("Error generating QR code:", error);
      }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  });