const gm = require("gm").subClass({ imageMagick : true });
const s3 = require("./controllers/s3");

s3.getObject(process.env.S3_BUCKET_NAME, "god.jpg")
    .then((data) => {
        gm(data.Body)
        .resize(200, 200)
        .toBuffer("png", (err, data) => {
            if(err) {
                console.log("error : ", err);
            } else {
                s3.putObject(data, process.env.S3_BUCKET_NAME, "god-resize.png");
            }
        });
    })
    .catch((err) => {
        console.log("Error => " , err);
    });