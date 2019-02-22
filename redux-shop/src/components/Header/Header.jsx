import React from 'react'
import Link from '../Link'

import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.title} to='/'>Redux Shop</Link>
  </header>
)

export default Header;
