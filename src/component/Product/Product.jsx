import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    
    const handleAddCart = props.handleAddCart;
    return (
        <div className='border-2 p-3 w-full h-full grid content-between grid-cols-1 bg-lime-200'>
            <div>
                <img src={img} alt="" className='h-56 w-full ' />
                <h3 className='text-1xl font-bold'>{name}</h3>
                <p>Price : {price}</p>
                <p>Seller : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={()=>handleAddCart(props.product)} className='text-center w-full bg-lime-700  text-white py-2'>Add To Cart</button>
        </div>
    );
};

export default Product;