import React, { FC, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import styles from './PreviewContents.module.scss';
import ASCButton from '../ASCButton/ASCButton'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextEditor from '../TextEditor/TextEditor'
import { DocumentRootState } from '../../utils/interfaces';


interface PreviewContentsProps {}

const PreviewContents: FC<PreviewContentsProps> = () => {
  const document = useSelector((state: DocumentRootState) => state.documentData.singleDocument);
  const [editorContents, setEditorContents] = useState<string | undefined>();

  useEffect(() => {
    console.log(document)
    if(document){
      setEditorContents(document.value)
    }else{
      setEditorContents('')
    }
  },[document]);

  const handleSave = () => {
    console.log(editorContents); 
  };


  return (
  <div className={styles.PreviewContents}>
    <Stack spacing={2} direction="row">
      <ASCButton
        fullWidth={false}
        variant="contained" 
        label={"Generate"} 
        backgroundColor={'#375EA2'}
        hoverBackgroundColor={'#375EA2'}
        onClick={() => ''}
        height={'initial'}
        width={'initial'}
      />
      <ASCButton
        fullWidth={false}
        variant="contained" 
        label={'Technical'} 
        backgroundColor={'#375EA2'}
        hoverBackgroundColor={'#375EA2'}
        onClick={() => ''}
        height={'initial'}
        width={'initial'}
      />
    </Stack>

    <Box sx={{mt: 3, height: '75vh'}}>
      <TextEditor getContents={setEditorContents} defaultValue={editorContents}/>
    </Box>
    <Box sx={{mt: 3, width: '100%', textAlign: 'end'}}>
        <ASCButton
          fullWidth={false}
          variant="contained" 
          label={"Save"} 
          backgroundColor={'#375EA2'}
          hoverBackgroundColor={'#375EA2'}
          onClick={handleSave}
          height={'initial'}
          width={'initial'}
        />

      </Box>
  </div>
)};

export default PreviewContents;
