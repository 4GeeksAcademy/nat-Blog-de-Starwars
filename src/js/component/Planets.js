import React from "react";

export const Planets = () =>{
    return (
        <div className="container m-5">
            <h1>
                Planets
            </h1>
            <div className="card" style= {{ width: '18rem' }}>
                <img src="#" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button className="btn justify-content-md-end">❤️</button>
                </div>
            </div>
        </div>
    )
   
}