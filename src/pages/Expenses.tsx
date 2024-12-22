import { useEffect, useState } from "react";
import { Budget } from "./Budgets";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase-config";

export function Expenses() {
  const [expenses, setExpenses] = useState<Budget[]>([]);

  const budgetsCollectionRef = collection(db, "budgets");

  const fetchedExpenses = async () => {
    try {
      const data = await getDocs(budgetsCollectionRef);
      const fetchExpenses = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Budget[];
      setExpenses(fetchExpenses);
    } catch (error) {
      console.log(error);
    }
  };

  const getBudgets = async () => {
    try {
      const data = await fetchedExpenses();
      const sortedBudgets = data
        .sort(
          (a, b) =>
            new Date(b?.date || new Date()).getTime() -
            new Date(a?.date || new Date()).getTime()
        )
        .slice(0, 5);
      setExpenses(sortedBudgets);
    } catch (error) {
      console.error("Error sorting budgets:", error);
    }
  };

  useEffect(() => {
    getBudgets();
  }, []);

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
                  {new Date(expense.date || new Date()).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {expense.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  {expense.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
