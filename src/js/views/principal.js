import React from "react";

import { Characters } from "../component/Characters";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";

export const Principal = () => {
    return (
    <div className="principal m-3   ">
        <Characters />
        <Planets />
        <Vehicles />
    </div>
    )
}