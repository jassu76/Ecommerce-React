import React from 'react'

const Hero = ({MyData}) => {
     const {name }= MyData
    return (
        <div> <div className="container-fluid">
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-6 d-flex flex-column justify-content-center py-2">
                        <h2>{name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ad praesentium nihil modi impedit perferendis, numquam eos. Repudiandae, sequi aut.</p>
                        <div>
                            <button className='btn btn-outline-dark bg-primary rounded-pill'>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/Hero.jpeg" alt="" className='roundeds' width="100%" />
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Hero