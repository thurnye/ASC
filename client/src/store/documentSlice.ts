import  {createSlice} from '@reduxjs/toolkit';
import { getRandomInt } from '../utils/commons';
import { DocumentItemsProps } from '../utils/interfaces';


const defaultDoc:DocumentItemsProps[] = [
    { id: getRandomInt(), label: '23 05 13 - Electric Motor for HVAC...', value: '23 05 13 - Electric Motor for HVAC...', template: [] },
    { id: getRandomInt(), label: '23 05 14 - Variable Frequency Drives for...', value: '23 05 14 - Variable Frequency Drives for...', template: [] },
    { id: getRandomInt(), label: '23 05 16 - Expansion Fittings and Loops for...', value: '23 05 16 - Expansion Fittings and Loops for...', template: [] },
    { id: getRandomInt(), label: '23 05 19 - Meters, Gauges and...', value: '23 05 19 - Meters, Gauges and...', template: [] },
    { id: getRandomInt(), label: '23 05 23 - General-Duty Valves for HVAC...', value: '23 05 23 - General-Duty Valves for HVAC...', template: [] },
    { id: getRandomInt(), label: '23 05 29 - Hangers and Supports for HVAC', value: '23 05 29 - Hangers and Supports for HVAC', template: [] },
    { id: getRandomInt(), label: '23 05 48 - Vibration Controls for HVAC', value: '23 05 48 - Vibration Controls for HVAC', template: [] },
    { id: getRandomInt(), label: '23 05 50 - Access Doors in General...', value: '23 05 50 - Access Doors in General...', template: [] },
    { id: getRandomInt(), label: '23 05 53 - System Identification for HVAC', value: '23 05 53 - System Identification for HVAC', template: [] },
    { id: getRandomInt(), label: '23 05 93 - Testing, Adjusting and Balancing...', value: '23 05 93 - Testing, Adjusting and Balancing...', template: [] },
    { id: getRandomInt(), label: '23 07 00 - Insulation for HVAC', value: '23 07 00 - Insulation for HVAC', template: [] },
    { id: getRandomInt(), label: '23 08 00 - Commissioning of HVAC Systems', value: '23 08 00 - Commissioning of HVAC Systems', template: [] },
    { id: getRandomInt(), label: '23 09 23 - Direct Digital Control for HVAC', value: '23 09 23 - Direct Digital Control for HVAC', template: [] },
    { id: getRandomInt(), label: '23 09 93 - Sequence of Operations for...', value: '23 09 93 - Sequence of Operations for...', template: [] },
    { id: getRandomInt(), label: '23 21 13 - Hydronic Piping', value: '23 21 13 - Hydronic Piping', template: [] },
    { id: getRandomInt(), label: '23 21 16 - Hydronic Piping Specialties', value: '23 21 16 - Hydronic Piping Specialties', template: [] },
    { id: getRandomInt(), label: '23 21 23 - Hydronic Pumps', value: '23 21 23 - Hydronic Pumps', template: [] },
    { id: getRandomInt(), label: '23 25 00 - HVAC Water Treatment', value: '23 25 00 - HVAC Water Treatment', template: [] },
    { id: getRandomInt(), label: '23 31 00 - HVAC Ducts and Casings', value: '23 31 00 - HVAC Ducts and Casings', template: [] },
    { id: getRandomInt(), label: '23 33 13 - Dampers', value: '23 33 13 - Dampers', template: [] },
    { id: getRandomInt(), label: '23 33 19 - Acoustics', value: '23 33 19 - Acoustics', template: [] },
    { id: getRandomInt(), label: '23 34 00 - HVAC Fans', value: '23 34 00 - HVAC Fans', template: [] },
    { id: getRandomInt(), label: '23 36 00 - Air Terminal Units', value: '23 36 00 - Air Terminal Units', template: [] },
    { id: getRandomInt(), label: '23 37 00 - Air Outlets and Inlets', value: '23 37 00 - Air Outlets and Inlets', template: [] },
    { id: getRandomInt(), label: '23 51 00 - Breechings, Chimneys and Stacks', value: '23 51 00 - Breechings, Chimneys and Stacks', template: [] },
    { id: getRandomInt(), label: '23 52 00 - Condensing Boiler', value: '23 52 00 - Condensing Boiler', template: [] },
    { id: getRandomInt(), label: '23 57 00 - Heat Exchanger', value: '23 57 00 - Heat Exchanger', template: [] },
    { id: getRandomInt(), label: '23 57 00 - Heat Exchanger 2.0', value: '23 57 00 - Heat Exchanger 2.0', template: [] },
    { id: getRandomInt(), label: '23 57 00 - Heat Exchanger 3.0', value: '23 57 00 - Heat Exchanger 3.0', template: [] },
    { id: getRandomInt(), label: '23 64 23 - Air-Cooled, Scroll Water Chillers', value: '23 64 23 - Air-Cooled, Scroll Water Chillers', template: [] },
    { id: getRandomInt(), label: '23 65 13 - Cooling Tower', value: '23 65 13 - Cooling Tower', template: [] }
  ];

const initDocuments = {
    documents: defaultDoc,
    singleDocument: null,
}

const documentSlice = createSlice({
    name: 'documents',
    initialState: initDocuments,
    reducers: {
       getDocuments(state, action){
           state.documents = action.payload.data;
       },
       getSingleDocument(state, action){
           const document = action.payload.data
           state.singleDocument = document
       },
       getResetDocument(state){
        console.log('reset')
           state.singleDocument = null
       }
    }
})

export default documentSlice.reducer;
export const documentsActions = documentSlice.actions