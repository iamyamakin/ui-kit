import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Viewport extends PureComponent {
    render() {
        const { children, title } = this.props;

        return (
            <div className={ styles.viewport }>
                <h1 className={ styles.viewport__title }>
                    { title }
                </h1>
                { children }
            </div>
        );
    }
}

Viewport.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};

export default (story) => (<Viewport>{ story() }</Viewport>);

