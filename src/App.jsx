import { useState } from 'react';
import './App.css';
import BalanceSheet from './BalanceSheet';
import TrackingForm from './TrackingForm';

const initialEntries = [
	{
		id: 1720021455647,
		date: +new Date('2024/06/21'),
		description: 'Salary',
		category: 'Job',
		balance: 1500,
	},
	{
		id: 1720021500101,
		date: +new Date('2024/07/01'),
		description: 'Rent',
		category: 'Housing',
		balance: -500,
	},
	{
		id: 1720021483577,
		date: +new Date('2024/06/30'),
		description: 'Groceries',
		category: 'Food',
		balance: -75,
	},
];

function App() {
	const [name, setName] = useState('');
	const [entries, setEntries] = useState(initialEntries);

	const totalBalance = entries.reduce((acc, entry) => acc + entry.balance, 0);

	function handleAddEntry(entry) {
		console.log('new entry: ', entry);
		setEntries((entries) => [...entries, entry]);
	}

	function handleNameInput(nm) {
		setName(nm);
	}

	return (
		<div className="App">
			<h1>Expense Tracker</h1>
			<div id="info">
				<h2>Hi {!name ? '...' : name}</h2>
				<input
					type="text"
					placeholder="What's your name?"
					onChange={(e) => handleNameInput(e.target.value)}
				/>
			</div>
			<TrackingForm onAddEntry={handleAddEntry} />
			<BalanceSheet entries={entries} totalBalance={totalBalance} />
		</div>
	);
}

export default App;
