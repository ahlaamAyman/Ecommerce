import React, { useEffect, useState } from 'react'
import './home.css'
import HeroSlider from '../../component/HeroSlider'
import SlideProducts from '../../component/slideProducts/SlideProducts'
import PageTransition from '../../component/PageTransition'


const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "sunglasses",
  "tablets",
  "sports-accessories",
]

const Home = () => {

  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resultes = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            console.log("res>>>>>>>>>>>", res)
            const data = await res.json();
            return { [category]: data.products }
          })

        )

        const productsData = Object.assign({}, ...resultes)
        setProducts(productsData)


      } catch (error) {
        console.error("Error fetching", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])






  return (
    <PageTransition>
      <div>
        <HeroSlider />


        {loading ? (
          <p>Loading ....</p>
        ) : (
          categories.map((category) => (
            <SlideProducts key={category} data={products[category]} title={category.replace("-", " ")} />
          ))

        )}

      </div>
    </PageTransition>

  )
}

export default Home
