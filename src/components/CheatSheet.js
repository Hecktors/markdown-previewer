import React from 'react';
import styles from '../styles/CheatSheet.module.css';

function CheatSheet({ showCheatSheet }) {
	const content = [
		<div key="0" className={styles.definitionBlock}>
			<h4 className={styles.paragraphHeader}>headers</h4>
			<p className={styles.codeblock}>
				# Header 1<br />
				## Header 2<br />
				### Header 3<br />
				#### Header 4<br />
				##### Header 5<br />
				###### Header 6
			</p>
		</div>,

		<div key="2" className={styles.definitionBlock}>
			<h4 className={styles.paragraphHeader}>emphasis</h4>
			<p className={styles.codeblock}>
				*italic*<br />
				<br />
				**bold**<br />
				<br />
				***bold & italic***<br />
				<br />
				~~strikethrough~~
				<br />
			</p>
		</div>,
		<div key="1" className={styles.definitionBlock}>
			<h4 className={styles.paragraphHeader}>code blocks</h4>
			<p className={styles.codeblock}>
				`single line` <br />
				<br />
				```<br />
				multi line<br />
				code block<br />
				```
			</p>{' '}
			<br />
		</div>,

		<div key="3" className={styles.definitionBlock}>
			<h4 className={styles.paragraphHeader}>lists</h4>
			{/* <h5 className={styles.paragraphSubHeader}>Unordered</h5> */}
			<p className={styles.codeblock}>
				* unordered list<br />
				* unordered list<br />
				&nbsp;&nbsp;&nbsp;* ul list
			</p>
			{/* <h5 className={styles.paragraphSubHeader}>Ordered</h5> */}
			<p className={styles.codeblock}>
				1. ordered list<br />
				2. ordered list<br />
				&nbsp;&nbsp;&nbsp;* ul list
			</p>
		</div>,

		<div key="4" className={styles.definitionBlock}>
			<div className={styles.definitionSubBlock}>
				<h4 className={styles.paragraphHeader}>images</h4>
				<p className={styles.codeblock}>![Alt Text](url)</p>
			</div>
			<div className={styles.definitionSubBlock}>
				<h4 className={styles.paragraphHeader}>links</h4>
				<p className={styles.codeblock}>[link Text](url)</p>
			</div>
		</div>,

		<div key="5" className={styles.definitionBlock}>
			<div className={styles.definitionSubBlock}>
				<h4 className={styles.paragraphHeader}>block quotes</h4>
				<p className={styles.codeblock}>&gt; Block Quote</p>
			</div>
			<div className={styles.definitionSubBlock}>
				<h4 className={styles.paragraphHeader}>horizontal rule</h4>
				<p className={styles.codeblock}>___</p>
			</div>
		</div>,

		<div key="6" className={styles.definitionBlock}>
			<h4 className={styles.paragraphHeader}>table</h4>
			<p className={styles.codeblock}>
				th | th | th <br /> ---| ---|--- <br /> td | td | td <br />
			</p>
		</div>
	];

	return <div className={`${styles.CheatSheet} ${showCheatSheet ? styles.showCheatSheet : ''}`}>{content}</div>;
}

export default CheatSheet;
