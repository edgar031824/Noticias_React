import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    categoriaRef = React.createRef();
    categoriaSeleccionada = (e) => {
        e.preventDefault();
        const sbValue = this.categoriaRef.current.value;

        this.props.consultarNoticias(sbValue);
    }
    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.categoriaSeleccionada}>
                        <h2>Noticias por categoria</h2>
                        <div className="col input-field s12 m8">
                            <select name="" id="" ref={this.categoriaRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business" defaultValue>Business</option>
                                <option value="entertainment" defaultValue>Entertainment</option>
                                <option value="health" defaultValue>Health</option>
                                <option value="science" defaultValue>Science</option>
                                <option value="sports" defaultValue>Sports</option>
                                <option value="technology" defaultValue>technology</option>
                            </select>
                        </div>
                        <div className="col s12 m4 input-field enviar">
                            <input type="submit" value="Buscar" className="btn amber darken-2" />
                        </div>

                    </form>
                </div>


            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
};

export default Formulario;