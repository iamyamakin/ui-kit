import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Icon extends PureComponent {
    render() {
        const { className, height, symbol, width } = this.props;
        const computedClassName = classnames(
            'icon',
            className
        );

        return (
            <svg
                className={ computedClassName }
                width={ width }
                height={ height }
                viewBox={ symbol.viewBox }>
                <use xlinkHref={ `#${symbol.id}` } />
            </svg>
        );
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    symbol: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Icon.defaultProps = {
    height: 24,
    width: 24,
};

export default Icon;
