import './App.css';
import fapeLogo from './imagenes/Farmacias_Peruanas.svg'
import ListaEnunciados from './Componentes/ListaEnunciados.js'
import Waiting from "./Componentes/Waiting";

function App() {

  return (
      <div className="aplicacion-chat">
        <div className='fape-logo-contenedor'>
          <img src={fapeLogo} className='fape-logo' />
        </div>
        <Waiting />
        <div className='charla-ticket-principal'>
            <ListaEnunciados></ListaEnunciados>
        </div>
      </div>
  );

}

export default App;
