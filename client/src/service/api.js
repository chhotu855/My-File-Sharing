import axios from 'axios';
const BACKEND_API_URL = 'http://localhost:8000';

// headers: {
//     'content-type': 'multipart/form-data'
// }

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_API_URL}/upload`, data ,{headers: {
            'content-type': 'multipart/form-data'
        }});
        return response.data;
    } catch (error) {
        console.log("Error while calling the uploadFile method: " + error);
    }
};