import React, {useState, useEffect } from "react";
import Slider from "react-slick";


export const Planets = () =>{
    const [planets, setPlanets] = useState([
        {
            name: "",
            population: "",
            climate: "",
            _id:""
        }
    ]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/")
            .then((res) => res.json())
            .then((data) => {
                setPlanets(data.results);
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
        <div className="container m-5">
            <h1>
                Planets
            </h1>
            <Slider {...settings}>
            {planets.map((planet, index) => (
                
                <div className="card  border-dark mb-3 " style={{ width: '18rem' }} key={index}>
                    <img src="#" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{`Description: ${planet.population}`}</p>
                        <p className="card-text">{`Gender: ${planet.climate}`}</p>
                        <a href="#" className="btn btn-primary">More information</a>
                        <button className="btn justify-content-md-end">❤️</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
   
}