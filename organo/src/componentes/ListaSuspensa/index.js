// Importação do arquivo CSS que contém os estilos para a componente
import './ListaSuspensa.css'

// Definição da componente ListaSuspensa como uma função que recebe props como parâmetro
const ListaSuspensa = (props)  => {

    // Retorno da componente, que consiste em um elemento "div" contendo um "label" e um "select" com opções dinâmicas
    return(
        <div className="lista-suspensa"> 
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                {/* Loop que percorre os itens da propriedade "itens" e cria uma opção "option" para cada um */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

// Exportação da componente como padrão
export default ListaSuspensa
