import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const timestamp = Date.now(); // Generate a unique timestamp

    const qrFilename = `qr_${timestamp}.png`; // Unique filename
    const textFilename = `URL_${timestamp}.txt`; // Unique text file

    var qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream(qrFilename));

    fs.writeFile(textFilename, url, (err) => {
      if (err) throw err;
      console.log(`QR code saved as ${qrFilename}`);
      console.log(`URL saved as ${textFilename}`);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something went wrong", error);
    }
  });
