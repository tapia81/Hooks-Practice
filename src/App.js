import { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import './App.css';
export const currentContext = createContext('');

function App() {
	return (
		<currentContext.Provider value="Welcome">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</currentContext.Provider>
	);
}

export default App;
