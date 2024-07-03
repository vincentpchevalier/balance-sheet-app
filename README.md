# Balance Sheet Demo

## To Do

1. Clear out the boilerplate code.
2. Create App component.
3. Create BalanceSheet as a unordered list. Add to App component.
4. Create BalanceRow as a list item with 4 span elements: Source, Category, Income, and Expense. Add to BalanceSheet component.
5. Set up a useState hook in the App component. Populate it with initial entries.
6. Pass entries to BalanceSheet component. Map over entries and pass each entry to BalanceRow component.
7. Populate BalanceRow component with Source, Category, Income, and Expense. Set up conditional rendering of income and expense. If 0 set to '' else set to the absolute value. The css will render the income and expense as green and red, respectively.

... Create a piece of derived state called totalBalance by reducing the balance of each entry in the entries array.
... Pass totalBalance to BalanceSheet component. Render totalBalance in BalanceSheet component.

```txt
|---src
|
|---App
|---TrackingForm
|   |---SubmitButton
|---BalanceSheet
    |---BalanceRow
        |---ExpenseCategory
```
