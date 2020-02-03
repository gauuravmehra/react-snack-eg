/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/anchor-is-valid */

// @flow
import React from 'react';
import type { Node } from 'react';
// import { Anchor } from '@xt-pagesource/atomic-react-pattern-lib';
import { Link } from 'react-router-dom';
import styles from './NavBar.style';
import withStyles from '../../../lib/withStyles';
import type { Props } from './types';
// import { isApplicationLink } from '../../../utils/isApplicationLink';

const NavBar = ({ className, items, children }: Props): Node => (
  <div className={className}>
    {children || (
      <div className="navbar">
        {Array.isArray(items) &&
          items.map(({ label, href, subMenu }, key) => (
            <div key={key.toString()} className="sub-nav">
              <Link to={href || '#'}>
                {label}
              </Link>
              {Array.isArray(subMenu) && subMenu.length > 0 && (
                <div className="sub-nav-content">
                  <div className="sub-menu-list">
                    {subMenu.map((subMenuItem, index) => (
                      <Link to={subMenuItem.href} key={index.toString()}>
                        {subMenuItem.label}
                      </Link>
                    ))}
                  </div>
                  <div className="sub-menu-content">
                    <label>What can we help you find ? </label>
                    <div className="sub-menu-info">
                      <div>
                        <a href="#">Application Notes</a>
                      </div>
                      <div>
                        <a href="#">Product Selection Tool</a>
                      </div>
                      <div>
                        <a href="#">User Manuals</a>
                      </div>
                      <div>
                        <a href="#">Certificate of analysis</a>
                      </div>
                      <div>
                        <a href="#">Safety Data seats</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    )}
  </div>
);

NavBar.defaultProps = {
  items: [],
};

export default withStyles(NavBar, styles);

export { NavBar };
