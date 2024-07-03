/* eslint-disable react/prop-types */

function BalanceSheet() {
	return (
		<div className="balanceSheetContainer">
			<h2>Balance Sheet</h2>
			<ul id="balanceSheet">{/* BalanceRows */}</ul>
			<p className="balance">Balance: $XXXX.XX</p>
		</div>
	);
}

export default BalanceSheet;
