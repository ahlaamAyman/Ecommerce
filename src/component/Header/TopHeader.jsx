import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { CartContext } from '../context/CartContext';



const TopHeader = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='top_header'>
            <div className="container">
                <Link className='logo' to="/"><img src={Logo} alt='Logo' /></Link>
                <form action="" className="search_box">
                    <input type="text" name='search' id='search' placeholder='Search for products' />
                    <button type='submit'>
                        <FaSearch />

                    </button>
                </form>
                <div className='header_icons'>
                    <div className='icon'>
                        <CiHeart />
                        <span className='count'>0</span>

                    </div>

                    <div className='icon'>

                        <Link to='/cart'>
                            <TiShoppingCart />

                            <span className='count'>{cartItems.length}</span>
                        </Link>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default TopHeader
