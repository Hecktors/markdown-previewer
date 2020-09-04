import React, { useState } from 'react';
import marked from 'marked';
import styles from '../styles/Main.module.css';
import MainComponent from './MainComponent';

const defaultString = `# Markdown Previewer
## A Freecodecamp Frontend Project
\t
\t

* Write \`markdown\` code in the **editor** panel   
* See the *result* in **previewer**
* Get a hit from the **cheat sheet**
\t
\t

\`\`\`
Find out more about
Fcc and the project
\`\`\`

[![Alt Text](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/250px-FreeCodeCamp_logo.png)](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)


>May the course be with you
`;

function Main() {
	const [ input, setInput ] = useState(defaultString);

	let markdown = marked(input.replace(/\t/g, '<br/>'), {
		gfm: true,
		breaks: true
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const editorContent = (
		<textarea id="editor" className={styles.textarea} value={input} onChange={handleChange} autoFocus />
	);
	return (
		<div className={styles.Main}>
			<MainComponent title="editor" content={editorContent} setInput={setInput} />
			<MainComponent title="preview" content={markdown} />
		</div>
	);
}

export default Main;
