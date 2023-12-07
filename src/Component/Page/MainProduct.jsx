import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from './FormatPrice';
const MainProduct = (curElem) => {
    const {id, name, image, price, category } = curElem;
    
  return (
    <div>
              <NavLink to={`/singleProduct/${id}`}>
                <div className="container   ">
                    <div className=''>
                        <div key={id}>
                            <figure>
                            <img src={image} alt={name} width={200} />
                            <figcaption className='text-dark cat'>{category}</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5 className='text-dark text-decoration-none'>{name}</h5>
                        <p className='text-dark text-decoration-none'> <FormatPrice price={price}/></p>
                    </div>

                </div>
            </NavLink>

    </div>
  )
}

export default MainProduct