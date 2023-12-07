import React from 'react'

import { GiTireIronCross } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { FaCaretDown } from "react-icons/fa";
import '../Header/Header.css'
import { MyFilterContext } from '../../../Context/FilterContext';

import { useCartcontext } from '../../../Context/CartContext';
import { useAuth0 } from "@auth0/auth0-react";

const NAv = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const { total_item } = useCartcontext();
    const { filters: { category }, allfilterproduct, UpdateCategoryProduct } = MyFilterContext();
    console.log("allfilterproduct", allfilterproduct)



    const getProductCategory = (Data, property) => {
        let newValue = Data.map((curElem) => {
            return curElem[property]
        })

        return (newValue = [...new Set(newValue)])


    }

    // we need unique data



    const categoryonlyProduct = getProductCategory(allfilterproduct, "category");
    console.log("categoryProduct", categoryonlyProduct)




    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand">
                        <img src="images/mylogo.png" alt="" width={50} />
                    </NavLink>
                    <button className="navbar-toggler border-0 text-dark fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        <GiTireIronCross />

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex ms-auto">
                            <input className="form-control me-2 input " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active icon  btn " aria-current="page" to="/" >Home</NavLink>
                            </li>


                            <li className="nav-item">

                                <div className="dropdown">
                                    <NavLink className="dropbtn nav-link icon btn active" to="/Product" >Product
                                        <FaCaretDown />
                                    </NavLink>
                                    <div className="dropdown-content">
                                        <NavLink className="men d-flex flex-column gap-1" >
                                            {
                                                categoryonlyProduct.map((curElem, index) => {
                                                    console.log("curElem", curElem)
                                                    return (
                                                        <button key={index}
                                                            type="submit"
                                                            name='category'
                                                            value={curElem}
                                                            onClick={UpdateCategoryProduct} className='btn btn-outline-primary border-0' >
                                                            {curElem}
                                                        </button>
                                                    )
                                                })
                                            }

                                        </NavLink>



                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link icon btn active " to="/About" >About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link icon btn active  " to="/Contect" >Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link icon btn  d-flex  " to="/cart">
                                    <TiShoppingCart className='fs-4' />
                                    <span >{total_item}</span>
                                </NavLink>
                            </li>
                            <li>
                           <li>
                            
                           </li>
                                {
                                    isAuthenticated ? <li>
                                        <button className='btn btn-outline-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button>   </li> : <li>
                                        <button className='btn btn-outline-primary' onClick={() => loginWithRedirect()}>Log In</button>

                                    </li>
                                }
                            </li>




                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NAv