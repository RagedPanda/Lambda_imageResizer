const gm = require("gm").subClass({ imageMagick : true });
const fs = require("fs");

gm("god-ganesh-images.jpg")
    .resize(200, 200)
    .toBuffer("png", (err, buffer) => {
        if(err) {
            console.log("error : ", err);
        } else {
            fs.writeFile('./resizedFile.png', buffer, () => {
                console.log("Complete!");
            });
        }
    });