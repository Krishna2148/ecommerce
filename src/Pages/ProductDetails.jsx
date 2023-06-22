import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const ProductDetails = () => {
    let { id } = useParams()

    let [product, setProduct] = useState({})
    let [Quantity, setQuantity] = useState(1)
    let dispatch = useDispatch()

    let navigate = useNavigate()
    let cart_items = useSelector(store => store.cartStore.cart_items)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
    }), [id]


    const handleSubmit = (e) => {
        e.preventDefault()

        let itemExists = cart_items.find(item => item.id === product.id)
        if (itemExists) {
            Swal.fire({
                title: "Alert",
                text: "Item already in cart. Do you want to add more?",
                icon: "Warning",
                showCancelButton: true})


                .then(result => {
                    if (result.isConfirmed) {
                        let new_quantity = itemExists.quantity + Quantity
                        if (new_quantity > itemExists.stock) {
                            Swal.fire("Alert", "Maximum quantity reached. try reducing quantity", "warning")
                        }
                        else {
                            let cart_item = {...itemExists,quantity: new_quantity}
                            dispatch({type:"UPDATE_CART", payload: cart_item})
                            Swal.fire({
                                title: "Congrates !",
                                text: "Your item quantity has been raised in cart. Continue shopping",
                                icon: "success",
                                showCancelButton: true,
                            })
                        }
                    }
                })
        }

        else {
            let cart_item = { ...product, quantity: Quantity, cart_id: Date.now() }
            dispatch({ type: "ADD_TO_CART", payload: cart_item })
            // Swal.fire("Congrates","Item added to cart.","success")

            Swal.fire({
                title: "Congratulations",
                text: "Your item successfully added",
                icon: "success",
                showCancelButton: true,
                cancelButtonColor: "#dd0011",
                cancelButtonText: "Go To Cart",
                confirmButtonText: "Continue Shopping",
                // timer: 2000
            })
                .then(result => {
                    if (result.isConfirmed) {
                        navigate('/')
                    }
                    else {
                        navigate('/cart')
                    }

                })

        }


    }


    return (
        <>

            <div className="container mx-auto my-3">
                <div className="row align-item-center">
                    <div className="col-md-6">{
                        product && product.images &&
                        <img src={product?.images[0]} alt="" className='w-100' />
                    }
                        <div className="d-flex">
                            {
                                product && product.images &&
                                product.images.map(img => {
                                    return <img src={img} alt="" style={{ height: '70px' }} />
                                })
                            }
                        </div>
                    </div>


                    <div className="col-md-6">

                        <h2>{product?.title}</h2>
                        <h3>${product.price}</h3>
                        <p>Product Details: {product.description}</p>
                        <h3>In Stock: {product.stock}</h3>

                        <h3>Rating: {product.rating}</h3>
                        <div className="d-flex w-50">
                            <h3>Quantity:</h3>
                            <input type="number" class="form-control ms-4" min={1} max={product.stock}
                                value={Quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>
                        <button className="btn btn-warning w-100 mt-3" onClick={handleSubmit}>
                            Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails