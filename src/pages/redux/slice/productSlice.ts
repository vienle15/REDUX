import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface I_ProductState {
  [x: string]: any;
  loading: boolean;
  products: string[];
}

const initialState: I_ProductState = {
  loading: false,
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<string>) => {
      console.log(1111, action);
      state.products.push(action.payload);
    },
    updateProduct: () => {},
    deleteProduct: () => {},
    getProduct: () => {},
  },
});

export const { addNewProduct, updateProduct, deleteProduct, getProduct } =
  productSlice.actions;

export default productSlice.reducer;
