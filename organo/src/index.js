// Importação das bibliotecas React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importação do arquivo CSS que contém os estilos para a aplicação
import './index.css';

// Importação do componente App
import App from './App';

// Criação de uma nova raiz de renderização do React no elemento com id "root" do documento HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderização do componente App dentro de um componente React.StrictMode, usando a raiz criada anteriormente
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
