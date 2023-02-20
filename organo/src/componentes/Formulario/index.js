// Importação dos componentes CampoTexto e ListaSuspensa, que estão localizados nos arquivos '../CampoTexto' e '../ListaSuspensa', respectivamente
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

// Importação do arquivo CSS que contém os estilos para a componente
import './Fomulario.css';

// Definição da componente Formulario como uma função sem parâmetros
const Formulario = () => {

  // Array de strings com as opções para a ListaSuspensa
  const times=[
    'Programacao',
    'front-End',
    'Data science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovaxao e Gestao'
  ];

  // Retorno da componente, que consiste em um formulário com vários campos, incluindo os componentes CampoTexto e ListaSuspensa
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o enderço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

// Exportação da componente como padrão
export default Formulario;
