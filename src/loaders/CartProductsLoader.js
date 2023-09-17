const CartProductsLoader = async () =>{
const loadedProducts = await fetch('data.json');
const products = await loadedProducts.json();
return products;

// const storeedCart = getShoppingCart()
}
export default CartProductsLoader;