import { GrMoney } from "react-icons/gr";
import { CardInfo } from "../components/shared/card/CardInfo";
import { useState } from "react";
import { Budget } from "./Budgets";

export function Dashboard() {
  const [budget, setBudget] = useState<Budget[]>([]);

  const;

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
        <CardInfo title="Total Budget" value={6} icon={<GrMoney />} />
      </div>
    </>
  );
}
