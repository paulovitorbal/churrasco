import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';

const App = () => {
	return (
		<div className="section">
			<SearchBar />
			<h2 className="subtitle">Histórico</h2>
			
		</div>
	);
} 

ReactDOM.render(
  <App />,
  document.getElementById('inputBox')
); 