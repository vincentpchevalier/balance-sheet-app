/* eslint-disable react/prop-types */
import BalanceRow from './BalanceRow';

function BalanceSheet({ entries, totalBalance }) {
	return (
		<div id="balanceSheet">
			<h2>Balance Sheet</h2>
			<ul className="balanceRows">
				{entries.map((entry, index) => (
					<BalanceRow key={`${entry.source}-${index}`} entry={entry} />
				))}
			</ul>
			<p className="balance">Balance: {totalBalance}</p>
		</div>
	);
}

export default BalanceSheet;
