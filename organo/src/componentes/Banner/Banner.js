// Importação do arquivo CSS que contém os estilos para o componente Banner
import './Banner.css';

// Declaração do componente Banner como uma função
function Banner() {
    // Retorno do componente Banner, que é um elemento header com uma imagem como filho
    return(
        <header className="banner">
            <img src="./imagens/banner.png" alt="o Banner principal da pagina"/>
        </header>
    );
}

// Exportação do componente Banner como padrão para que possa ser usado em outras partes da aplicação
export default Banner;
