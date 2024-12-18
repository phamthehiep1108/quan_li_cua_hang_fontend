import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callGetCategory2 } from '../../services/api';

export const getCategory = createAsyncThunk(
    'api/categories',
    async () => {
      const response = await callGetCategory2(); // Giả sử có hàm gọi API lấy danh sách phim
      return response.data; // Lấy dữ liệu danh sách phim
    }
  ); 
const initialState = {
   category:[]
};

export const categorytSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {       
        doSaveCategoryAction: (state, action) => {
          //  console.log('action',action);
            state.category = action.payload;
        },
    },

    
});


export const { doSaveCategoryAction } = categorytSlice.actions;

export default categorytSlice.reducer;
