import React from 'react'
import style from './Resturantdemo.module.css'
import rasturantImage from '../../../../public/images/hero-bg.avif'

export const Resturantdemo = () => {
  return (
    <div className={style.container}>
        <div className={style.left}>
            <img src={rasturantImage} alt="rasturant-image" />
        </div>
        <div className={style.right}>
            <h1 className={style.heading}>
                Discover a Destination Where Comfort, Luxury, and Culinary Excellence Come Together
            </h1>
            <div className={style.para}>
                Experience the perfect blend of comfort and flavor at our hotel and restaurant. From cozy stays to gourmet meals, we cater to your every need with unmatched hospitality.
                Experience the perfect blend of comfort and flavor at our hotel and restaurant.
            </div>
            <div className={style.btn}>
                <button>Get In Touch</button>
            </div>
        </div>
    </div>
  )
}
