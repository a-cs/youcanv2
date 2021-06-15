/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import styles from './NavHeader.module.css';

function NavHeader() {
  return (
    <header className={styles.navHeader}>
      <nav className={styles.navbar}>
        <div id={styles.logo}>
          <Link href="/">
            <a>
              <h1>YOU CAN</h1>
              <h2>MOVEMENT</h2>
            </a>
          </Link>
        </div>

        <div className={styles.space} />

        <div className={styles.navItems}>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/community">Comunidade</Link>
            </li>
            <li>
              <Link href="/about">Quem Somos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
