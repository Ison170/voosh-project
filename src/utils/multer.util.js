import multer from 'multer';

const uploadImage = multer({ 
    storage: multer.memoryStorage(), 
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

export default uploadImage;
