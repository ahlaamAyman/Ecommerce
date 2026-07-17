import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import './header.css'
import { Link, useLocation } from 'react-router-dom';
import { PiSignInFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";



const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
]


const BtmHeader = () => {
  const [categories, setCategories] = useState([])
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsCategoryOpen(false)
  }, [location])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])



  return (
    <div className='btm_header'>
      <div className="container">
        <nav className='nav'>


          <div className={`category_nav ${isCategoryOpen ? 'open' : ''}`}>
            <div className="category_btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div className="category_nav_list">
              {categories.map((category) => (
                <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
              ))}
            </div>
          </div>

          <div className="nav_links">
            {NavLinks.map((item) => (
              <li className={location.pathname === item.link ? "active" : ""}><Link to={item.link}>{item.title}</Link></li>
            ))}
          </div>
          <div className="sign_regs_icon">
            <Link to="/"><PiSignInFill /></Link>
            <Link to="/"><FaUserPlus /></Link>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default BtmHeader
