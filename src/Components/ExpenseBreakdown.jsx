import React, { useState } from 'react';

const ExpenseBreakdown = ({ transactions }) => {
  const [categoryExpenses, setCategoryExpenses] = useState({});

  const calculateCategoryExpenses = () => {
    const expensesByCategory = transactions.reduce((acc, transaction) => {
      const category = transaction.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += transaction.amount;
      return acc;
    }, {});

    setCategoryExpenses(expensesByCategory);
  };

  const clearCategoryExpenses = () => {
    setCategoryExpenses({});
  };

  const monthlyExpenses = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += transaction.amount;
    return acc;
  }, {});

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold mb-4">Monthly Expense Breakdown</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Month</th>
            <th className="border px-4 py-2">Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(monthlyExpenses).map(([month, total]) => (
            <tr key={month} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{month}</td>
              <td className="border px-4 py-2">{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            </tr>
          ))}
          {Object.keys(monthlyExpenses).length === 0 && (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan="2">No transactions available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mb-4">
        <button 
          onClick={calculateCategoryExpenses} 
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Calculate Category Expenses
        </button>
        <button 
          onClick={clearCategoryExpenses} 
          className="bg-red-500 text-white px-4 py-2 rounded">
          Clear Category Expenses
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Category Expense Breakdown</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryExpenses).map(([category, total]) => (
            <tr key={category} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{category}</td>
              <td className="border px-4 py-2">{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            </tr>
          ))}
          {Object.keys(categoryExpenses).length === 0 && (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan="2">No category expenses calculated</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseBreakdown;
