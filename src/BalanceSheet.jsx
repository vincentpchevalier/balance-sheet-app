/* eslint-disable react/prop-types */
import BalanceRow from './BalanceRow';

function BalanceSheet({ entries }) {
	return (
		<ul className="balance-sheet">
			{entries.map((entry, index) => (
				<BalanceRow key={`${entry.source}-${index}`} entry={entry} />
			))}
		</ul>
	);
}

export default BalanceSheet;
