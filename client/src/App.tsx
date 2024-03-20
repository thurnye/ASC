import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Main from './pages/main/main';
import { styled } from '@mui/material/styles';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import DashboardContainer from './pages/DashboardContainer/DashboardContainer';
import AppContainer from './pages/AppContainer/AppContainer';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#EDF7ED',
    color: '#284E2A',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#FDEDED',
    color: '#5F2120',
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#FFF4E5',
    color: '#663D00',
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: '#E5F6FD',
    color: '#014361',
  },
}));

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
      }}
    >
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppContainer />}>
              <Route path='dashboard' element={<DashboardContainer />} />
              <Route path='document' element={<Main />} />
              <Route index element={<Navigate to='dashboard' />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  );
}

export default App;
