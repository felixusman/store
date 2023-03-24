
import { createContext, useState } from "react";
import { productArray, getProductData } from "./productStore";

export const CartContext = createContext ({
    items: [],
    setContent: () => {},
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    getItemByCategory: () => {}

})

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([])  

    //[ { id: 1, quantity: 2 }]
function getProductQuantity(id) {
   const quantity = cartProducts.find(product => product.id === id)?.quantity;
   if (quantity === undefined) {
    return 0
   }
   return quantity
} 

function getItemByCategory(category) {
    cartProducts.filter(product => {
                                return product.category === category
                            })
}

function addOneToCart(id) {
   const quantity = getProductQuantity(id)
      if(quantity === 0) { //Product is not in cart
         setCartProducts(
            [...cartProducts,{
                    id: id,
                    quantity: 1
                }
            ]
         )
      } else { //product is in cart
        setCartProducts(
            cartProducts.map(
               product => product.id === id?
                 {...product, quantity: product.quantity + 1}:
                 product
            )
        )
      }
}

function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)
      if(quantity == 1){
        window.confirm("Are you sure you want to delete?")
        deleteFromCart(id)
      }else {
        setCartProducts(
            cartProducts.map(
               product => product.id === id?
                 {...product, quantity: product.quantity - 1}:
                 product
            )
        )
      }
}

function deleteFromCart(id){
    if (window.confirm("Are you sure you want to delete?")) {
    setCartProducts(
        cartProducts =>
        cartProducts.filter(currentProduct => {
            return currentProduct.id !== id
        })
    )
  }
}

function getTotalCost() {
    let totalCost = 0
    cartProducts.map((cartItem) => {
        const productData = getProductData(cartItem.id)
        totalCost += (productData.price * cartItem.quantity)
    })
    return totalCost
}
  const contextValue = {
      items: cartProducts,
      getProductQuantity,
      addOneToCart,
      removeOneFromCart,
      deleteFromCart,
      getTotalCost,
      getItemByCategory,
 }
 //console.log(cartProducts)
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
//Context {cart, addToCart, removeCart}
//Provider -> gives your React app access to all the things in your context
