import logo from './logo.svg';
import './App.css';
import Esquerda from '../src/componentes/ladoEsquerdo/ConteudoLateralEsquerda';
import Central from '../src/componentes/centro/ConteudoCentral'
import Direita from '../src/componentes/ladoDireito/ConteudoLateralDireita'
function App() {
  return (
    <>
      <Esquerda />
 
     <Central/>

      <Direita/>
    </>
  );
}

export default App;
