import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../img/logo.png';

function Header({ showCheatSheet, setShowCheatSheet }) {
	return (
		<div className={styles.header}>
			<h1 className={styles.headerTitle}>
				<img className={styles.logo} src={logo} alt="markdown logo" /> Markdown Previewer
			</h1>
			<div onClick={() => setShowCheatSheet(!showCheatSheet)} className={styles.dropdown}>
				Cheat Sheat
				<span className={`${styles.triangle} ${showCheatSheet ? styles.open : ''}`}>&#9660;</span>
			</div>
		</div>
	);
}

export default Header;
