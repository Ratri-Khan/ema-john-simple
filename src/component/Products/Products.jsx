
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Products = () => {
    const products = useLoaderData();
    const [cart,setCart] = useState([]);

    const handleAddCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        // console.log(newCart);
        
    }

    return (
        <div className='flex'>
            <div className='md:w-9/12 grid md:grid-cols-3 gap-3'>
                {
                    products.map(product => <Product product={product}
                        key={product.id}
                        cart={product}
                        handleAddCart={handleAddCart}>                            
                        </Product>)
                }
            </div>
            <div className='md:w-3/12 h-96 bg-lime-500 text-white font-bold'>
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Products;