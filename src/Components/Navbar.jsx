import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let cart_item = useSelector(store=>store.cartStore.cart_items)
    let count = cart_item.length 
    return (
        <>
            <ul className="nav justify-content-center fs-4 bg-dark">
                <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white position-relative" to="/cart">Cart
                    {
                        count>0&&
                        <span className="position-absolute top-25 start-100 translate-middle badge text-bg-secondary rounded rounded-square">{count}</span>
                    }
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar