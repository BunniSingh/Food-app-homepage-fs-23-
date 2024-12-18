import React from 'react'
import { Nevbar } from './Nevbar/Nevbar'
import { Hero } from './Hero/Hero'
import { Resturantdemo } from './Resturant-demo/Resturantdemo'
import Resturantcard from './Resturant-review-card/Resturantcard'
import Footer from './Footer/Footer'

export const Homepage = () => {
  return (
    <>
        <Nevbar/>
        <Hero/>
        <Resturantdemo/>
        <Resturantcard/>
        <Footer/>
    </>
  )
}
