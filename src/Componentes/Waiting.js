import React, {useEffect, useState} from "react";
import '../hojas-de-estilo/Waiting.css'
import Enunciado from "./Enunciado";
function Waiting(){

    const [bienvenida, setBienvenida] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBienvenida(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return(
        <div className="chat-container">
            {
                bienvenida ? (
                    <Enunciado
                            content={ 'Hola, soy el Asistente de HelpDesk ' }
                            assistant={true}
                    />
                ):
                <>
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                </>


            }

        </div>
    );
}
export default Waiting