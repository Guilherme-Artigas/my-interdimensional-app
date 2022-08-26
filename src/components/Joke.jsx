import React from 'react';

class Joke extends React.Component {
  render() {
    const { jokeObj, saveJoke } = this.props;
    return (
      <div>
        <p>{jokeObj.Obj}</p>
        <button
          type="button"
          onClick={saveJoke}
        >
          Salvar Piada!
        </button>
      </div>
    );
  };
};

export default Joke;
