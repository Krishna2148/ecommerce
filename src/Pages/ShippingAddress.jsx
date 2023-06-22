import React from 'react'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const ShippingAddress = () => {

    const addressReducer = (state, event) => {
        return { ...state, [event.target.name]: event.target.value }
    }
    const [person, setPerson] = useReducer(addressReducer, {})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'SAVE_SHIPPING_INFO', payload: person })
        navigate('/paymentSuccess')
    }
    return (
        <>
            <div className="container d-flex bg-danger mt-3">
                <div className="container p-5 bg-secondary m-5 text-white" style={{ width: "50%" }}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={setPerson} id="name" />
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" name="address" onChange={setPerson} id="address" />
                    <label htmlFor="address">Em@il</label>
                    <input type="email" className="form-control" name="email" onChange={setPerson} id="email" />
                    <label htmlFor="address">Phone Number</label>
                    <input type="text" className="form-control" name="number" onChange={setPerson} id="number" />
                    <Link to="/cart" className="btn btn-success mt-3">Proceed To Payment</Link>
                </div>
                <div className="container p-5 " style={{width:"50%", width: "100%"}}>
                    <img src="/dig.jpg" alt=""  style={{height:"400px"}}/>
                </div>
            </div>
        </>
    )
}

export default ShippingAddress