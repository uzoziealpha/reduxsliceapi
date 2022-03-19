import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchDatas = createAsyncThunk(
    'datas/fetchDatas', 
    async () => {
    return fetch(
        'https://ergon-ms-gixholtv4q-df.a.run.app/api/bountyAd'
    ).then((res) => res.json());
  }
);

const dataSlice = createSlice({
    name: 'bountyAds',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchDatas.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchDatas.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data
        },
        [fetchDatas.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default dataSlice.reducer;