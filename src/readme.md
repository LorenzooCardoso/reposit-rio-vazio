# Lista de Artistas e Bandas

Este projeto é um exemplo de uma aplicação React que permite adicionar pares de artistas, bandas e suas respectivas funções a uma lista ordenada. A aplicação utiliza Context API para gerenciar o estado globalmente e CSS para estilização.

## Estrutura do Projeto

  - `src/`
  - `App.jsx`
  - `ListaContext.jsx`
  - `lista.jsx`
  - `lista.css`

## `App.jsx`
 
<h3> O arquivo App.jsx é o ponto de entrada do seu aplicativo React. Ele tem as seguintes responsabilidades:

- Importar Componentes e Contexto: Importa os componentes necessários e o contexto do provedor.
- Envolver o Aplicativo com o Provedor: O ListaProvider envolve o componente Lista, permitindo que ele e seus componentes filhos acessem o contexto globalmente.

## `ListaContext.jsx`

<h3> O arquivo ListaContext.jsx define o contexto e o provedor para gerenciar o estado da lista de artistas, bandas e funções. Suas responsabilidades incluem:

- Criar o Contexto: Define um contexto utilizando o createContext do React.
Provedor de Contexto: 
- O ListaProvider é um componente que utiliza o useState para gerenciar o estado da lista e fornece a função addItem para adicionar novos itens. 
- O provedor encapsula os componentes filhos e disponibiliza o estado e as funções através do contexto.

## `lista.jsx`

<h3> O arquivo lista.jsx é o componente que consome o contexto e exibe a lista de artistas, bandas e funções. Suas responsabilidades incluem:

- Consumir o Contexto: Utiliza o useContext para acessar os dados e funções fornecidas pelo ListaProvider.
- Gerenciar Entradas: Mantém estados locais para os campos de entrada de nome, banda e função.
- Adicionar Itens: Contém a lógica para adicionar novos itens à lista, utilizando a função addItem do contexto.
- Renderizar a Lista: Renderiza a lista ordenada de itens, incluindo nome, banda e função, e exibe os campos de entrada e o botão para adicionar novos itens.

## `lista.css`
<h3> O arquivo lista.css contém as estilizações para os componentes. Suas responsabilidades incluem:

- Estilizar o Contêiner: Define o layout principal do componente, centrando o conteúdo e adicionando espaçamento.
- Estilizar Títulos e Listas: Adiciona estilos ao título e à lista ordenada, incluindo margens, tamanhos de fonte e cores.
- Estilizar Itens da Lista: Aplica estilos aos itens individuais da lista, como fundo, margens, padding, bordas arredondadas e sombras.
- Estilizar Grupo de Entradas: Define o layout e os estilos para os campos de entrada e botão, incluindo tamanhos, bordas, cores e estados de hover.

## `Como Funciona`
- Inicialização: O aplicativo é inicializado a partir do App.jsx, que envolve o componente Lista com o ListaProvider.

- Gerenciamento de Estado Global: O ListaProvider em ListaContext.jsx gerencia o estado global da lista e fornece a função addItem para adicionar novos itens.
- Consumo de Contexto: O componente Lista em lista.jsx consome o contexto para acessar a lista e a função addItem, gerenciando as entradas do usuário e a lógica de adição de itens.
- Renderização e Estilização: Os itens da lista são renderizados dinamicamente conforme adicionados, e a estilização é aplicada através do arquivo lista.css para melhorar a aparência visual do aplicativo.
- Essa estrutura permite adicionar dinamicamente pares de artistas, bandas e funções a uma lista ordenada, com um gerenciamento de estado eficiente e uma interface estilizada.