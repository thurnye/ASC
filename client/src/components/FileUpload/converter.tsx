import React, { FC, useState } from 'react';
import styles from './FileUpload.module.scss';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextEditor from '../TextEditor/TextEditor';
import services from '../../utils/services';
interface FileUploadProps {}

const url  = `http://localhost:8000/upload`

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Converter: FC<FileUploadProps> = () => {


  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (file) {
        try {
          const fileName = file.name
          const formData = new FormData();
          formData.append("pdf", file);
          formData.append("fileName", fileName);
          console.log(formData.get('pdf'))
          // const result = await services.uploadDocument(formData);
          const result = await fetch(url, {
            method: 'post',
            body: formData
          })
          console.log(result)
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.error('Error handling file change:', error);
    }
  };

  return (
    <div className={styles.FileUpload}>
      <Box sx={{ m: 5 }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" onChange={handleFileChange}  />
        </Button>
      </Box>
      <Box sx={{ mt: 3, height: '75vh' }}>
        {/* <TextEditor getContents={setWordContent} defaultValue={wordContent}/> */}
      </Box>
    </div>
  );
};

export default Converter;
