import React from 'react'
import style from './Resturantcard.module.css'
let data = [
    {
        "name": "John Doe",
        "profile": "Food Blogger",
        "picture": 'https://i.pravatar.cc/300',
        "review": "Amazing service and delicious food! Highly recommend visiting."
    },
    {
        "name": "Sarah Smith",
        "profile": "Travel Enthusiast",
        "picture": 'https://i.pravatar.cc/300',
        "review": "The ambiance was perfect, and the meals were unforgettable!"
    },
    {
        "name": "Michael Brown",
        "profile": "Businessman",
        "picture": 'https://i.pravatar.cc/300',
        "review": "A great place for business meetings with excellent hospitality."
    },
    {
        "name": "Emily Davis",
        "profile": "Photographer",
        "picture": 'https://i.pravatar.cc/300',
        "review": "Beautiful interiors and delicious food made this a perfect experience."
    },
    {
        "name": "David Wilson",
        "profile": "Food Critic",
        "picture": 'https://i.pravatar.cc/300',
        "review": "Impressive menu and impeccable taste! Worth every penny."
    },
    {
        "name": "Sophia Taylor",
        "profile": "Designer",
        "picture": 'https://i.pravatar.cc/300',
        "review": "The presentation of the dishes was as amazing as the taste!"
    },
    {
        "name": "James Martinez",
        "profile": "Tech Enthusiast",
        "picture": 'https://i.pravatar.cc/300',
        "review": "A wonderful blend of traditional flavors with modern twists!"
    },
    {
        "name": "Olivia Anderson",
        "profile": "Event Planner",
        "picture": 'https://i.pravatar.cc/300',
        "review": "Great venue for hosting events, paired with excellent service."
    },
    {
        "name": "William Thomas",
        "profile": "Writer",
        "picture": 'https://i.pravatar.cc/300',
        "review": "The flavors, ambiance, and service made for an unforgettable experience."
    },
    {
        "name": "Emma Jackson",
        "profile": "Health Coach",
        "picture": 'https://i.pravatar.cc/300',
        "review": "Fresh ingredients and a healthy yet tasty menu—absolutely loved it!"
    }
]

const Resturantcard = () => {
    return (
        <div className={style.cards}>
            {
                data.map((ele, idx) => {
                    return (
                        <div key={idx} className={style.card}>
                            <div className={style["profile-info"]}>
                                <img src={ele.picture} alt="profile-picture" />
                                <div className={style["user-info"]}>
                                    <h3 className={style.name}>{ele.name}</h3>
                                    <p className={style.profile}>{ele.profile}</p>
                                </div>
                            </div>
                            <p className={style.review}>{ele.review}</p>  
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Resturantcard

