const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const getObject = (bucket, key) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: bucket, 
            Key: key
        };
        s3.getObject(params, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        }); 
    });
};
const putObject = (body, bucket, key) => {
    return new Promise((resolve, reject) => {
        const params = {
            Body: body, 
            Bucket: bucket, 
            Key: key
        };
        s3.putObject(params, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        }); 
    });
};

module.exports = {
    putObject,
    getObject
};