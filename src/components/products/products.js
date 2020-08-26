import React from 'react';
// import { connect } from 'react-redux';
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../../actions/actionType';
import { Link } from 'react-router-dom';


function Products() {

    const items = useSelector(state => state.items);
    const dispatch = useDispatch();

    return (
        <div className="product">
            {items.map(item => (
                <div className="product__item" key = {item.id}>
                    <img src={item.img} alt="product" className="product__img" />
                    <h3 className = "product__title">{item.title}</h3>
                    <p className="product__des">{item.desc}</p>
                    <div className = "product__bot">
                        <h4>Price : {item.price}$</h4>
                        <button className="product__btn" onClick = {() => dispatch(addToCart(item.id))}>Add To Cart</button>
                    </div>
                    <Link to = {`/products/${item.id}`} className = "product__det">See Detail</Link>
                </div>
            ))}
        </div>
    )
}

export default Products;

// const mapStateToProps = state => {
//     items:state.items
// }

// export default connect(mapStateToProps)(Products);
