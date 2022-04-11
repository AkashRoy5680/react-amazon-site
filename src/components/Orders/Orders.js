import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css"

const Orders = () => {
    const[products,setproducts]= useProducts();
    const[cart,setCart]=useCart(products);
    const navigatee = useNavigate();
    const handleRemoveProduct=product=>{
        const rest=cart.filter(pd=>pd.id!==product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
        <div className='review-items-container'>
              {
                  cart.map(product=><ReviewItem 
                    key={product.id} 
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
              }
        </div>
        <div className='cart-container'>
            <Cart cart={cart}>
               
                <button onClick={()=>navigatee("/inventory")}>Proceed CheckOut</button>
               
            </Cart>
        </div>   
        </div>
       

        
    );
};

export default Orders;