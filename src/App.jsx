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

	const totalBalance = entries.reduce((acc, entry) => acc + entry.balance, 0);

	return (
		<div className="App">
			<h1>Balance Sheet</h1>
			<BalanceSheet entries={entries} totalBalance={totalBalance} />
		</div>
	);
}

export default App;
