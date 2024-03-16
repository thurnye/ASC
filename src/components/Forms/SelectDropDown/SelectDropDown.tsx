import React, { FC } from 'react';
import styles from './SelectDropDown.module.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ListItemsProps } from '../../../utils/interfaces';
import { getRandomInt } from '../../../utils/commons';

interface SelectDropDownProps {
  menuItems?: ListItemsProps[];
}

const SelectDropDown: FC<SelectDropDownProps> = (
  props: SelectDropDownProps
) => {
  const { menuItems } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <div className={styles.SelectDropDown}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={value}
            onChange={handleChange}
            placeholder=''
            sx={{ fontSize: 13 }}
          >
            <MenuItem disabled value=''>
              <em>Choose Spec Section</em>
            </MenuItem>
            {menuItems?.map((item: ListItemsProps) => (
              <MenuItem key={getRandomInt()} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectDropDown;
