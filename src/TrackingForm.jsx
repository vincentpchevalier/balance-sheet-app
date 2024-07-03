/* eslint-disable react/prop-types */

function TrackingForm() {
	return (
		<div>
			<h2>Track Your Income/Expenses</h2>
			<form id="trackingForm">
				<fieldset>
					<label htmlFor="date">Date</label>
					<input type="date" name="date" id="date" />
				</fieldset>
				<fieldset>
					<label htmlFor="description">Description</label>
					<input
						type="text"
						name="description"
						placeholder="Description"
						id="description"
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="amount">Amount ($)</label>
					<input type="text" name="amount" placeholder="Amount" id="amount" />
				</fieldset>
				<fieldset>
					<label htmlFor="category-select">Category</label>
					<select
						name="category-select"
						id="category-select"
						defaultValue="Food"
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
