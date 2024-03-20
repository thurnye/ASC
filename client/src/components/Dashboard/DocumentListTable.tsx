import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, 
  GridColDef, 
  GridRowSelectionModel,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { IDocumentRootState } from '../../utils/interfaces';
import ASCButton from '../ASCButton/ASCButton';


interface IRows {
  id: string,
  jobName: string, 
  createdAt: string, 
}

const columns: GridColDef[] = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'jobName',
    headerName: 'Job Name',
    width: 250,
    editable: false,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 250,
    editable: false,
  },
  
];


const getRows = (data: IDocumentRootState[]) => {
  const rows:IRows[] = [];
  data.forEach((row: IDocumentRootState) => {
    const {name, _id, createdAt} = row;
    rows.push({
      id: _id,
      jobName: name,
      createdAt
    })
  })
   return rows;
}




export default function DocumentListTable({setSelectedDoc, data, refresh, setRefresh}) {
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({id: false});
  const [rows, setRows] = useState<IRows[]>([])


  useEffect(() => {
    if(data?.length > 0){
      const rowData = getRows(data);
      setRows(getRows(data))
    }
  },[data]);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <Box sx={{ flexGrow: 1 }} />
        <Box>
           <ASCButton
              fullWidth={false}
              variant="text" 
              label={"Refresh"} 
              backgroundColor={'#fffff'}
              hoverBackgroundColor={'#ffff'}
              onClick={() => setRefresh(!refresh)}
              height={'initial'}
              width={'initial'}
              sx={{color: '#375EA2'}}
            />
           <ASCButton
              fullWidth={false}
              variant="text" 
              label={"Edit"} 
              backgroundColor={'#fffff'}
              hoverBackgroundColor={'#ffff'}
              onClick={() => setSelectedDoc && setSelectedDoc(rowSelectionModel[0])}
              height={'initial'}
              width={'initial'}
              sx={{color: '#375EA2'}}
              disabled={rowSelectionModel.length !== 1 ? true : false}
            />

        </Box>
      </GridToolbarContainer>
    );
  }
  

  return (
    <Box sx={{ height: 500, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) =>{
          setColumnVisibilityModel({...newModel, id: false})
        }}
        slots={{ toolbar: CustomToolbar }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        onRowSelectionModelChange={(newRowSelectionModel: GridRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
