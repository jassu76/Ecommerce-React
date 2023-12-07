import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
const CardAmount = ({amount, setIncrease, setDecrease}) => {
        
  return (
    <div>
        <div>
            <button onClick={()=>setDecrease()} className='border-0 p-2 bg-white'>
            <FaMinus />
            </button>
            <span className='fs-3'>{amount}</span>
            <button onClick={()=>setIncrease()} className='border-0 p-2 bg-white'>
            <FaPlus />
            </button>
        </div>
    </div>
  )
}

export default CardAmount