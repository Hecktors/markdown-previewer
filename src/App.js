import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CheatSheet from './components/CheatSheet';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	const [ showCheatSheet, setShowCheatSheet ] = useState(false);
	return (
		<div className="App">
			<Header showCheatSheet={showCheatSheet} setShowCheatSheet={setShowCheatSheet} />
			<CheatSheet showCheatSheet={showCheatSheet} />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
