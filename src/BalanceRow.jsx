/* eslint-disable react/prop-types */
function BalanceRow({ entry }) {
	return (
		<li>
			<span className="source">{entry.source}</span>
			<span className="category">{entry.category}</span>
			<span className="income">{entry.amount > 0 ? entry.amount : ''}</span>
			<span className="expense">
				{entry.amount < 0 ? Math.abs(entry.amount) : ''}
			</span>
		</li>
	);
}

export default BalanceRow;
