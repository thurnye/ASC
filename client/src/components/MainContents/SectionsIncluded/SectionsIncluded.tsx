import React, { FC, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './SectionsIncluded.module.scss';
import CardWrapper from '../../../layout/cardWrapper/cardWrapper';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import Box from '@mui/material/Box';
import ListContainer from '../../ListContainer/ListContainer';
import {ListItemsProps, DocumentRootState} from '../../../utils/interfaces'
import ASCButton from '../../ASCButton/ASCButton';
import SelectDropDown from '../../Forms/SelectDropDown/SelectDropDown';
import { useSnackbar } from 'notistack';
import {documentsActions} from '../../../store/documentSlice';

interface SectionsIncludedProps {}


const SectionsIncluded: FC<SectionsIncludedProps> = () =>{
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  const documents = useSelector((state: DocumentRootState) => state.documentData.documents);
  const [selectedSections, setSelectedSections] = useState<ListItemsProps[] | undefined>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const [reset, setReset] = useState<boolean>(false);

  const handleReset = () => {
    setReset(!reset);
    setSelectedSections([])
    dispatch(documentsActions.getResetDocument())
  };

  useEffect(() => {
    //if section selection changes, update redux for the templates
    const find = selectedSections?.find((sect) => sect.id === selectedId)
    if(find){
      enqueueSnackbar(`Document ${find?.label} added successfully!`, { variant:'success' });
      dispatch(documentsActions.getSingleDocument({
        data: find
      }));
    }else{
      dispatch(documentsActions.getResetDocument())
    }
  },[selectedId]);
  

  return(
  <div className={styles.SectionsIncluded}>
    <CardWrapper>
      <Box>
        <HeaderTitle title={'Sections Included'} />
        <Box sx={{mt: 2}}>
          <ListContainer 
            listItems={documents}
            getSelectedValues={(items) => setSelectedSections(items)}
            border={true}
            reset={reset}
          />
        </Box>
      </Box>
    </CardWrapper>

    <CardWrapper >
      <Box sx={{
        width: 'inherit',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
      }}>
        <HeaderTitle title={'Section Selected:'}/>
        <ASCButton
          fullWidth={false}
          variant="contained" 
          label={"Reset"} 
          backgroundColor={'#375EA2'}
          hoverBackgroundColor={'#375EA2'}
          onClick={handleReset}
          height={'initial'}
          width={'initial'}
      />
      </Box>
      <SelectDropDown menuItems={selectedSections} getSelectedId={setSelectedId}/>
    </CardWrapper>
  </div>
)};

export default SectionsIncluded;
