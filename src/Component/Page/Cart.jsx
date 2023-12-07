import React from 'react'
import { useCartcontext } from '../../Context/CartContext'
import CartProductItem from './CartProductItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from './FormatPrice';
const Cart = () => {
  const {Cart, Allclear, total_price,shooping_fee}= useCartcontext();
    console.log("Cart", Cart)

  return (
    <div>
       <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
           {
            Cart.map((curElem)=>{
              return <CartProductItem  key={curElem.id} {...curElem}/>

            })
           }
        </div>
        <hr />
        <div className="col-md-12 d-flex justify-content-between">
          <NavLink to="/"><button className='btn btn-outline-primary'>Continue-Shopping</button></NavLink>
          
          <button className='btn btn-outline-danger' onClick={()=>Allclear()}>All-Clear</button>
        </div>
          <div className="bor">
            <p> subTotal: <FormatPrice price={ total_price} /></p>
            <p>Suphing fee: <FormatPrice price={shooping_fee} /></p>
            <p>Total: <FormatPrice price={total_price+shooping_fee} /></p>
          </div>


       </div>


    </div>
  )
}

export default Cart