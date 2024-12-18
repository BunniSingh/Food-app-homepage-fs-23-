import React from 'react'
import style from './Hero.module.css'
export const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.left}>
            <h1 className={style.heading}>
                Let us find your <br />
                <span className={style.color}>Forever Food.</span>
            </h1>
            <p className={style.para}>
                "Welcome to GeekFoods, where every bite is a celebration! Explore our mouthwatering menu, crafted with fresh ingredients and love, and delivered straight to your doorstep. Your favorite flavors are just a click away!"
            </p>
            <div className={style.btn}>
                <a className={style['btn-first']} href="#">Search Now</a>
                <a className={style['btn-second']} href="#">Know more</a>
            </div>
        </div>
        <div className={style.right}></div>
    </div>
  )
}
