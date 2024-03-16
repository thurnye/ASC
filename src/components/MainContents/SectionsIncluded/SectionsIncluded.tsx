import React, { FC, useState } from 'react';
import styles from './SectionsIncluded.module.scss';
import CardWrapper from '../../../layout/cardWrapper/cardWrapper';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import Box from '@mui/material/Box';
import ListContainer from '../../ListContainer/ListContainer';
import {ListItemsProps} from '../../../utils/interfaces'
import {getRandomInt} from '../../../utils/commons'
import ASCButton from '../../ASCButton/ASCButton';
import SelectDropDown from '../../Forms/SelectDropDown/SelectDropDown';


interface SectionsIncludedProps {}

const sections: ListItemsProps[] = [
  { id: getRandomInt(), label: '23 05 13 - Electric Motor for HVAC...', value: '23 05 13 - Electric Motor for HVAC...' },
  { id: getRandomInt(), label: '23 05 14 - Variable Frequency Drives for...', value: '23 05 14 - Variable Frequency Drives for...' },
  { id: getRandomInt(), label: '23 05 16 - Expansion Fittings and Loops for...', value: '23 05 16 - Expansion Fittings and Loops for...' },
  { id: getRandomInt(), label: '23 05 19 - Meters, Gauges and...', value: '23 05 19 - Meters, Gauges and...' },
  { id: getRandomInt(), label: '23 05 23 - General-Duty Valves for HVAC...', value: '23 05 23 - General-Duty Valves for HVAC...' },
  { id: getRandomInt(), label: '23 05 29 - Hangers and Supports for HVAC', value: '23 05 29 - Hangers and Supports for HVAC' },
  { id: getRandomInt(), label: '23 05 48 - Vibration Controls for HVAC', value: '23 05 48 - Vibration Controls for HVAC' },
  { id: getRandomInt(), label: '23 05 50 - Access Doors in General...', value: '23 05 50 - Access Doors in General...' },
  { id: getRandomInt(), label: '23 05 53 - System Identification for HVAC', value: '23 05 53 - System Identification for HVAC' },
  { id: getRandomInt(), label: '23 05 93 - Testing, Adjusting and Balancing...', value: '23 05 93 - Testing, Adjusting and Balancing...' },
  { id: getRandomInt(), label: '23 07 00 - Insulation for HVAC', value: '23 07 00 - Insulation for HVAC' },
  { id: getRandomInt(), label: '23 08 00 - Commissioning of HVAC Systems', value: '23 08 00 - Commissioning of HVAC Systems' },
  { id: getRandomInt(), label: '23 09 23 - Direct Digital Control for HVAC', value: '23 09 23 - Direct Digital Control for HVAC' },
  { id: getRandomInt(), label: '23 09 93 - Sequence of Operations for...', value: '23 09 93 - Sequence of Operations for...' },
  { id: getRandomInt(), label: '23 21 13 - Hydronic Piping', value: '23 21 13 - Hydronic Piping' },
  { id: getRandomInt(), label: '23 21 16 - Hydronic Piping Specialties', value: '23 21 16 - Hydronic Piping Specialties' },
  { id: getRandomInt(), label: '23 21 23 - Hydronic Pumps', value: '23 21 23 - Hydronic Pumps' },
  { id: getRandomInt(), label: '23 25 00 - HVAC Water Treatment', value: '23 25 00 - HVAC Water Treatment' },
  { id: getRandomInt(), label: '23 31 00 - HVAC Ducts and Casings', value: '23 31 00 - HVAC Ducts and Casings' },
  { id: getRandomInt(), label: '23 33 13 - Dampers', value: '23 33 13 - Dampers' },
  { id: getRandomInt(), label: '23 33 19 - Acoustics', value: '23 33 19 - Acoustics' },
  { id: getRandomInt(), label: '23 34 00 - HVAC Fans', value: '23 34 00 - HVAC Fans' },
  { id: getRandomInt(), label: '23 36 00 - Air Terminal Units', value: '23 36 00 - Air Terminal Units' },
  { id: getRandomInt(), label: '23 37 00 - Air Outlets and Inlets', value: '23 37 00 - Air Outlets and Inlets' },
  { id: getRandomInt(), label: '23 51 00 - Breechings, Chimneys and Stacks', value: '23 51 00 - Breechings, Chimneys and Stacks' },
  { id: getRandomInt(), label: '23 52 00 - Condensing Boiler', value: '23 52 00 - Condensing Boiler' },
  { id: getRandomInt(), label: '23 57 00 - Heat Exchanger', value: '23 57 00 - Heat Exchanger' },
  { id: getRandomInt(), label: '23 57 00 - Heat Exchanger 2.0', value: '23 57 00 - Heat Exchanger 2.0' },
  { id: getRandomInt(), label: '23 57 00 - Heat Exchanger 3.0', value: '23 57 00 - Heat Exchanger 3.0' },
  { id: getRandomInt(), label: '23 64 23 - Air-Cooled, Scroll Water Chillers', value: '23 64 23 - Air-Cooled, Scroll Water Chillers' },
  { id: getRandomInt(), label: '23 65 13 - Cooling Tower', value: '23 65 13 - Cooling Tower' }
];


const SectionsIncluded: FC<SectionsIncludedProps> = () =>{
  const [selectedSections, setSelectedSections] = useState<ListItemsProps[] | undefined>();

  return(
  <div className={styles.SectionsIncluded}>
    <CardWrapper>
      <Box>
        <HeaderTitle title={'Sections Included'} />
        <Box sx={{mt: 2}}>
          <ListContainer 
            listItems={sections}
            getSelectedValues={(items) => setSelectedSections(items)}
            border={true}
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
          onClick={() => ''}
          height={'initial'}
          width={'initial'}
      />
      </Box>
      <SelectDropDown menuItems={selectedSections}/>
    </CardWrapper>
  </div>
)};

export default SectionsIncluded;
