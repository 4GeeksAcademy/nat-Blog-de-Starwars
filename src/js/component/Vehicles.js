import React, {useState, useEffect } from "react";
import Slider from "react-slick";


export const Vehicles = () =>{
    const [vehicles, setVehicles] = useState([
        {
            name: "",
            model: "",
            vehicle_class: "",
            _id:""
        }
    ]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles/")
            .then((res) => res.json())
            .then((data) => {
                setVehicles(data.results);
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
                vehicles
            </h1>
            <Slider {...settings}>
            {vehicles.map((vehicle, index) => (
                
                <div className="card  border-dark mb-3 " style={{ width: '18rem' }} key={index}>
                    <img src="#" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p className="card-text">{`Description: ${vehicle.model}`}</p>
                        <p className="card-text">{`Gender: ${vehicle.vehicle_class}`}</p>
                        <a href="#" className="btn btn-primary">More information</a>
                        <button className="btn justify-content-md-end">❤️</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
   
}