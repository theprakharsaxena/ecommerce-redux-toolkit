import React from 'react'
import { products } from "../data/productList.json"
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineShoppingCart } from "react-icons/ai"
import cartSlice from '../data/cartSlice'

const Cart = () => {
    const { cartProductIds } = useSelector((state) => state.cart)
    const cartProductData = products.filter(({ id }) => cartProductIds.includes(id))
    const { removeFromCart, clearAllItems } = cartSlice.actions
    const dispatch = useDispatch()
    return (
        <>
            <h1 className='flex flex-row justify-center text-4xl md:text-5xl font-bold underline underline-offset-8 mt-10' >ITEMS IN CART</h1>
            {cartProductData.length > 0 && (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:m-10 md:p-10 m-5 p-5'>
                        {cartProductData.map(({ id, name, detail, price, imageUrl }) => {
                            return (
                                <div className='border-8 border-gray-500 md:p-5 p-3 m-3 md:m-5 grid grid-cols-1 items-center justify-center text-center' key={id}>
                                    <img src={imageUrl} alt={name} height={200} width={200} />
                                    <div className='flex flex-col space-y-3 items-center justify-center'>
                                        <h3 className='text-lg'>{detail}</h3>
                                        <p>{price} INR</p>
                                        <button className='bg-red-500 px-3 py-2 rounded-lg hover:bg-blue-500' onClick={() => dispatch(removeFromCart(id))}>Remove From Cart</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <button className='bg-black hover:bg-white text-white hover:text-black border-2 border-black px-3 py-2 rounded-lg' onClick={() => dispatch(clearAllItems())}>Remove All Item</button>
                    </div>
                </>
            )}
            {cartProductData.length < 1 && (<div className='border-8 md:space-y-2 border-amber-700 m-5 py-10 md:py-20 mt-20 flex flex-col justify-center items-center text-center'>
                <AiOutlineShoppingCart className='text-5xl md:text-9xl' />
                <h3 className='text-xl md:text-3xl text-gray-500'>Your cart is empty</h3>
                <p className='font-semibold md:text-lg'>You have not added any item to your cart.</p>
            </div>)}
        </>
    )
}

export default Cart