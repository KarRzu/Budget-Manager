import { useState } from "react";
import { Card } from "../components/shared/card/Card";
import { Modal } from "../components/shared/Modal";

export function Budgets() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <h1 className="p-8 text-2xl font-bold">My Budgets</h1>
      <Card openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
