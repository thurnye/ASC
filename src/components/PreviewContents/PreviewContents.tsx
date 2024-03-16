import React, { FC, useState } from 'react';
import styles from './PreviewContents.module.scss';
import ASCButton from '../ASCButton/ASCButton'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextEditor from '../TextEditor/TextEditor'
import CardWrapper from '../../layout/cardWrapper/cardWrapper';
interface PreviewContentsProps {}

const PreviewContents: FC<PreviewContentsProps> = () => {
  const [editorContents, setEditorContents] = useState()
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
      <TextEditor getContents={setEditorContents}/>
    </Box>
  </div>
)};

export default PreviewContents;
