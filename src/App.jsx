import React, { useState } from 'react';
import TransactionList from './Components/TransactionList'; 
import AddTransactionForm from './Components/AddTransactionForm';
import ExpenseBreakdown from './Components/ExpenseBreakdown';
import CategoryHighlight from './Components/CategoryHighlight';

const App = () => {
    const [transactions, setTransactions] = useState([]); 

    // Function to calculate expenses by category
    const calculateCategoryExpenses = () => {
        return transactions.reduce((acc, transaction) => {
            const category = transaction.category || 'Uncategorized';
            if (!acc[category]) {
                acc[category] = 0;
            }
            acc[category] += transaction.amount;
            return acc;
        }, {});
    };

    // Get category expenses from transactions
    const categoryExpenses = calculateCategoryExpenses();

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold text-center">Budget Tracker</h1>
            <AddTransactionForm setTransactions={setTransactions} />
            <TransactionList transactions={transactions} onDelete={id => setTransactions(transactions.filter(t => t.id !== id))} />
            <ExpenseBreakdown transactions={transactions} />
            <CategoryHighlight categoryExpenses={categoryExpenses} />
        </div>
    );
};

export default App;
