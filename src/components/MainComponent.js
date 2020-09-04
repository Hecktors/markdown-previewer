import React from 'react';
// import './MainComponent.css';
import styles from '../styles/MainComponent.module.css';

function MainComponent({ title, content, setInput }) {
	return (
		<div className={styles.MainComponent}>
			<div className={styles.header}>
				<div className={styles.headerText}>{title}</div>
				<div className={styles.headerBox}>
					{title === 'editor-component' && (
						<button onClick={() => setInput('')} className={styles.btnClear}>
							clear
						</button>
					)}
				</div>
			</div>
			{title === 'editor' ? (
				<div className={styles.content}>{content}</div>
			) : (
				<div className={styles.content} id={title} dangerouslySetInnerHTML={{ __html: content }} />
			)}
		</div>
	);
}

export default MainComponent;
