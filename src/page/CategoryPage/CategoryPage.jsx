import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../component/slideProducts/Product'
import './categorypage.css'
import SlideProducts from '../../component/slideProducts/SlideProducts'
import PageTransition from '../../component/PageTransition'
const CategoryPage = () => {

    const { category } = useParams()

    const [categoryProducts, setCategoryProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProducts(data.products)
            })
            .catch((error => console.error(error)))
            .finally(() => setLoading(false))
    }, [category])

    console.log(categoryProducts)
    return (
        <PageTransition key={category}>
            <div className="category_pages">

                {loading ? (
                    <p>loading...</p>
                ) : (
                    <div className="container">

                        <div className="top_slide">
                            <h2>{category} : {categoryProducts.limit}</h2>
                            <p>Lorem ipsum dolor sit amet comsectetur adipisicing elit .Molestias,voluptates?</p>
                        </div>

                        <div className="products">
                            {categoryProducts.map((item, index) => (
                                <Product item={item} key={index} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </PageTransition>

    )
}

export default CategoryPage
