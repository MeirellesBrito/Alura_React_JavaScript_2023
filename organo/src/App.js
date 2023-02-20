// Importação dos componentes Banner e Formulario, que estão localizados nos arquivos './componentes/Banner/Banner' e './componentes/Formulario', respectivamente
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario'
import Time from './componentes/Time';

// Definição da função App, que não recebe parâmetros
function App() {
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  } 



  // Retorno da função, que consiste em uma div contendo os componentes Banner e Formulario
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado= {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programacao"/>
      <Time nome="frontend"/>
      <Time nome="Data Science"/>
      <Time nome="fDevops"/>
    </div>
  );
}

// Exportação da função App como padrão
export default App;
