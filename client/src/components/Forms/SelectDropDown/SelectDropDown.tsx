import React, { FC, useEffect } from 'react';
import styles from './SelectDropDown.module.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ListItemsProps } from '../../../utils/interfaces';

interface SelectDropDownProps {
  menuItems?: ListItemsProps[];
  getSelectedId?: (id: number | undefined) => void;
}

const SelectDropDown: FC<SelectDropDownProps> = (
  props: SelectDropDownProps
) => {
  const { menuItems, getSelectedId } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedId = parseInt(event.target.value as string, 10);
    setValue(event.target.value as string);
    if (getSelectedId) {
      getSelectedId(selectedId);
    }
  };

  //update the value if menuItems changes
  useEffect(() => {
    const foundIndex = menuItems?.findIndex((item) => item.id === parseInt(value));
    if (foundIndex === -1) {
      setValue('');
      getSelectedId && getSelectedId(undefined)
    };
  },[menuItems])

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
              <MenuItem key={item.id} value={item.id}>
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
