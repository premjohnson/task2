import React from 'react';
import TransactionCard from './TransactionCard';

const TransactionList = ({ transactions, onDelete }) => {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            <ul className="space-y-4">
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <TransactionCard transaction={transaction} onDelete={onDelete} />
                    </li>
                ))}
                {transactions.length === 0 && (
                    <li className="p-4 text-center text-gray-600">No transactions available</li>
                )}
            </ul>
        </div>
    );
};

export default TransactionList;
