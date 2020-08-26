import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyle = makeStyles({
    headerBadge : {
        color : '#fff'
    }
});

function Header() {

    const classes = useStyle();
    const basketNo = useSelector(state => state.basketNo);

    return (
        <div className="header">
            <nav className="header__nav">
                <h3>Redux Store</h3>
                <ul className="header__list">
                    <li><Link to = "/"  exact className="header__link">Home</Link></li>
                    <li><Link to = "/about" className="header__link">About</Link></li>
                    <li><Link to = "/cart" className="header__link">
                        <Badge badgeContent={basketNo} color="primary" className = {classes.headerBadge}>
                            <ShoppingCartIcon />
                        </Badge>
                    </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
