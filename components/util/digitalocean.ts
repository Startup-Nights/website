import { S3 } from "@aws-sdk/client-s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: "https://fra1.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_SPACES_KEY,
        secretAccessKey: process.env.SPACES_SECRET_KEY
    }
});

// Uploads the specified file to the chosen path.
export const uploadFile = async (name: string, data: any, filename: string) => {
    // Specifies a path within your bucket and the file to upload.
    const bucketParams = {
        Bucket: process.env.NEXT_PUBLIC_SPACES_NAME,
        Key: '2023/booth/' + name + filename,
        Body: data,
    };

    try {
        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        console.log(
            "Successfully uploaded object: " +
            bucketParams.Bucket +
            "/" +
            bucketParams.Key
        );
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};