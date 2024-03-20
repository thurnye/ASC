import React, { FC, useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import ASCButton from '../ASCButton/ASCButton';
import AscDialog from '../ASCDialog/ASCDialog';
import { Box, Typography } from '@mui/material';
import InputForm from '../Forms/InputForm/InputForm';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {useSelector} from 'react-redux';
import DocumentListTable from './DocumentListTable'
import { useAPIFetchesContextHook } from '../../utils/useAPIFetchesContexHook';
import { DocumentRootState } from '../../utils/interfaces';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  let navigate = useNavigate();
  const {saveDocument, getAllDocument } = useAPIFetchesContextHook();
  const documents = useSelector((state: DocumentRootState) => state.documentData.documents);
  const [selectedDoc, setSelectedDoc] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [refresh, setRefresh] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isError, setIsError] = React.useState<{open: boolean, message: string}>({
    open: false,
    message: ''
  });
  
  const handleSave = async () => {
    if(name){
      const res =  await saveDocument('65f633ae1b52c683725a9eca', name);
    
      if(res.status === 500){
        setIsError({
          open: true,
          message: res.message
        });
        return;
      }
      setOpen(false);
      setName('');
    }
  };

  useEffect(() => {
    if(selectedDoc){
      navigate('/document', { state: { id:  selectedDoc} })
    }
  }, [selectedDoc])


  useEffect(() => {
    (async function fetchData() {
      const res =  await getAllDocument('65f633ae1b52c683725a9eca');
      if(res.status === 500){
        setIsError({
          open: true,
          message: res.message
        });
        return;
      }
    })();
  },[refresh])



  return(
  <div className={styles.Dashboard}>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 14vh)'
    }}>
      <Box sx={{textAlign: 'end'}}>
        <ASCButton
          fullWidth={false}
          variant="contained" 
          label={"Create New Document"} 
          backgroundColor={'#375EA2'}
          hoverBackgroundColor={'#375EA2'}
          onClick={() => setOpen(true)}
          height={'initial'}
          width={'initial'}
        />
      </Box>

      <Box sx={{
        mt: 10, 
        flexGrow: 1, 
        display: 'flex',
        alignItems: 'center'
      }}>
        <Box sx={{width: '100%'}}>
          <Box sx={{textAlign: 'end'}}>
          </Box>
          <DocumentListTable data={documents} setSelectedDoc={setSelectedDoc}  refresh={refresh} setRefresh={setRefresh}/>
        </Box>
      </Box>

    </Box>

    <AscDialog open={open} setOpen={setOpen} onSave={handleSave} size={'xs'} saveText='Save'>
      <Box>
        <InputForm 
          label={'Enter Job Name'}
          placeholder={'Enter Your Job Name'}
          getValue={setName}
          value={name}
        />
      </Box>
    </AscDialog>  

    <AscDialog 
      open={isError.open} setOpen={() => setIsError((prev) => ({...prev, open: false, message: ''}))} 
      onSave={() => setIsError((prev) => ({...prev, open: false, message: ''}))} 
      size={'xs'} 
      saveText='OK'
      showSave={false}
    >
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center',}}>
        <Typography variant="h6" gutterBottom color="error" sx={{mt: 2}}>
            Error
        </Typography>
        <Typography variant="button" display="block" gutterBottom sx={{transform: 'none', display: 'flex',justifyContent:'center', alignItems:'center', height: 50, width: 50, borderRadius: '50%', backgroundColor:'#f8f7fa', my: 2}}>
                <ReportProblemIcon color={'error'}/>
        </Typography>
        <Typography variant="body2" gutterBottom >
          {isError.message}
        </Typography>
      </Box>
    </AscDialog>
  </div>
)};

export default Dashboard;
