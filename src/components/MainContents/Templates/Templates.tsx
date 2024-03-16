import React, { FC, useState } from 'react';
import styles from './Templates.module.scss';
import CardWrapper from '../../../layout/cardWrapper/cardWrapper';
import ListContainer from '../../ListContainer/ListContainer';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {ListItemsProps} from '../../../utils/interfaces';
import {getRandomInt} from '../../../utils/commons';
import AscDialog from '../../ASCDialog/ASCDialog';
import InputForm from '../../Forms/InputForm/InputForm';
import Typography from '@mui/material/Typography';
import TextEditor from '../../TextEditor/TextEditor';


interface TemplatesProps {}


const sections: ListItemsProps[] = [
  { id: getRandomInt(), label: '23 05 13 - Electric Motor for HVAC...', value: '23 05 13 - Electric Motor for HVAC...' },
  { id: getRandomInt(), label: '23 05 14 - Variable Frequency Drives for...', value: '23 05 14 - Variable Frequency Drives for...' },
  { id: getRandomInt(), label: '23 05 16 - Expansion Fittings and Loops for...', value: '23 05 16 - Expansion Fittings and Loops for...' },
  { id: getRandomInt(), label: '23 05 19 - Meters, Gauges and...', value: '23 05 19 - Meters, Gauges and...' },
  { id: getRandomInt(), label: '23 05 23 - General-Duty Valves for HVAC...', value: '23 05 23 - General-Duty Valves for HVAC...' },

];

const Templates: FC<TemplatesProps> = () => {
  const [selectedSections, setSelectedSections] = React.useState<ListItemsProps[] | undefined>();
  const [selectedId, setSelectedId] = React.useState< number | undefined>();
  const [open, setOpen] = React.useState(false);
  const [editorContents, setEditorContents] = useState('')
  

  return(
  <div className={styles.Templates}>
    <CardWrapper>
    <Box sx={{
        width: 'inherit',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
      }}>
        <HeaderTitle title={'Templates:'}/>
        <IconButton edge="end" aria-label="comments" onClick={() => setOpen(!open)}>
          <AddIcon sx={{color:'#375EA2', fontWeight: 700}} />
        </IconButton>
      </Box>
      <Box sx={{
        height: 150,
        maxHeight: 450,
        overflow: 'auto',
        border:  '1px solid #ccce'
      }}>
       <ListContainer 
          listItems={sections}
          getSelectedValues={(items) => setSelectedSections(items)}
          getSelectId={(id) => setSelectedId(id)}
          border={true}
          icons={['edit', 'delete']}
          size={12}
        />
    </Box>
    <AscDialog open={open} setOpen={setOpen}>
      <InputForm 
        label={'Please enter the template Name you want to add:'}
        placeholder={'Enter Your Template Name'}
      />
      <Box sx={{mt: 2, height: '75vh'}}>
        <Typography variant="body1" gutterBottom sx={{fontWeight: 700}}>Enter the template Text</Typography>
        <Box sx={{mt: 2, height: '60vh'}}>
        <TextEditor getContents={setEditorContents}/>
      </Box>
    </Box>
    </AscDialog>
    </CardWrapper>
  </div>
)};

export default Templates;
