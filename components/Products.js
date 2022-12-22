import React, { useContext }  from 'react'
import { ProductsContext } from '../global/ProductsContext'
import Navbar from './Nav'
import './Products.css'
import { CartContext } from '../global/CartContext'

const Products = ({user}) => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
<Navbar user={user} />      
            {products.length !== 0 && <h1 className="head">Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>No products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-imgpro'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-namep'>
                            
                        </div>
                        <div className='product-price'>
                        {product.ProductName}   <br/>
                            Rs {product.ProductPrice}.00 <br/>
                            GI No.: {product.ProductGItag}
                    </div>
                        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Products;