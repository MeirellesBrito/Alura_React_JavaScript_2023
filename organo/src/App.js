// Importação dos componentes Banner e Formulario, que estão localizados nos arquivos './componentes/Banner/Banner' e './componentes/Formulario', respectivamente
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario'
import Time from './componentes/Time';

// Definição da função App, que não recebe parâmetros
function App() {

  const times = [
    {
      nome: 'Programacao',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'front-End',

      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovaxao e Gestao',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  } 



  // Retorno da função, que consiste em uma div contendo os componentes Banner e Formulario
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado= {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      
      
    </div>
  );
}

// Exportação da função App como padrão
export default App;
