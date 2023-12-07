import React from 'react'

import '../Page/Header/Product.css'
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Page/FormatPrice'
import CardAmount from './CardAmount';
import { useCartcontext } from '../../Context/CartContext';
const CartProductItem = ({id,name,image,price,color,amount}) => {
       
    const {removeItem,setDecrease,setIncrease} = useCartcontext();

   return (
        <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between">
                        <NavLink to={`/singleproduct/${id}`}>
                        <figure>
                            <img src={image} alt={name} width={50} />
                        </figure>
                        </NavLink>
                        <div>
                            <FormatPrice price={price} />
                        </div>
                        <div>
                        <CardAmount amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)} />
                        </div>
                        <div>
                            <FormatPrice price={price*amount} />
                        </div>
                        <div>
                            <NavLink onClick={()=>removeItem(id)}>
                            <MdDelete className='fs-2 text-danger' />
                            </NavLink>
                        </div>
                    </div>

                </div>
              </div>

        </div>
    )
}

export default CartProductItem