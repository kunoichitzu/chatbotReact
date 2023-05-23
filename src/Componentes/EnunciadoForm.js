import React, {useRef, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import '../hojas-de-estilo/EnunciadoForm.css'

function EnunciadoForm(props) {

    const [input,setInput] = useState('');

    const inputRef = useRef(null);
    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        console.log('EnunciadoForm.manejarEnvio')
        e.preventDefault();

        const mensajeNuevo = {
            id: uuidv4(),
            content: input,
            role:"user",
            assistant: false
        };

        props.onSubmit(mensajeNuevo);

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    return (
        <form className="enunciado-formulario"
              onSubmit={manejarEnvio}
        >
            <input
                className="enunciado-input"
                type="text"
                ref={inputRef}
                placeholder="  Describe el incidente"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="enunciado-boton">
                ➢
            </button>
        </form>
    );
}
export default EnunciadoForm