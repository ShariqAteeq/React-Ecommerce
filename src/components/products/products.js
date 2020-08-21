import React from 'react';

import img1 from '../../img/item1.jpg';
import img2 from '../../img/item2.jpg';
import img3 from '../../img/item3.jpg';
import img4 from '../../img/item4.jpg';
import img5 from '../../img/item5.jpg';
import img6 from '../../img/item6.jpg';

function Products() {

    const items = [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: img1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: img2 },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: img3 },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: img4 },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: img5 },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: img6 }
    ];

    return (
        <div className="product">
            {items.map(item => (
                <div className="product__item">
                    <img src={item.img} alt="product" className="product__img" />
                    <h3>{item.title}</h3>
                    <p className="product__des">{item.desc}</p>
                    <div className = "product__bot">
                        <h4>Price : {item.price}$</h4>
                        <button className="product__btn">Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
