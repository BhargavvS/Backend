import {v2 as cloudinary} from "cloudinary"
import fs from"fs"

cloudinary.config({
Cloud_name	: process.env.CLOUDINARY_CLOUD_NAME,
api_key	 : process.env.CLOUDINARY_API_KEY,
api_secret	: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary  = async (localFilePath) => {

    try {
        if(!localFilePath) return null

        // upload the file on tyhe cloudinary
       const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type: "auto"
        })

        // after uploading delink the file
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response


        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null 
    }


}

export {uploadOnCloudinary}