/* eslint-disable react/prop-types */
import { useState } from 'react';

function TrackingForm({ onAddEntry }) {
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('Food');

	function handleSubmit(ev) {
		ev.preventDefault();
		console.log(description, amount, category);

		if (!date || !description || !amount) return;

		const newEntry = {
			id: Date.now(),
			date,
			description,
			category,
			balance: amount,
		};

		onAddEntry(newEntry);

		setDescription('');
		setAmount('');
		setCategory('Food');
	}

	return (
		<div>
			<h2>Track Your Income/Expenses</h2>
			<form id="trackingForm" onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="date">Date</label>
					<input
						type="date"
						name="date"
						id="date"
						onChange={(ev) => setDate(ev.target.value)}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						placeholder="Description"
						onChange={(ev) => setDescription(ev.target.value)}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="amount">Amount ($)</label>
					<input
						type="text"
						name="amount"
						placeholder="Amount"
						onChange={(ev) => setAmount(+ev.target.value)}
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="category">Category</label>
					<select
						name="category"
						id="category-select"
						value={category}
						onChange={(ev) => setCategory(ev.target.value)}
					>
						<option value="Food">Food</option>
						<option value="Housing">Housing</option>
						<option value="Job">Job</option>
						<option value="Utilities">Utilities</option>
						<option value="Transportation">Transportation</option>
						<option value="Healthcare">Healthcare</option>
						<option value="Insurance">Insurance</option>
						<option value="Entertainment">Entertainment</option>
						<option value="Other">Other</option>
					</select>
				</fieldset>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default TrackingForm;
