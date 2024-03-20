import { documentsActions } from '../store/documentSlice';
import services from './services'
import {useDispatch} from 'react-redux';

export const useAPIFetchesContextHook = () => {
    const dispatch = useDispatch();
    
    // Save
    const saveDocument = async (userId, name) => {
      try {
        console.log(userId, name)
        const res =  await services.createDocument({userId, name});
        dispatch(documentsActions.getSingleDocument(res.data));
        return ({status:  200, message: res.data.message})
      } catch (error) {
        return( {
          status:  500, 
          message: error.response.data.message 
        })
      }
    };


    // Fetch all Documents methods
  const getAllDocument = async(userId) => {
    try {
      console.log(userId)
        const res =  await services.getDocuments(userId);
        dispatch(documentsActions.getDocuments({data: res.data.documents}));
        console.log(res.data.documents);
        return ({status:  200})
    } catch (error) {
        return( {
          status:  500, 
          message: error.response.data.message 
        })
    }
  };

  return {
    saveDocument,
    getAllDocument
  };
}
