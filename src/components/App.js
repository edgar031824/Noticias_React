import React, { Component } from 'react';
import Header from './Header';
import Noticias from './Noticias';
import Formulario from './Formulario';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noticias: []
    }
  }

  componentDidMount() {
    this.consultarNoticias();
  }
  consultarNoticias = (isbValue = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${isbValue}&apiKey=b9e2cb8530ff40d7a019e22a3756fcb5`

    fetch(url)
      .then(response => {
        return response.json()
      }
      ).then(response => {
        this.setState({
          noticias: response.articles
        })
      })
  }
  render() {
    return (
      <div className="contenedor-app">
        <Header titulo="Noticias" />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
