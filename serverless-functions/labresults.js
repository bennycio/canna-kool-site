const AWS = require("aws-sdk");

exports.handler = async function (event, context) {
  console.log("here");
  AWS.config.update({ region: "us-east-1" });
  const s3 = new AWS.S3({
    accessKeyId: process.env.IAM_ID,
    secretAccessKey: process.env.IAM_ACCESS_KEY,
    s3ForcePathStyle: true,
    region: "us-east-1",
    apiVersion: "2006-03-01",
  });
  const params = {
    Bucket: "canna-kool-lab-results",
  };

  let s3Objects;

  try {
    s3Objects = await s3.listObjectsV2(params).promise();
    console.log(s3Objects);
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      s3Objects || { message: "no objects found in s3 bucket" }
    ),
  };
};
