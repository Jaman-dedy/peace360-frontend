import axios from 'axios'

const CLOUDINARY_URL ="https://api.cloudinary.com/v1_1/dvx8vwgk6/image/upload"
const CLOUDINARY_UPLOAD_PRESET="ovbdi5lz"

export const uploadImgCloudinary = (imgFIle)=> {


    const formData = new FormData();
    formData.append('file', imgFIle);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        data: formData
    }).then(function(res){

     
        return  res.data.secure_url

    }).catch(function(err){
        throw err
    })


}