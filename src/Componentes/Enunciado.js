import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineRobot } from "react-icons/ai";

import '../hojas-de-estilo/Enunciado.css'
function Enunciado( { id, content, assistant
                       } ) {
    return(
        <div className="mensaje-contenedor completada" >

            <div className="mensaje-contenedor-iconos">
                {
                    assistant ? <AiOutlineRobot className="assistant-icono"/> :
                                <AiOutlineUser className="user-icono"/>
                }
            </div>

            <div className="tarea-texto">
                {content}
            </div>

        </div>
    );
}
export default Enunciado