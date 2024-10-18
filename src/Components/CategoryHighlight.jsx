import React from 'react';

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

const CategoryHighlight = ({ categoryExpenses }) => {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-4">Expense Category Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(categoryExpenses).map(([category, total]) => {
                    const { background, textColor } = categoryStyles[category] || categoryStyles.Expense; // Default to Expense styling if category not found
                    return (
                        <div key={category} className={`p-4 rounded-lg shadow-md ${background}`}>
                            <h3 className={`font-bold ${textColor}`}>{category}</h3>
                            <p className={`mt-2 font-semibold ${textColor}`}>
                                {total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </p>
                        </div>
                    );
                })}
                {Object.keys(categoryExpenses).length === 0 && (
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 p-4 text-center text-gray-600">
                        No expenses recorded for any category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryHighlight;
