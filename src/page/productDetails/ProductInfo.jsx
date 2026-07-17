import React, { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar } from 'react-icons/fa6'
import { MdOutlineStarHalf } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../component/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({ product }) {
    const { cartItems, addToCart } = useContext(CartContext)

    const navigate = useNavigate()

    const isInCart = cartItems.some(i => i.id === product.id)



    const handleAddToCart = () => {
        addToCart(product)

        toast.success(
            <div className="toast_wrapper">
                <img src={product.images[0]} alt='' className='toast_img' />

                <div className="toast_contant">
                    <strong>{product.title}</strong>
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
        <div className="details_item">
            <h1 className='name'>{product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <MdOutlineStarHalf />


            </div>

            <p className='price'>$ {product.price}</p>
            <h5>Availability:<span>{product.availabilityStatus}</span></h5>
            <h5>Brand:<span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5 className='stock'><span>Hurry Up! Only {product.stock} products left in stock </span></h5>

            <button className={`btn ${isInCart ? 'in-cart' : ''}`}
                onClick={handleAddToCart}>
                {isInCart ? "item in cart" : " Add To cart"}    <TiShoppingCart />
            </button>

            <div className="icons">
                <span>
                    <FaRegHeart />
                </span>
                <span>
                    <FaShare />
                </span>
            </div>

        </div>
    )
}

export default ProductInfo
