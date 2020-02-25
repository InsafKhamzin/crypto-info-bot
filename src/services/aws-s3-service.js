const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET
});

const s3 = new AWS.S3();

module.exports.readS3 = async () =>{
    console.log('S3: read file');

    let params = {
        Bucket: 'crypto-info-bot',
        Key: 'data.json'
    };

    return await new Promise((resolve, reject)=>{
        s3.getObject(params, (error, data)=>{
            if(error){
                console.log('S3 error:', error.stack)
                reject();
            }else{
                resolve(JSON.parse(data.Body.toString()));
            }
        });
    });
}

module.exports.writeS3 = async (input) =>{
    console.log('S3: write file');

    let dataBuff = Buffer.from(JSON.stringify(input, null, 4));

    let params = {
        Bucket: 'crypto-info-bot',
        Key: 'data.json',
        Body: dataBuff
    };

    return await new Promise((resolve, reject)=>{
        s3.upload(params, (error, data)=>{
            if(error){
                console.log('S3 write error:', error.stack)
                reject();
            }else{
                resolve(data);
            }
        });
    });
}