import React,{useState} from "react";
import EnunciadoForm from '../Componentes/EnunciadoForm.js'
import Enunciado from '../Componentes/Enunciado.js'
import {v4 as uuidv4} from "uuid";
function ListaEnunciados(){

    const [enunciados, setEnunciados] = useState([]);
    const [ticketOk, setTicketOk] = useState(false);

    const agregarEnunciado = async enunciado => {
        console.log("ListaEnunciados.agregarEnunciado")
        console.log(enunciado);
        if (enunciado.content.trim()) {
            console.log("Dentro del If")
            enunciado.content = enunciado.content.trim();
            const mensajes = [...enunciados, enunciado];
            setEnunciados(mensajes);
            console.log(enunciados);
        }
        enunciados.push(enunciado);
        console.log(enunciados)

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enunciados.map( objeto => {
                const {role,content} = objeto
                return {role,content};
            }))
        }

        try {
            const response = await fetch('http://localhost:8000/completions', options)
            const data = await response.json()
            console.log(data)
            console.log(data.choices[0].message)
            enunciados.push(data.choices[0].message)
            console.log(enunciados)

            if (data.choices[0].message.content.includes("Gracias por contactar al HelpDesk")){
                setTicketOk(true);
            }
        } catch (e) {
            console.error(e)
        }

        setEnunciados(enunciados)
        console.log("ListaEnunciados.agregarEnunciado:END")


    }

    return (
        <>
            {
                ticketOk ? (
                    <p>Gracias por contactar al HelpDesk. Hemos recibido su solicitud</p>
                ):
                    <>
                        <div className="enunciado-lista-contenedor">
                        {
                            enunciados.map( (enunciado) =>
                                <Enunciado
                                    key={enunciado.id ? enunciado.id : uuidv4()}
                                    id={enunciado.id}
                                    content={ enunciado.content}
                                    assistant={  enunciado.assistant ? enunciado.assistant :
                                        enunciado.role === "assistant"
                                    }

                                />
                            )
                        }
                    </div>
                        < EnunciadoForm
                            onSubmit={ agregarEnunciado }
                        />
                    </>
            }

        </>
    );
}
export default ListaEnunciados