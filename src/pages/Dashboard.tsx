import { GrMoney } from "react-icons/gr";
import { CardInfo } from "../components/shared/card/CardInfo";
import { useEffect, useState } from "react";
import { Budget } from "./Budgets";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase-config";

export function Dashboard() {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const budgetsCollectionRef = collection(db, "budgets");

  const fetchBudgets = async () => {
    try {
      const data = await getDocs(budgetsCollectionRef);
      const fetchedBudgets = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Budget[];
      setBudgets(fetchedBudgets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const totalAmount = budgets.reduce(
    (sum, budget) => sum + parseFloat(budget.amount || "0"),
    0
  );

  return (
    <>
      <div className="-mt-6">
        <h1 className="font-bold text-2xl m-12">Hi, Caroline!</h1>
        <h2 className="text-gray-400 m-12 text-md -mt-10">
          Welcome back! Here's an overview of your finances. Let's manage your
          money effectively and reach your goals!
        </h2>
      </div>

      <div className="flex gap-4">
        <CardInfo
          title="Total Budget"
          value={`$${totalAmount.toFixed(2)}`}
          icon={<GrMoney />}
        />

        <CardInfo
          title="Total Budgets"
          value={budgets.length}
          icon={<GrMoney />}
        />

        <CardInfo
          title="Average Budget"
          value={
            budgets.length > 0
              ? `$${(totalAmount / budgets.length).toFixed(2)}`
              : "$0.00"
          }
          icon={<GrMoney />}
        />
      </div>
    </>
  );
}
