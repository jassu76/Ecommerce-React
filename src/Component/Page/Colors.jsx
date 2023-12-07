import React from 'react'
import { useState } from 'react'
import '../Page/Header/Product.css'
import { NavLink } from 'react-router-dom';
import CardAmount from './CardAmount';
import { FaCheck } from "react-icons/fa";
import { useCartcontext } from '../../Context/CartContext';


const Colors = ({ product }) => {

 const {addCart}= useCartcontext();

  console.log("color", product)
 
 

  
  const { id, colors, stock } = product

  const [color, setColor] = useState(colors[0])

  const [amount, setAmount] = useState(1)

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }

  return (
    <div>
      <div>
        {
          colors.map((curElem, id) => {
            return <button key={id} style={{ backgroundColor: curElem }} className={colors === curElem ? "btn-circle active" : "btn-circle"} onClick={() => setColor(curElem)}>
              {color === curElem ? <FaCheck className='text-white' /> : null}  </button>
          })
        }
      </div>


      <div>
        <CardAmount amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
      </div>

     
        <NavLink to="/cart" onClick={()=>addCart(id,color,amount,product)}>
          <button className='btn btn-outline-primary'>Add to Cart</button>
        </NavLink>
      
    </div>
  )
}

export default Colors