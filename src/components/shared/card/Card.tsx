export function Card() {
  return (
    <div className="w-1/4 bg-white m-6 h-40 p-6 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex justify-center items-center flex-col h-full">
        <h1 className="font-bold text-3xl text-gray-400">+</h1>
        <h2 className="text-gray-600 font-medium text-lg">Create New Budget</h2>
      </div>
    </div>
  );
}
