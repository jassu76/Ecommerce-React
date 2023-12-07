import React from 'react'
import Hero from './Header/Hero'
import FeatureData from './FeatureData'

const Home = () => {
    const Data = {
        name: "Apna Store"
    }
  return (
    <div>
         <Hero MyData={Data} />
         <FeatureData />
         
    </div>
  )
}

export default Home