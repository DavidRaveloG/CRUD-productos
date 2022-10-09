import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
export default function header() {
  
  return (
    <div className={styles.head}>
      <nav className={styles.first}>
        <p className={styles.title}><Link href="/">Entidad financiera</Link></p> 
        <ul className={styles.links}>
          <li>
            <Link href="/">Nosotros</Link>
          </li>
          <li>
            <Link href="/CRUD">Productos</Link>
          </li>
          <li>
            <Link href="/">Idioma</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.login}>
        <div className={styles.login_link}>
          <Link href="/Login">Iniciar sesión</Link>
        </div>  
      </div>
    </div>
  );
}
