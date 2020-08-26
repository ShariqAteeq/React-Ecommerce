import React from 'react';
import { useParams , Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductItem() {

    const product = useSelector(state => state.items);
    let { id } = useParams();

    let dp = product.find(i => i.id == id);
   

    return (
        <div className = "productItem">
            
            <div className = "productItem__left">
                <img src= {dp.img} alt = "item" className = "productItem__img"/>
            </div>
            <div className = "productItem__right">
                <h1 className = "productItem__head">{dp.title}</h1>
                <p className = "productItem__des">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                 Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                 Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                 from a Lorem Ipsum passage, and going through the cites.
                </p>
                <h3>Price : {dp.price}$</h3>
                <Link to = '/' className = "productItem__link">Continue Shopping</Link>
            </div>
        </div>
    )
}

export default ProductItem;
