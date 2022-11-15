import React from "react";
import { Fragment } from "react";

import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Sidebar</h1>
      </header>
      <main className={styles.main}> {children} </main>
      <footer className={styles.footer}> A to footer! </footer>
    </Fragment>
  );
};

export default Layout;
