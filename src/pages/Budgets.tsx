import { useState } from "react";
import { Card } from "../components/shared/card/Card";
import { Modal } from "../components/shared/Modal";

export type Budget = {
  budgetName: string;
  amountName: string;
};

export function Budgets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addBudget = (newBudget: Budget) => {
    setBudgets((prevBudgets) => [...prevBudgets, newBudget]);
    closeModal();
  };

  return (
    <>
      <h1 className="p-8 text-2xl font-bold">My Budgets</h1>

      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        {budgets.map((budget, index) => (
          <div
            key={index}
            className="w-64 bg-white h-40 p-4 border rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800 truncate">
              {budget.budgetName}
            </h2>

            <p className="text-gray-600 mt-2 text-lg font-semibold">
              {budget.amountName}
            </p>

            <div className="relative mt-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: "50%" }} // Przykładowy progres, można dostosować
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">50% used</p>
            </div>
          </div>
        ))}

        <Card openModal={openModal} />
      </div>

      {isModalOpen && <Modal closeModal={closeModal} addBudget={addBudget} />}
    </>
  );
}
