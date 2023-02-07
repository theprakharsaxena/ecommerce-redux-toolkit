import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { useSelector } from "react-redux"

const Navbar = () => {
    const {cartProductIds} = useSelector((state)=>state.cart)
    return (
        <div className='bg-blue-500 flex flex-row space-x-14 md:space-x-72 justify-center items-center font-semibold text-lg md:text-3xl p-3 md:p-5 bg-fixed'>
            <h1>Redux Toolkit Project</h1>
            <div className='flex flex-row space-x-5 md:space-x-10 text-white text-3xl'>
                <NavLink to="/"><FaHome /></NavLink>
                <NavLink className="flex flex-row" to="cart"><HiShoppingCart /><p className=' text-xs md:text-sm bg-black text-white rounded-full p-1'>{cartProductIds.length}</p></NavLink>
            </div>
        </div>
    )
}

export default Navbar