import './App.css';
import React from 'react';
import DadJoke from './components/DadJoke';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    };
  }

  // Existem duas formas de se trabalhar com requisições em React...
  // 1º...
  // fetchCharacters = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({characters: data.results});
  //     });
  // };

  // 2º Forma...
  async componentDidMount() {
    // this.fetchCharacters();
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json();
    this.setState({characters: data.results});
  };

  render() {
    // const { characters } = this.state;
    return (
      // <div className="App">
      //   <h1>Rick and Morty Characters:</h1>
      //   <div className="body">
      //     {characters.map(({name, image}) => {
      //       return (
      //         <div className="container" key={name}>
      //           <h3>{name}</h3>
      //           <img src={image} alt={name} />
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>
      <DadJoke /> // Conteúdo da aula: Renderização condicional e atualização de arrays no estado
    );
  }
}

export default App;

// Código exemplo da aula 'Requisições e componentDidMount', aonde fazemos a renderização de uma API de piadas

// import React from 'react';

// class DadJoke extends React.Component {
//   constructor() {
//     super();

//     this.saveJoke = this.saveJoke.bind(this);

//     this.state = {
//       jokeObj: undefined,
//       loading: true,
//       storedJokes: [],
//     }
//   }

//   async fetchJoke() {
//     const requestHeaders = { headers: { Accept: 'application/json' } }
//     const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
//     const requestObject = await requestReturn.json();
//     this.setState({
//       jokeObj: requestObject,
//     })
//   }

//   componentDidMount() {
//     this.fetchJoke();
//   }

//   saveJoke() {
//     //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
//   }

//   render() {
//     const { storedJokes } = this.state;
//     const loadingElement = <span>Loading...</span>;

//     return (
//       <div>
//         <span>
//           {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
//         </span>

//       {
//         /*
//         Aqui vamos construir nossa lógica com uma renderização condicional
//         do nosso componente Joke, a ideia é renderizar um loading enquanto
//         esperamos a nossa requisição de piadas finalizar.

//         <p>RENDERIZAÇÃO CONDICIONAL</p>
//         */
//       }

//       </div>
//     );
//   }
// }

// export default DadJoke;

