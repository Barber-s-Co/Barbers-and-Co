import { useContext, useState } from "react";
import { AdmForm } from "./AdmForm";
import { AdmContext } from "../../context/AdmContext";

export const AdmComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { closeModalServices, setModalServices, modalServices } = useContext(AdmContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModalServices = () => {
    setModalServices(true);
  };

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
