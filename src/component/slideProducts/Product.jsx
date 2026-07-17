import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarHalf } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';





const Product = ({ item }) => {



  const { cartItems, addToCart } = useContext(CartContext)


  const isInCart = cartItems.some(i => i.id === item.id)

  const handleAddToCart = () => {
    addToCart(item)

    toast.success(
      <div className="toast_wrapper">
        <img src={item.images[0]} alt='' className='toast_img' />

        <div className="toast_contant">
          <strong>{item.title}</strong>
          add To Cart
          <div>
            <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
          </div>
        </div>
      </div>

      , { duration: 3500 }

    )
  }



  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/products/${item.id}`}>

        <span className='stats_cart'>
          <FaCheck /> in cart

        </span>



        <div className="img_product">
          <img src={item.images[0]} alt='' />
        </div>
        <p className="name_product">{item.title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <MdOutlineStarHalf />

        </div>
        <p className='price'><span>$ {item.price}</span> </p>
      </Link>
      <div className="icons">
        <span className='btn_addtocart' onClick={handleAddToCart}><FaCartArrowDown /></span>
        <span><CiHeart /></span>
        <span><FaShare /></span>
      </div>
    </div>
  )
}

export default Product
