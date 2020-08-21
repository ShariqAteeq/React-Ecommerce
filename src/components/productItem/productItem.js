import React from 'react';
import img6 from '../../img/item6.jpg';
import img1 from '../../img/item1.jpg';
import img2 from '../../img/item2.jpg';
import img3 from '../../img/item3.jpg';
import img4 from '../../img/item4.jpg';
import img5 from '../../img/item5.jpg';


function ProductItem() {
    return (
        <div className = "productItem">
            <div className = "productItem__left">
                <img src= {img6} alt = "item" className = "productItem__img"/>
            </div>
            <div className = "productItem__right">
                <h1 className = "productItem__head">Adidas</h1>
                <p className = "productItem__des">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                 Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                 Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                 from a Lorem Ipsum passage, and going through the cites.
                </p>
                <h3>Price : 113$</h3>
                <button className = "productItem__btn">Continue Shopping</button>
            </div>
        </div>
    )
}

export default ProductItem;
