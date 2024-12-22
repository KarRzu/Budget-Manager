import { useEffect, useState } from "react";
import { Card } from "../components/shared/card/Card";
import { Modal } from "../components/shared/Modal";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../auth/firebase-config";

export type Budget = {
  date: string | number | Date;
  name: string;
  amount: string;
  id: string;
};

export function Budgets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);

  const budgetsCollectionRef = collection(db, "budgets");

  const getBudgets = async () => {
    try {
      const data = await getDocs(budgetsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBudgets(filteredData as Budget[]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBudgets = async (id: string) => {
    try {
      const budgetDoc = doc(db, "budgets", id);
      await deleteDoc(budgetDoc);

      getBudgets();
    } catch (error) {
      console.log(error);
    }
  };

  const editBudget = async (id: string, updatedData: Partial<Budget>) => {
    try {
      const budgetDoc = doc(db, "budgets", id);
      await updateDoc(budgetDoc, updatedData);
      getBudgets();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBudgets();
  }, []);

  const onSubmitBudgets = async (data: {
    budgetName: string;
    amountName: string;
  }) => {
    try {
      if (editingBudget) {
        await editBudget(editingBudget.id, {
          name: data.budgetName,
          amount: data.amountName,
        });
      } else {
        await addDoc(budgetsCollectionRef, {
          name: data.budgetName,
          amount: data.amountName,
        });
      }
      setIsModalOpen(false);
      setEditingBudget(null);
      getBudgets();
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setEditingBudget(null);
  };

  const startEditing = (budget: Budget) => {
    setEditingBudget(budget);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBudget(null);
  };
  return (
    <>
      <h1 className="p-8 text-2xl font-bold">My Budgets</h1>

      <div className="flex flex-wrap justify-center items-center gap-6 p-4">
        {budgets.map((budget) => (
          <div
            key={budget.id}
            className="w-64 bg-white h-50 p-4 border rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800 truncate">
              {budget.name}
            </h2>
            <p className="text-gray-600 mt-2 text-lg font-semibold">
              {budget.amount}
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

            <div className="flex items-center gap-4">
              <button
                onClick={() => deleteBudgets(budget.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              >
                Delete
              </button>

              <button
                onClick={() => startEditing(budget)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        <Card openModal={openModal} />
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          addBudget={onSubmitBudgets}
          editingBudget={editingBudget}
        />
      )}
    </>
  );
}
