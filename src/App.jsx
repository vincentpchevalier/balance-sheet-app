import { useState } from 'react';
import './App.css';
import BalanceSheet from './BalanceSheet';

const initialEntries = [
	{
		source: 'Salary',
		category: 'Job',
		balance: 1500,
	},
	{
		source: 'Rent',
		category: 'Housing',
		balance: -500,
	},
	{
		source: 'Groceries',
		category: 'Food',
		balance: -75,
	},
];

function App() {
	const [entries, setEntries] = useState(initialEntries);
	return (
		<div className="App">
			<h1>Balance Sheet</h1>
			<BalanceSheet entries={entries} />
		</div>
	);
}

export default App;
