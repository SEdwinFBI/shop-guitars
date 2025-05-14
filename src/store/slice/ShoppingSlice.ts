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

const initialState: cartState = {
    items: [],
    total: 0
}

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

        },
        deleteToCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.guitar.id !== action.payload)

            state.total = state.items.reduce((sum, item) => sum + item.total, 0);
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
        },
        incrementtItem: (state, action: PayloadAction<number>) => {
            const existGuitar = state.items.find(item => action.payload == item.guitar.id);
            if (existGuitar) {
                existGuitar.quantity += 1;
                existGuitar.total = existGuitar.quantity * existGuitar.guitar.price;
            }
            state.total = state.items.reduce((sum, item) => sum + item.total, 0);
        }
    }
})

export const { addToCart, decrementItem, deleteToCart,incrementtItem } = ShoppingSlice.actions;

export default ShoppingSlice.reducer;

