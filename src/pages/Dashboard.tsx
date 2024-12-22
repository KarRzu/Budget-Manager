import { GrMoney } from "react-icons/gr";

export function Dashboard() {
  return (
    <>
      <div className="-mt-6">
        <h1 className="font-bold text-2xl m-12">Hi, Caroline!</h1>
        <h2 className="text-gray-400 m-12 text-md -mt-10">
          Welcome back! Here's an overview of your finances. Let's manage your
          money effectively and reach your goals!
        </h2>
      </div>

      {/* zrobic z tego osobny komponennt  CardInfo */}

      <div className="flex gap-4">
        <div className="w-1/4  border border-gray-400 rounded-lg shadow-lg p-6 bg-white flex align-middle flex-col ml-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-700">
              Total Budget
            </h1>
            <h2 className="text-2xl font-bold text-purple-700 mt-2">$11.5K</h2>
          </div>
          {/* img */}
          <div className="border rounded-full bg-purple-700 w-12 h-12 flex items-center justify-center text-white">
            <GrMoney />
          </div>
        </div>

        <div className="w-1/4  border border-gray-400 rounded-lg shadow-lg p-6 bg-white flex align-middle flex-col ml-6">
          <h1 className="text-xl font-semibold text-gray-700">Total Budget</h1>
          <h2 className="text-2xl font-bold text-purple-700 mt-2">$11.5K</h2>
        </div>

        <div className="w-1/4  border border-gray-400 rounded-lg shadow-lg p-6 bg-white flex align-middle flex-col ml-6">
          <h1 className="text-xl font-semibold text-gray-700">Total Budget</h1>
          <h2 className="text-2xl font-bold text-purple-700 mt-2">$11.5K</h2>
        </div>
      </div>
    </>
  );
}
