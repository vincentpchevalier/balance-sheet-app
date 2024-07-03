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
	return (
		<div className="App">
			<h1>Expense Tracker</h1>
			<TrackingForm />

			<BalanceSheet />
		</div>
	);
}

export default App;
