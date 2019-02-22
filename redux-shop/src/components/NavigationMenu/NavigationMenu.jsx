import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '../Link';

import styles from './navigationMenu.module.css';

const NavigationMenu = ({
  categories, activeCategoryId, backNavigationLink,
}) => activeCategoryId != null
    ? (
      <nav className={styles.navigation}>
        {
          backNavigationLink
            ? (
              <Link className={styles.back} tabIndex={-1} to={backNavigationLink}>
                <i
                  className="material-icons"
                  aria-label="Go back"
                  role="button"
                  tabIndex={0}
                  aria-disabled="false"
                >
                  arrow_back
            </i>
              </Link>
            )
            : null
        }
        <div className={styles.categories}>
          {
            categories.map(c => (
              <Link
                key={c.id}
                className={classnames(styles.categoryLink, { [styles.active]: activeCategoryId === c.id })}
                to={`/category/${c.id}`}
              >
                {c.name}
              </Link>
            ))
          }
        </div>
        <Link className={styles.cart} to='/cart'>
          <i className="material-icons">shopping_cart</i>
        </Link>
      </nav>
    )
    : null;

NavigationMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  activeCategoryId: PropTypes.number,
  backNavigationLink: PropTypes.string,
}

export default NavigationMenu
