const S3Client = require("@aws-sdk/client-s3").S3Client;

exports.handler = async function (event, context) {
  // Set the AWS Region
  const REGION = "us-east-1"; //e.g. "us-east-1"

  // Create the parameters for the bucket
  const bucketParams = {
    Bucket: "canna-kool-lab-results",
  };

  // Create S3 service object
  const s3 = new S3Client({
    region: REGION,
  });

  async function run() {
    // Declare truncated as a flag that we will base our while loop on
    let truncated = true;
    // Declare a variable that we will assign the key of the last element in the response to
    let pageMarker;
    // While loop that runs until response.truncated is false
    while (truncated) {
      try {
        const response = await s3.send(new ListObjectsCommand(bucketParams));
        response.Contents.forEach((item) => {
          console.log(item.Key);
        });
        // Log the Key of every item in the response to standard output
        truncated = response.IsTruncated;
        // If 'truncated' is true, assign the key of the final element in the response to our variable 'pageMarker'
        if (truncated) {
          pageMarker = response.Contents.slice(-1)[0].Key;
          // Assign value of pageMarker to bucketParams so that the next iteration will start from the new pageMarker.
          bucketParams.Marker = pageMarker;
        }
        // At end of the list, response.truncated is false and our function exits the while loop.
      } catch (err) {
        console.log("Error", err);
        truncated = false;
      }
    }
  }
  return response.Contents;
};
