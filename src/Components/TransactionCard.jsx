import React from 'react';

const TransactionCard = ({ transaction, onDelete }) => {
    const categoryStyles = {
        Income: {
            background: 'bg-green-100',
            textColor: 'text-green-600',
        },
        Expense: {
            background: 'bg-red-100',
            textColor: 'text-red-600',
        },
        Groceries: {
            background: 'bg-yellow-100',
            textColor: 'text-yellow-600',
        },
        Utilities: {
            background: 'bg-blue-100',
            textColor: 'text-blue-600',
        },
        Entertainment: {
            background: 'bg-purple-100',
            textColor: 'text-purple-600',
        },
        Salary: {
            background: 'bg-green-200',
            textColor: 'text-green-800',
        },
        Transportation: {
            background: 'bg-teal-100',
            textColor: 'text-teal-600',
        },
        Healthcare: {
            background: 'bg-pink-100',
            textColor: 'text-pink-600',
        },
    };

    const { background, textColor } = categoryStyles[transaction.category] || categoryStyles.Expense; // Default to Expense styling if category not found

    return (
        <div className={`p-4 rounded shadow-md flex justify-between items-center ${background}`}>
            <div>
                <h3 className="font-bold">{transaction.description}</h3>
                <p className="text-sm text-gray-600">{transaction.category}</p>
            </div>
            <div className="flex items-center">
                <span className={`font-bold ${textColor}`}>
                    {transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </span>
                <button
                    onClick={() => onDelete(transaction.id)}
                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TransactionCard;
