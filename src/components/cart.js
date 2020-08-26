import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import { removeItem , addQuantity , subQuantity } from '../actions/actionType';

function Cart() {

    const addedItems = useSelector(state => state.addedItems);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    let itemList = addedItems.map(item => {
        return (
            <li className="cart__item" key={item.id}>
                <div className="cart__item-left">
                    <img src={item.img} alt="item" className="cart__img" />
                </div>
                <div className="cart__item-right">
                    <h3 className="cart__title">{item.title}</h3>
                    <p className="cart__desc">{item.desc}</p>
                    <p className="cart__text mt-small">Price : {item.price}$</p>
                    <div className = "cart__quan">
                        <p className="cart__text">Quantity : {item.quantity}</p>
                        <div className = "cart__icons">
                            <Link to='/cart' onClick = {() => dispatch(addQuantity(item.id))}><ArrowDropUpIcon /></Link>
                            <Link to='/cart' onClick = {() => dispatch(subQuantity(item.id))} ><ArrowDropDownIcon /></Link>
                        </div>
                    </div>
                    <button className="product__btn mt-small" 
                    onClick = {() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
            </li>
        )
    });

    return (
        <div className="cart">
            <ul className="cart__list">
                {itemList}
            </ul>
            <div className = "cart__total">
                <h1>Order Summary</h1>
                <h2 className = "mt-small">Total : {total}$</h2>
            </div>
        </div>
    )
}

export default Cart;
