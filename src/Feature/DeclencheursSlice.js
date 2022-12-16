import { createSlice } from "@reduxjs/toolkit";

export const declencheurSlice = createSlice({
    name: "triggers",
    initialState: {
        triggermod: false, 
        dateact: '',
        categories: [],
        active_categ: "",
        active_tendance: '',
        like_list: [],
        affiliate: [],
        numberUser: "",

    },
    reducers: {
        dectriggmod: (state, { payload }) => {
            state.triggermod = payload;
        },
        decdateact: (state, { payload }) => {
            state.dateact = payload;
        },
        setcategories:  (state, { payload }) => {
            state.categories = payload;
        },
        setactive_categ:  (state, { payload }) => {
            state.active_categ = payload;
        },
        setactive_tendance:  (state, { payload }) => {
            state.active_tendance = payload;
        },
        recuplike_list: (state, { payload }) => {
            if (payload) {
                state.like_list = payload;
            }
        },
        setlike_list:  (state, action) => {
            // state.like_list = payload;
            // state.like_list = payload;
            state.like_list = [...state.like_list, action.payload];
            localStorage.setItem("like_list", JSON.stringify(state.like_list));
        },
        deletelike_list: (state, { payload }) => {
            state.like_list = state.like_list.filter((t) => t !== payload);
            localStorage.setItem("like_list", JSON.stringify(state.like_list));
        },
        setaffiliate:  (state, action) => {
            state.affiliate = action.payload;
            localStorage.setItem("parrain", JSON.stringify(state.affiliate));
        },
        setnumberUser:  (state, action) => {
            state.numberUser = action.payload;
            localStorage.setItem("numberUser", JSON.stringify(state.numberUser));
        },
    }
});

export const {setaffiliate, setnumberUser, dectriggmod, decdateact, setcategories, setactive_categ, setactive_tendance, setlike_list, deletelike_list, recuplike_list} = declencheurSlice.actions;
export default declencheurSlice.reducer;