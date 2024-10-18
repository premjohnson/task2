import React, { useState } from 'react';

const AddTransactionForm = ({ setTransactions }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { id: Date.now(), description, amount: parseFloat(amount), category, date };
    setTransactions((prev) => [...prev, newTransaction]);
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 max-w-xs mx-auto">
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="border rounded p-2"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        className="border rounded p-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="border rounded p-2"
      >
        <option value="">Select Category</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
        <option value="Groceries">Groceries</option>
        <option value="Rent">Rent</option>
        <option value="Utilities">Utilities</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Savings">Savings</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="border rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
