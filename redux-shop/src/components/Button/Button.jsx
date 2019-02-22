import React from 'react';
import classnames from 'classnames';

import styles from './button.module.css';

function Button (props) {
  const { as, className, ...rest } = props;
  const ElementType = (as || 'button');

  return (
    <ElementType className={classnames(styles.button, className)} {...rest} />
  )
};

export default Button