import React, {useState} from 'react'
import './AdminContent.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { DeleteTable } from '../../components_File/components';

function AdminContent() {

  const [selectedFiles, setSelectedFiles] = useState([]);
  

      const handleFileChange = (e) => {
        const filesArray = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ...filesArray]);
      };

      const handleRemoveFile = (index) => {
        const updatedFiles = [...selectedFiles]; 
        updatedFiles.splice(index, 1); 
        setSelectedFiles(updatedFiles);
      };

      const handleSubmit = () => {
      
      };

  return (
        <div className='Dashboard d-flex justify-content-center align-items-center'>
         <div className="Upload-box d-flex flex-column justify-content-center align-items-center gap-2 text-center w-75">
          
          <div className='d-flex gap-2'>
          <div>
          
              
              <label className='Upload-button'> <AiOutlinePlus />
              
              
              <input type="file" onChange={handleFileChange} className="hidden-file-input" multiple /></label>
              
            </div>
          <div className='Upload-heading'>Upload Document - drag and drop</div>
          </div>
          
          <div className='Upload-description'>We accept <b>.pdf, .ppt, .rtf, .doc, .docx</b> and <a href='*'>more</a></div>
          <div className='Upload-description'>Or add files from:</div>
        <div className={selectedFiles.length === 0 ? null : 'Upload-Display-Box shadow bg-body-tertiary rounded col-8'}>
        {selectedFiles.map((file, index)=>(
          <DeleteTable
          name={file.name}
          deleteIcon={<div className='Upload-Delete'><MdDelete onClick={() => handleRemoveFile(index)}/></div>}
          />
        ))}
        </div>
        {
          selectedFiles.length === 0 ? null :
         <button className='confirm_button hover:bg-green-500 hover:text-white mt-3' onClick={handleSubmit}>Submit</button> 
      
        }
        
        </div>
        </div>
  )
}

export default AdminContent
