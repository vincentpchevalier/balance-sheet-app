/* eslint-disable react/prop-types */
import BalanceRow from './BalanceRow';
import BalanceCell from './BalanceCell';

function BalanceSheet({ entries, totalBalance }) {
	return (
		<div className="balanceSheetContainer">
			<h2>Balance Sheet</h2>
			<ul id="balanceSheet">
				<BalanceRow>
					<BalanceCell classModifier={'header'}>Description</BalanceCell>
					<BalanceCell classModifier={'header'}>Category</BalanceCell>
					<BalanceCell classModifier={'header'}>Income</BalanceCell>
					<BalanceCell classModifier={'header'}>Expense</BalanceCell>
				</BalanceRow>
				{entries.map((entry) => (
					<BalanceRow key={entry.id} entry={entry}>
						<BalanceCell classModifier={''}>{entry.description}</BalanceCell>
						<BalanceCell classModifier={''}>{entry.category}</BalanceCell>
						<BalanceCell classModifier={'income'}>
							{entry.balance > 0 ? entry.balance : ''}
						</BalanceCell>
						<BalanceCell classModifier={'expense'}>
							{entry.balance < 0 ? Math.abs(entry.balance) : ''}
						</BalanceCell>
					</BalanceRow>
				))}
			</ul>
			<p className="balance">Balance: {totalBalance}</p>
		</div>
	);
}

export default BalanceSheet;
