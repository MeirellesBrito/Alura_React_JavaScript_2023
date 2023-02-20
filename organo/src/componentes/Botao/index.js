// Importação do arquivo CSS que contém os estilos para o componente Botao
import './Botao.css'

// Definição da componente Botao como uma função com um parâmetro "props"
const Botao = (props) => {
    // Retorno da componente, que consiste em um botão com o texto passado através do parâmetro "props"
    return(
        <button className="botao">
            {props.texto}
        </button>
    )
}

// Exportação da componente como padrão
export default Botao
