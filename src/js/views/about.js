import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const About = () => {
    const { id } = useParams(); // Obtener el ID de la URL
	const { store, actions } = useContext(Context);

    return (
        <>
        <h1>about</h1>
        </>

    )
}