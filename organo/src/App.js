// Importação dos componentes Banner e Formulario, que estão localizados nos arquivos './componentes/Banner/Banner' e './componentes/Formulario', respectivamente
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario'

// Definição da função App, que não recebe parâmetros
function App() {
  // Retorno da função, que consiste em uma div contendo os componentes Banner e Formulario
  return (
    <div className="App">
      <Banner />
      <Formulario/>
    </div>
  );
}

// Exportação da função App como padrão
export default App;
