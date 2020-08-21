import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyle = makeStyles({
    headerBadge : {
        color : '#fff'
    }
});

function Header() {

    const classes = useStyle();

    return (
        <div className="header">
            <nav className="header__nav">
                <h3>Redux Store</h3>
                <ul className="header__list">
                    <li><a href="#" className="header__link">Home</a></li>
                    <li><a href="#" className="header__link">About</a></li>
                    <li><a href="#" className="header__link">
                        <Badge badgeContent={4} color="primary" className = {classes.headerBadge}>
                            <ShoppingCartIcon />
                        </Badge>
                    </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
