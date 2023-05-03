import React, {useState} from 'react';
import {IDetailActors} from "../../../types/MovieInterfaces";
import {Link} from "react-router-dom";
import Slider from "react-slick"
import YssyKulskyVaib from "../../../assets/images/Yssyk-Kul.jpg"


interface ICast {
    cast: IDetailActors[]
}

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed:0,
    cssEase: "linear"
}

const Actors = ({cast}: ICast) => {
    return (
        <div className="container">
            <Slider {...settings}>

                {
                    cast.map(el => (
                        <Link to={`/movie-actors/${el.id}`}>
                            <div className="card-cast">

                                { el.profile_path ?
                                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                      width={200} alt=""/> : <img src={YssyKulskyVaib} width={200} alt=""/>}

                                <h4>{el.name}</h4>
                            </div>
                         </Link>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Actors;