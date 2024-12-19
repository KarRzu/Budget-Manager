export function Expenses() {
  const expenses = [
    { id: 1, date: "2024-12-15", description: "Groceries", amount: 45.99 },
    {
      id: 2,
      date: "2024-12-16",
      description: "Electricity Bill",
      amount: 75.5,
    },
    {
      id: 3,
      date: "2024-12-17",
      description: "Internet Subscription",
      amount: 30.0,
    },
    { id: 4, date: "2024-12-18", description: "Coffee Shop", amount: 12.5 },
  ];

  return (
    <>
      <h1 className="p-8 text-2xl font-bold">My Expenses</h1>
      <h2 className=" ml-8 -mt-4 text-l font-bold">Latest Expenses</h2>

      <div className="p-8">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {expense.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {expense.description}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  ${expense.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
