/* eslint-disable react/prop-types */
function BalanceCell({ children, classModifier }) {
	return <span className={`cell ${classModifier}`}>{children}</span>;
}

export default BalanceCell;
