// Importação do arquivo CSS que contém os estilos para a componente
import './CampoTexto.css'

// Definição da componente CampoTexto como uma função que recebe um objeto props como parâmetro
const CampoTexto = (props) => {

    // Retorno da componente, que consiste em um div contendo um label e um input
    return (
        <div className="campo-testo">
            <label>
                {props.label} 
            </label>
            <input required={props.obrigatorio}  placeholder={props.placeholder}/>
        </div>
    )
}

// Exportação da componente como padrão
export default CampoTexto
