import { SubmitHandler, useForm } from "react-hook-form";

export type ModalProps = {
  closeModal: () => void;
  addBudget: (newBudget: { budgetName: string; amountName: string }) => void;
};

export type InputFields = {
  budgetName: string;
  amountName: string;
};

export function Modal({ closeModal, addBudget }: ModalProps) {
  const { register, handleSubmit } = useForm<InputFields>();
  const onSubmit: SubmitHandler<InputFields> = (data) => {
    addBudget(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 transition"
        >
          X
        </button>

        <h1 className="text-gray-700 font-bold text-2xl mb-4">
          Create New Budget
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-1"
            >
              Budget Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Home Decor"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 "
              {...register("budgetName")}
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-600 font-medium mb-1"
            >
              Budget Amount
            </label>
            <input
              type="text"
              id="price"
              placeholder="e.g. 500$"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 "
              {...register("amountName")}
            />
          </div>

          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
            Create Budget
          </button>
        </form>
      </div>
    </div>
  );
}
