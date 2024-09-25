import React from 'react'
import MainCarousel from './HomeCarousel/MainCarousel'
import ProductCarousel from './ProductSection/ProductCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <ProductCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <ProductCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <ProductCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
      </div>
    </div>
  )
}

export default HomePage
