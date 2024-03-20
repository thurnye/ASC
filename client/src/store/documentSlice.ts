import  {createSlice} from '@reduxjs/toolkit';


const initDocuments = {
    documents: [],
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
           state.singleDocument = action.payload
       },
       getResetDocument(state){
        console.log('reset')
           state.singleDocument = null
       }
    }
})

export default documentSlice.reducer;
export const documentsActions = documentSlice.actions