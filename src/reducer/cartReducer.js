import React from 'react';

import img1 from '../img/item1.jpg';
import img2 from '../img/item2.jpg';
import img3 from '../img/item3.jpg';
import img4 from '../img/item4.jpg';
import img5 from '../img/item5.jpg';
import img6 from '../img/item6.jpg';

const initialState = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: img1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: img2 },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: img3 },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: img4 },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: img5 },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: img6 }
    ],
    addedItems : [],
    total: 0,
    basketNo: 0
}

const cartReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'addToCart':
            let addedItem = state.items.find(item => item.id === action.id);
            let existedItem = state.addedItems.find(item => action.id === item.id);

            if(existedItem) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    total : state.total + addedItem.price,
                    basketNo: state.basketNo + 1
                }
            } else {
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price;
                return {
                    ...state,
                    addedItems : [...state.addedItems , addedItem],
                    total : newTotal,
                    basketNo: state.basketNo + 1
                }
            }

        case 'removeItem': 
            let itemToRemove = state.addedItems.find(item => item.id === action.id);
            let newItems = state.addedItems.filter(item => item.id !== action.id);

            let newTotal = state.total - (itemToRemove.quantity * itemToRemove.price);
            let new_basket = state.basketNo - itemToRemove.quantity;

            return {
                ...state,
                addedItems : newItems,
                total : newTotal,
                basketNo : new_basket
            }

        case 'addQuantity':
            let addedQuaItem = state.items.find(item => item.id === action.id)
            addedQuaItem.quantity += 1;
            let newQuanTotal = state.total + addedQuaItem.price;

            return {
                ...state,
                total : newQuanTotal,
                basketNo: state.basketNo + 1
            }

        case 'subQuantity':
            let addedSubItem = state.items.find(item => item.id === action.id);
            state.basketNo -= 1;

            if(addedSubItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.id);
                let new_total = state.total - addedSubItem.price;

                return {
                    ...state, 
                    addedItems : new_items,
                    total : new_total
                }
            } else {
                addedSubItem.quantity -= 1;
                let subTotal = state.total - addedSubItem.price;

                return {
                    ...state,
                    total : subTotal
                }
            }

        default:
            return state;
    }
}

export default cartReducer;
