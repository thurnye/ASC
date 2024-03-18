import  { configureStore} from '@reduxjs/toolkit'
import documents from './documentSlice'




const store = configureStore({
    reducer: {
        documentData: documents
    }
})



export default store;