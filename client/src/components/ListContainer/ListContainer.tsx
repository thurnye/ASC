import React, { FC, useEffect } from 'react';
import styles from './ListContainer.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { getRandomInt } from '../../utils/commons';
import {ListItemsProps, selectedListItem} from '../../utils/interfaces'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface ListContainerProps {
  icons?: string[];
  listItems?: ListItemsProps[];
  getSelectedValues?: (selected: ListItemsProps[] | undefined) => void;
  getSelectId?: ( selected : selectedListItem | undefined) => void;
  height?: number;
  size?: number;
  border?: boolean;
  reset?: boolean
}



const ListContainer: FC<ListContainerProps> = (props: ListContainerProps) => {
  const {icons, listItems, getSelectedValues, height, border, getSelectId, size, reset} = props
  const [checked, setChecked] = React.useState(['']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked.filter(item => item !== ""));
    getSelectedValues && getSelectedValues(listItems?.filter(item => newChecked.includes(item.value)));
  };

  useEffect(() => setChecked(['']),[reset])

  //Get Icons if they are present
  const getIcon = (id: number) => {
    return icons?.map((icon) => {
      switch (icon.toLowerCase()) {
        case 'edit':
          return (
            <IconButton 
            key="edit" 
            edge="end" 
            aria-label="edit" 
            onClick={() => getSelectId && getSelectId({id, type: 'edit'})}
            
            >
              <EditOutlinedIcon sx={{fontSize: 20, mr: 0.3, color:"#375EA2"}}/>
            </IconButton>
          );
        case 'delete':
          return (
            <IconButton 
            key="delete" 
            edge="end" 
            aria-label="delete" 
            onClick={() => getSelectId && getSelectId({id, type: 'delete'})}
            >
              <DeleteOutlinedIcon sx={{fontSize: 20}} color="error"/>
            </IconButton>
          );
        default:
          return null;
      }
    });
  };
  

  
  return (
  <div className={styles.ListContainer}>
    <Box sx={{
      height: height ? height : 360,
      maxHeight: 450,
      overflow: 'auto',
      border: border ? '1px solid #ccce' : ''
    }}>
      <List sx={{ width: '100%',  bgcolor: 'background.paper' }} dense>
        {listItems?.map( (list : ListItemsProps, index: number) => {
          return (<>
            <ListItem
              key={getRandomInt()}
              secondaryAction={<Box sx={{ml: 2}}>{getIcon(list.id)}</Box>}
              disablePadding
              sx={{
                pr: 0,
              }}
            >
              <ListItemButton role={undefined} onClick={handleToggle(list.value)}
              sx={{
                '&.MuiListItemButton-root':{
                  pr: icons === undefined ? 1 : 6,

                }
              }} >
                <ListItemIcon sx={{minWidth: 'initial'}}>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(list.value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': list.label }}
                  />
                </ListItemIcon>
                <ListItemText primary={
                    <Typography variant="body2" sx={{
                      fontSize: size ? size : 13, 
                      mr: icons && icons.length > 0 ? 2 : '',
                      flexGrow: 1
                    }}>{list.label}</Typography>
                  } />
              </ListItemButton>
            </ListItem>
            {border && index !== (listItems.length - 1 ) && <Divider component="li" />}
          </>
          );
        })}
      </List>
    </Box>
  </div>
)};

export default ListContainer;
