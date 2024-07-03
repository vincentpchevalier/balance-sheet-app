/* eslint-disable react/prop-types */
import BalanceRow from './BalanceRow';

function BalanceSheet({ entries, totalBalance }) {
	return (
		<div className="balanceSheetContainer">
			<h2>Balance Sheet</h2>
			<ul id="balanceSheet">
				<li className="balanceRow">
					<span className="source">Description</span>
					<span className="category">Category</span>
					<span className="income">Incoming</span>
					<span className="expense">Outgoing</span>
				</li>
				{entries.map((entry, index) => (
					<BalanceRow key={`${entry.source}-${index}`} entry={entry} />
				))}
			</ul>
			<p className="balance">Balance: {totalBalance}</p>
		</div>
	);
}

export default BalanceSheet;
