import { guitar } from './../../Context/fetchGuittars';
import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";

type guitarItem = {
    guitar: guitar,
    quantity: number,
    total: number
}
type cartState = {
    items: guitarItem[],
    total: number
}

const state: string = localStorage.getItem("cart") || "";
const initialStateNoneCache: cartState = {
    items: [],
    total: 0
}

const initialState: cartState = state !== "" ? JSON.parse(state) : initialStateNoneCache

export const ShoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<guitar>) => {
            //console.log(action.payload)
            const existGuitar = state.items.find(item => action.payload.id == item.guitar.id);
            if (existGuitar) {
                //console.log("exist")
                existGuitar.quantity += 1;
                existGuitar.total = existGuitar.quantity * existGuitar.guitar.price;
            } else {
                //console.log("push new")
                state.items.push({
                    guitar: action.payload,
                    quantity: 1,
                    total: action.payload.price
                })
            }
            state.total = state.items.reduce((sum, item) => sum + item.total, 0);
            localStorage.setItem("cart", JSON.stringify(state))
        },
        deleteToCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.guitar.id !== action.payload)

            state.total = state.items.reduce((sum, item) => sum + item.total, 0);
            localStorage.setItem("cart", JSON.stringify(state))
        },
        decrementItem: (state, action: PayloadAction<number>) => {
            const existGuitar = state.items.find(item => action.payload == item.guitar.id);
            if (existGuitar && existGuitar.quantity > 1) {
                existGuitar.quantity -= 1;
                existGuitar.total = existGuitar.quantity * existGuitar.guitar.price;
            } else if (existGuitar) {
                state.items = state.items.filter(item => item.guitar.id !== action.payload)
            }
            state.total = state.items.reduce((sum, item) => sum + item.total, 0);
            localStorage.setItem("cart", JSON.stringify(state))
        },
        incrementtItem: (state, action: PayloadAction<number>) => {
            const existGuitar = state.items.find(item => action.payload == item.guitar.id);
            if (existGuitar) {
                existGuitar.quantity += 1;
                existGuitar.total = existGuitar.quantity * existGuitar.guitar.price;
            }
            state.total = state.items.reduce((sum, item) => sum + item.total, 0);
            localStorage.setItem("cart", JSON.stringify(state))
        }
    }
})

export const { addToCart, decrementItem, deleteToCart, incrementtItem } = ShoppingSlice.actions;

export default ShoppingSlice.reducer;

