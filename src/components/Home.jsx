import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import cartSlice from "../data/cartSlice"
import { fetchAllData } from "../data/productSlice"

const Home = () => {
    const dispatch = useDispatch();
    const { cart, product } = useSelector((state) => state)
    const { addToCart, removeFromCart } = cartSlice.actions

    useEffect(() => {
        dispatch(fetchAllData("http://localhost:3000/products"))
    }, [dispatch])

    return (
        <>
            <h1 className='flex flex-row justify-center text-4xl md:text-5xl font-bold underline underline-offset-8 mt-10'>ITEMS IN SHOP</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:m-10 md:p-10 m-5 p-5'>
                {product.data.map(({ id, name, detail, price, imageUrl }) => {
                    return (
                        <div className='border-8 border-gray-500 md:p-5 p-3 m-3 md:m-5 grid grid-cols-1 gap-5 items-center justify-center text-center' key={id}>
                            <img src={imageUrl} alt={name} height={200} width={200} />
                            <div className='flex flex-col space-y-3 items-center justify-center'>
                                <h3 className='text-lg'>{detail}</h3>
                                <p>{price} INR</p>
                                {!cart.cartProductIds.includes(id) && (<button className='bg-green-500 px-3 py-2 rounded-lg hover:bg-blue-500' onClick={() => dispatch(addToCart(id))}>Add to Cart</button>)}
                                {cart.cartProductIds.includes(id) && (<button className='bg-red-500 px-3 py-2 rounded-lg hover:bg-blue-500' onClick={() => dispatch(removeFromCart(id))}>Rempve From Cart</button>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home