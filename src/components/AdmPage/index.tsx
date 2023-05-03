import { useState } from "react";
import { AdmForm } from "./AdmForm";

export const AdmComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalServices, setModalServices] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalServices = () => {
    setModalServices(true);
  };
  const closeModalServices = () => setModalServices(false);

  return (
    <AdmForm
      openModal={openModal}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      openModalServices={openModalServices}
      closeModalServices={closeModalServices}
      modalServices={modalServices}
    />
  );
};
