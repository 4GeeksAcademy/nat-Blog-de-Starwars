import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import Slider from "react-slick";

export const Characters = () => {

    const { store, actions } = useContext(Context);

    const [characters, setCharacters] = useState([
        {
            gender: "",
            name: "",
            description: "",
            _id:""
        }
    ]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
            })
            .catch((err) => console.error(err));
    }, []);


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
    
   
    return (
        <div className=" container m-5 ">
            <h1>Characters</h1>
            <Slider {...settings} >
            {characters.map((character, index) => (
                
                <div className="card  border-dark mb-3 " style={{ width: '18rem' }} key={index}>
                    <img src="#" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">{`Description: ${character.description}`}</p>
                        <p className="card-text">{`Gender: ${character.gender}`}</p>
                        <a href="#" className="btn btn-primary">More information</a>
                        <button onClick={() => actions.addToFavorites(character)} className="btn justify-content-md-end">❤️</button>
                    </div>
                </div>
            ))}
            </Slider>

        </div>
    );
};