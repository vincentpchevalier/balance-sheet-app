# Balance Sheet Demo

## To Do

1. Clear out the boilerplate code.
2. Create App component.
3. Create BalanceSheet as a unordered list. Add to App component.
4. Create BalanceRow as a list item with 4 span elements: Description, Category, Income, and Expense. Add to BalanceSheet component.
5. Set up a useState hook in the App component. Populate it with initial entries.
6. Pass entries to BalanceSheet component. Map over entries and pass each entry to BalanceRow component.
7. Populate BalanceRow component with Description, Category, Income, and Expense. Set up conditional rendering of income and expense. If 0 set to '' else set to the absolute value. The css will render the income and expense as green and red, respectively.
8. Create TrackingForm component. Add to App component.
9. Add a form to the TrackingForm component with 4 input elements: Date (date), Description (text), Amount (text but convert to number before setting state), and Category (select). The select should have options for "Job", "Housing", and "Food" (add more if you want). Add a submit button.
10. Create three state variables: one for description, amount, and category. Add setState to an onChange event handler for each input. Set description and amount to `''` and category to `'Food'`. Set initial value of select to `category` state variable.
11. Create `handleSubmit` function. Attach it to `onSubmit` event for the form. Create an object called `newEntry` and include a unique id (use Date.now() or Math.random() or crypto.randomUUID()), `date`, `description`, `amount`, and `category`. Add newEntry to `entries` array. (In order to do this you'll need to pass a `handleAddEntry` handler function from `App` to `TrackingForm` that will leverage the `setEntries` useState variable). Set date, description, and amount to `''`. Set category to `'Food'`. Set initial value of select to `category` state variable.
12. Create a piece of derived state called totalBalance by reducing the balance of each entry in the entries array.
13. Pass totalBalance to BalanceSheet component. Render totalBalance in BalanceSheet component.

### Bonus Steps

1. Create a `BalanceCell` component that accepts children and a class modifier.
2. Turn `BalanceRow` into a component that accepts children.
3. In `BalanceSheet`, pass 4 `BalanceCell` components into each of the `BalanceRow` components. In the first row, pass the names `Description`, `Category`, `Income`, and `Expense` and `header` as the class modifiers prop. Use the `BalanceCell` component as the children prop in the map of the entries passed to `BalanceRow`.
