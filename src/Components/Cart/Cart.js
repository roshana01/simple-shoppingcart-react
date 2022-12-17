import React, { useContext } from 'react'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import './Cart.css'
import produtsContext from "../../Context/ProductsContext";

export default function Cart() {
    const contextData = useContext(produtsContext)
    return (
        <aside className={`bag-sidebar ${contextData.isShowCart ? 'active' : ''}`}> {/* add active class to show bag sidebar */}
            <h3 className="bag-title">
                <span>
                    <BsBag />
                    Bag
                </span>
                <span>
                    <AiOutlineClose className='close-icon' onClick={() => {
                        contextData.setIsShowCart(false)
                    }} />
                </span>
            </h3>
            <div className="row bag-wrapper">

                {contextData.userCart.map((products) => (

                    <div className='col-12 mt-5'>
                        <div className='card py-3 px-3'>
                            <div className='col-12 text-center'>
                                <img src="/images/1.jpg" alt="Product Image" className='cart-img-top w-75' />
                            </div>
                            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                                <p className="card-text">{products.title}</p>
                                <p className="price">{products.price}</p>
                                <br />
                                <a href="#" className='btn btn-danger'>Buy</a>
                                <a href="#" className='btn btn-outline-dark mt-3 text-capitalize'>
                                    More Information
                                </a>
                                <p className="number">{products.count}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}
