import {useRef , useState , useEffect} from 'react'
import './App.css'
import {uploadFile} from './service/api.js';
function App() {
  
  const [file , setFile] = useState(' ');
  const[result , setResult] = useState(' ');
  console.log(file);
  
  useEffect(() => {
  const getImage = async() =>{
    if(file && file.name) {
  const data = new FormData();
  data.append("name" , file.name);
  data.append("file" , file);

  const response = await uploadFile(data);
  setResult(response.path);
    }
  };
  getImage();
  } ,[file]);
  const fileInputRef = useRef();
  
  const onUploadClick = () => {
  fileInputRef.current.click();
  };

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  return (
    <>
    <div className="main-wrapper" style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
      <div className="container">
       <div className="wrapper">
        <h1>Chhotu File Sharing App!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input type= "file" ref = {fileInputRef} style = {{display: "none"}} onChange={(e) => setFile(e.target.files[0])} />

        <a href = {result} >{result}</a>
        </div> 
      </div>
    </div>
    </>
  )
}

export default App
