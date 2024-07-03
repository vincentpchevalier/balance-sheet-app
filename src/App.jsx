import { useState } from 'react';
import './App.css';
import BalanceSheet from './BalanceSheet';
import TrackingForm from './TrackingForm';

const initialEntries = [
	{
		id: 1720021455647,
		date: new Date('2024/07/01'),
		source: 'Salary',
		category: 'Job',
		balance: 1500,
	},
	{
		id: 1720021500101,
		date: new Date('2024/06/28'),
		source: 'Rent',
		category: 'Housing',
		balance: -500,
	},
	{
		id: 1720021483568,
		date: new Date('2024/07/02'),
		source: 'Groceries',
		category: 'Food',
		balance: -75,
	},
];

function App() {
	const [entries, setEntries] = useState(initialEntries);

	const totalBalance = entries.reduce((acc, entry) => acc + entry.balance, 0);

	function handleAddEntry(entry) {
		console.log('new entry: ', entry);
		setEntries((entries) => [...entries, entry]);
	}

	return (
		<div className="App">
			<h1>Expense Tracker</h1>
			<TrackingForm onAddEntry={handleAddEntry} />
			<BalanceSheet entries={entries} totalBalance={totalBalance} />
		</div>
	);
}

export default App;
