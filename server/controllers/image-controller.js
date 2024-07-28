
import File from '../models/file.js';

 export const uploadImage = async (req, res) => {
    console.log(req.file);
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    };

    try {
        const file = await File.create(fileObj);
        res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
        file.downloadCount++;
        await file.save();

        res.download(file.path , file.name);
    } catch (error) {
        console.log("Error uploading file ", error);
        res.status(500).json({ error: error.message });
    }
};

//export default uploadImage;

 export const getImage = async(req, res) => {
    try{
       const file = await File.findById(req.params.fileId);
       file.downloadCount++;
       await file.save();

       res.download(file.path , file.name);
    } catch(error){
        console.log("Error in getting Image " , error);
        res.status(500).json({error: error.message});
    }
};

//export default getImage;