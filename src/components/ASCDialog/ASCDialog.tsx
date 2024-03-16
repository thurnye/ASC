import React, { FC } from 'react';
import styles from './ASCDialog.module.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface AscDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  onSave?: () => void;
}

const AscDialog: FC<AscDialogProps> = (props: AscDialogProps ) => {
  const {open, setOpen, children, onSave} = props;


  return(
  <div className={styles.AscDialog}>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={ onSave && onSave}>Save</Button>
          <Button onClick={() => setOpen(!open)}>Cancel</Button>
        </DialogActions>
      </Dialog>
  </div>
)};

export default AscDialog;
