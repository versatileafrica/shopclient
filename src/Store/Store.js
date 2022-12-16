import { configureStore } from "@reduxjs/toolkit";
import panierReducer from "../Feature/PanierSlice";
import productReducer from "../Feature/ProductSlice";
import DeclencheursReducer from "../Feature/DeclencheursSlice";

export default configureStore({
    reducer: {
        panier: panierReducer,
        product: productReducer,
        triggers: DeclencheursReducer,
    }
})