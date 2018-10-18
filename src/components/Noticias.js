import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Noticias extends Component {
    render() {
        return (
            <div className="row">
                <TransitionGroup>
                    {this.props.noticias.map((noticia, index) => (
                        <CSSTransition classNames="fade" timeout={500} key={index}>
                            <Noticia noticia={noticia} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
};

export default Noticias;