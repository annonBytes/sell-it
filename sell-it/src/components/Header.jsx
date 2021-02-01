import React from 'react';
import '../components/Header.css';
import logo from '../images/amazon_PNG25.png';
import search from '../images/search.svg';
import cart from '../images/cart.svg'
import {Link} from "react-router-dom"
import { useStateValue } from '../StateProvider';



function Header() {

const [{ basket }] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
            <img className="header__logo" src={logo} alt="amazon"/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <img className="header__searchIcon" src={search} alt="search"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                <div className="header__optionBasket">
                    <img className="header__cartIcon" src={cart} alt="cart"/>   
                     <span className="header__optionLineTwo header__basketCount">
                       {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
