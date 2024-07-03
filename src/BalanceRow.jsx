/* eslint-disable react/prop-types */
function BalanceRow({ entry }) {
	return (
		<li>
			<span className="source">{entry.source}</span>
			<span className="category">{entry.category}</span>
			<span className="income">
				{entry.balance > 0 ? entry.balance : ' #### '}
			</span>
			<span className="expense">
				{entry.balance < 0 ? Math.abs(entry.balance) : ' #### '}
			</span>
		</li>
	);
}

export default BalanceRow;
