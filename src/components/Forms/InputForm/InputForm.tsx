import React, { FC } from 'react';
import styles from './InputForm.module.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface InputFormProps {
  label?: string;
  placeholder?: string;
  getValue: (val:string) => void;
  value:string
}

const InputForm: FC<InputFormProps> = (props : InputFormProps) => {
  const  {label, placeholder, getValue, value} = props
  return(
  <div className={styles.InputForm}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      autoComplete="off"
    >
      {label && <Typography variant="body1" gutterBottom sx={{fontWeight: 700}}>{label}</Typography>}
      <TextField 
        fullWidth
        id="outlined-basic" 
        variant="outlined" 
        size="small" 
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          getValue(event.target.value);
        }}
        placeholder={placeholder && placeholder}
      />
    </Box>
  </div>
)};

export default InputForm;
