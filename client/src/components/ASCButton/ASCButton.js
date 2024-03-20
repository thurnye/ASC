import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { darken } from '@mui/system';


const ColorButton = styled(Button)(({ theme, backgroundColor, hoverBackgroundColor }) => ({
  ...(backgroundColor &&  {color: theme.palette.getContrastText(backgroundColor) }),
  ...(backgroundColor &&  {backgroundColor: backgroundColor }),
  textTransform: 'none',
  '&:hover': {
    // ...(backgroundColor &&  {backgroundColor: darken(backgroundColor, 0)}),
    backgroundColor: hoverBackgroundColor ? darken(hoverBackgroundColor, 0) : darken(backgroundColor, 0) 
    
  },
}));

export default function ASCButton({ 
  sx={}, label, variant, backgroundColor, onClick, fullWidth, height, width, hoverBackgroundColor, disabled=false 
}) {
  return (
        <ColorButton 
          variant={variant}
          backgroundColor={backgroundColor}
          hoverBackgroundColor={hoverBackgroundColor}
          onClick={onClick}
          fullWidth={fullWidth}
          sx={sx}
          disabled={disabled}
          >
          {label}
        </ColorButton>
  );
}
