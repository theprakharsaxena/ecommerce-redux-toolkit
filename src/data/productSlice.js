import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from "./productList.json";

export const fetchAllData = createAsyncThunk(
  "fetch-all-data",
  async (dataUrl) => {
    const response = await fetch(dataUrl);
    return response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { data: [], fetchResponse: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchResponse = "success";
      })
      .addCase(fetchAllData.pending, (state) => {
        state.fetchResponse = "loading";
      })
      .addCase(fetchAllData.rejected, (state) => {
        state.data=productList.products
        state.fetchResponse = "error";
      });
  },
});

export default productSlice