import React, { FC } from 'react';
import styles from './ASCDialog.module.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {  Breakpoint } from '@mui/system';

interface AscDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  onSave?: () => void;
  size?: Breakpoint;
  saveText?: string;
  saveColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const AscDialog: FC<AscDialogProps> = (props: AscDialogProps ) => {
  const {open, setOpen, children, onSave, size, saveText, saveColor} = props;


  return(
  <div className={styles.AscDialog}>
      <Dialog
        fullWidth={true}
        maxWidth={size ? size : 'md'}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)} sx={{textTransform: 'none'}}>Cancel</Button>
          <Button onClick={ onSave && onSave} sx={{textTransform: 'none'}} color={saveColor && saveColor}>{saveText ? saveText : 'Save'}</Button>
        </DialogActions>
      </Dialog>
  </div>
)};

export default AscDialog;
