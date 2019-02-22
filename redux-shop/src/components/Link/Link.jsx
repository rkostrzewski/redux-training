import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import classnames from 'classnames';

import styles from './link.module.css'

const Link = ({ className, ...rest }) => (
  <RouterLink className={classnames(styles.link, className)} {...rest} />
)

export default Link