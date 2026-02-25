/**
 * Custom DocSidebar Desktop - Adds SearchBar at top of sidebar
 */
import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();
  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <div className={styles.sidebarSearch}>
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      </div>
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
