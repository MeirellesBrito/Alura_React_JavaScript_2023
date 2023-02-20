// Importação dos componentes CampoTexto e ListaSuspensa, que estão localizados nos arquivos '../CampoTexto' e '../ListaSuspensa', respectivamente
import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

// Importação do arquivo CSS que contém os estilos para a componente
import './Fomulario.css';

// Definição da componente Formulario como uma função sem parâmetros
const Formulario = (props) => {

  
  // Array de strings com as opções para a ListaSuspensa
  
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  // Retorno da componente, que consiste em um formulário com vários campos, incluindo os componentes CampoTexto e ListaSuspensa
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true}
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o enderço da imagem"
          valor={imagem }
          aoAlterado={valor => setImagem(valor + ".png")} 
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

// Exportação da componente como padrão
export default Formulario;
