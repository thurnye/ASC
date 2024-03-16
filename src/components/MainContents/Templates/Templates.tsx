import React, { FC, useState, useEffect } from 'react';
import styles from './Templates.module.scss';
import CardWrapper from '../../../layout/cardWrapper/cardWrapper';
import ListContainer from '../../ListContainer/ListContainer';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {ListItemsProps, selectedListItem} from '../../../utils/interfaces';
import {getRandomInt} from '../../../utils/commons';
import AscDialog from '../../ASCDialog/ASCDialog';
import InputForm from '../../Forms/InputForm/InputForm';
import Typography from '@mui/material/Typography';
import TextEditor from '../../TextEditor/TextEditor';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface TemplatesProps {}




const Templates: FC<TemplatesProps> = () => {
  const [selectedSections, setSelectedSections] = React.useState<ListItemsProps[] | undefined>();
  const [selected, setSelected] = React.useState< selectedListItem | undefined>();
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [editorContents, setEditorContents] = useState('');
  const [templateName, setTemplateName] = useState<string>('')
  const [sectionTemplates, setSectionTemplates] = useState<ListItemsProps[]>([
    {
        "id": 327910318174,
        "label": "test",
        "value": "<p>test template</p>"
    },
    {
        "id": 123456789,
        "label": "example",
        "value": "<p>example template</p>"
    }
])

  const handleSave = () => {
    if(selected?.id ){
      //update
      const templateIndex = sectionTemplates.findIndex(item => item.id === selected.id);
      if (templateIndex !== -1) {
        sectionTemplates[templateIndex] = {
          ...sectionTemplates[templateIndex],
          label: templateName,
          value: editorContents
      };
      }
    }
    if(selected?.id === undefined){
      //create new
      setSectionTemplates((prev) => [...prev, {
        id: getRandomInt(),
        label: templateName,
        value: editorContents
      }])
    }
    setOpen(!open) 
    setTemplateName('')
    setEditorContents('')
    setSelected(undefined)
  };
  

  const handleEdit = (id:number) => {
   const templateIndex = sectionTemplates.findIndex(item => item.id === id);
    if (templateIndex !== -1) {
      setOpen(!open)
      setTemplateName(sectionTemplates[templateIndex].label);
      setEditorContents(sectionTemplates[templateIndex].value);
    }
  };
  
  const handleDeleteSave = () => {
    if(selected?.id && selected?.type === 'delete'){
      setSectionTemplates(sectionTemplates.filter(item => item.id !== selected.id));
      setOpenDelete(!openDelete);
      setSelected(undefined);
      setTemplateName('')
    }
  };

  useEffect(() => {
    switch (selected?.type) {
      case 'edit':
        selected?.id && handleEdit(selected.id)
        break;
      case 'delete':
        if (selected?.id){
          const templateIndex = sectionTemplates.findIndex(item => item.id === selected.id);
          if (templateIndex !== -1) {
            setTemplateName(sectionTemplates[templateIndex].label);
          }
          setOpenDelete(!openDelete);
         };
        break;
      default:
        break;
    }
  },[selected, sectionTemplates])
  

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
          listItems={sectionTemplates}
          getSelectedValues={(items) => setSelectedSections(items)}
          getSelectId={(val:selectedListItem | undefined) => setSelected(val)}
          border={true}
          icons={['edit', 'delete']}
          size={12}
        />
    </Box>
    <AscDialog open={open} setOpen={setOpen} onSave={handleSave}>
      <InputForm 
        label={'Please enter the template Name you want to add:'}
        placeholder={'Enter Your Template Name'}
        getValue={setTemplateName}
        value={templateName}
      />
      <Box sx={{mt: 2, height: '75vh'}}>
        <Typography variant="body1" gutterBottom sx={{fontWeight: 700}}>Enter the template Text</Typography>
        <Box sx={{mt: 2, height: '60vh'}}>
          <TextEditor getContents={setEditorContents} defaultValue={editorContents}/>
        </Box>
      </Box>
    </AscDialog>

    {/* Delete Dialog */}
    <AscDialog open={openDelete} setOpen={setOpenDelete} onSave={handleDeleteSave} size={'xs'} saveText='Confirm' saveColor={'error'}>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center',}}>
        <Typography variant="button" display="block" gutterBottom sx={{transform: 'none', display: 'flex',justifyContent:'center', alignItems:'center', height: 50, width: 50, borderRadius: '50%', backgroundColor:'#f8f7fa'}}>
                <DeleteOutlinedIcon/>
        </Typography>
        <Typography variant="h6" gutterBottom color="error">
            Delete
        </Typography>
        <Typography variant="caption" gutterBottom>
        You are about to delete <b>{templateName.toUpperCase()}</b>, press <i>confirm</i> to continue
        </Typography>
      </Box>
    </AscDialog>
    </CardWrapper>
  </div>
)};

export default Templates;
