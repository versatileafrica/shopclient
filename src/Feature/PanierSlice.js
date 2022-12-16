import { createSlice } from "@reduxjs/toolkit";

export const panierSlice = createSlice({
    name: "panier",
    initialState: {
        panier: [],
        trigg: false

    },

    reducers: {
        recupPan: (state, { payload }) => {
            if (payload) {
                state.panier = payload;
            }
        },
        setProductPan: (state, action) => {

            state.panier = [...state.panier, action.payload];
            localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        updateQuantity: (state, { payload }) => {
            state.panier = state.panier.map((val) => {
                if (val.product_id === payload[1]) {
                    return {
                        ...val,
                        product_quantity: payload[0],
                        total_price: payload[2],
                    };
                } else {
                    return val;
                }
            });
            localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        deleteProduct: (state, { payload }) => {
            state.panier = state.panier.filter((t) => t.product_id !== payload);
            localStorage.setItem("panier", JSON.stringify(state.panier));
        },
        dec: (state, { payload }) => {
            // if (payload) {
            // }
            state.trigg = payload;
        },
        vider: (state, { payload }) => {
           
                state.panier = [];
                localStorage.setItem("panier", JSON.stringify(state.panier));
            
        },

    },

});

export const { setProductPan, recupPan, updateQuantity, deleteProduct, dec, vider } = panierSlice.actions;
export default panierSlice.reducer;