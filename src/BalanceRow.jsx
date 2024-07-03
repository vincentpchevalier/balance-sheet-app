/* eslint-disable react/prop-types */
function BalanceRow({ entry }) {
	return (
		<li className="balanceRow">
			<span className="cell source">{entry.source}</span>
			<span className="cell category">{entry.category}</span>
			<span className="cell income">
				{entry.balance > 0 ? entry.balance : ''}
			</span>
			<span className="cell expense">
				{entry.balance < 0 ? Math.abs(entry.balance) : ''}
			</span>
		</li>
	);
}

export default BalanceRow;
